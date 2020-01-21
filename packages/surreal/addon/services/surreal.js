import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import Service from '../classes/service';
import Storage from '../classes/storage';
import Database from 'surreal';
import JWT from '../utils/jwt';

export default class Surreal extends Service {

	@inject store;

	// The underlying instance of
	// the Surreal database which
	// connects to the server.

	db = Database.Instance;

	// The localStorage proxy class
	// which enables us to write to
	// localStorage if it is enabled.

	storage = new Storage();

	// The contents of the token
	// used for authenticating with
	// the Surreal database;

	@tracked token = null;

	// Whether we can proceed to
	// transition to authenticated
	// and unauthenticated routes.

	@tracked opened = false;

	// Whether there has been an
	// attempt to authenticate the
	// connection with the database.

	@tracked attempted = false;

	// Whether the connection to the
	// Surreal database has been
	// invalidated with no token.

	@tracked invalidated = false;

	// Whether the connection to the
	// Surreal database has been
	// authenticated with a token.

	@tracked authenticated = false;

	// Add a computed property for
	// the authentication token so
	// we can its contents if needed.

	@computed('token') get jwt() {
		return JWT(this.token);
	}

	// Setup the Surreal service,
	// listening for token changes
	// and connecting to the DB.

	constructor() {

		super(...arguments);

		// Listen for changes to the local storage
		// authentication key, and reauthenticate
		// if the token changes from another tab.

		if (window && window.addEventListener) {
			window.addEventListener('storage', (e) => {
				if (e.key == 'surreal') {
					this.authenticate(this.token = e.newValue);
				}
			});
		}

		// Get the token so that it populates
		// the jwt getter value, so that the
		// token contents can be accessed.

		this.token = this.db.token = this.storage.get('surreal');

		// When the connection is closed we
		// change the relevant properties
		// stop live queries, and trigger.

		this.db.on('closed', () => {
			this.opened = false;
			this.attempted = false;
			this.invalidated = false;
			this.authenticated = false;
			this.emit('closed');
		});

		// When the connection is opened we
		// change the relevant properties
		// open live queries, and trigger.

		this.db.on('opened', () => {
			this.opened = true;
			this.attempted = false;
			this.invalidated = false;
			this.authenticated = false;
			this.emit('opened');
		});

		// When the connection is opened we
		// always attempt to authenticate
		// or mark as attempted if no token.

		this.db.on('opened', async () => {
			let res = await this.wait();
			this.attempted = true;
			this.emit('attempted');
			if (res instanceof Error) {
				this.invalidated = true;
				this.emit('invalidated');
			} else {
				this.authenticated = true;
				this.emit('authenticated');
			}
		});

		// When we receive a socket message
		// we process it. If it has an ID
		// then it is a query response.

		this.db.on('notify', (e) => {

			this.emit(e.action, e.result);

			switch (e.action) {
				case 'CREATE':
				return this.store.inject(e.result);
				case 'UPDATE':
				return this.store.inject(e.result);
				case 'DELETE':
				return this.store.remove(e.result);
			}

		});

		// Get the configuration options
		// which have been specified in the
		// app environment config file.

		let config = getOwner(this).lookup('ascua:surreal');

		// Open the websocket for the first
		// time. This will automatically
		// attempt to reconnect on failure.

		this.db.connect(config.url, config.opts);

	}

	// Tear down the Surreal service,
	// ensuring we stop the pinger,
	// and close the WebSocket.

	willDestroy() {

		this.db.close();

		super.willDestroy(...arguments);

	}

	// --------------------------------------------------
	// Direct methods
	// --------------------------------------------------

	sync() {
		return this.db.sync(...arguments);
	}

	wait() {
		return this.db.wait(...arguments);
	}

	live() {
		return this.db.live(...arguments);
	}

	kill() {
		return this.db.kill(...arguments);
	}

	info() {
		return this.db.info(...arguments);
	}

	query() {
		return this.db.query(...arguments);
	}

	select() {
		return this.db.select(...arguments);
	}

	create() {
		return this.db.create(...arguments);
	}

	update() {
		return this.db.update(...arguments);
	}

	change() {
		return this.db.change(...arguments);
	}

	modify() {
		return this.db.modify(...arguments);
	}

	delete() {
		return this.db.delete(...arguments);
	}

	// --------------------------------------------------
	// Authentication methods
	// --------------------------------------------------

	async signup() {
		try {
			let e = await this.db.signup(...arguments);
			this.storage.set('surreal', e.result);
			this.token = e.result;
			this.attempted = true;
			this.invalidated = false;
			this.authenticated = true;
			this.emit('attempted');
			this.emit('authenticated');
			return Promise.resolve();
		} catch (e) {
			this.storage.set('surreal', null);
			this.token = null;
			this.attempted = true;
			this.invalidated = true;
			this.authenticated = false;
			this.emit('attempted');
			this.emit('invalidated');
			return Promise.reject();
		}
	}

	async signin() {
		try {
			let e = await this.db.signin(...arguments);
			this.storage.set('surreal', e.result);
			this.token = e.result;
			this.attempted = true;
			this.invalidated = false;
			this.authenticated = true;
			this.emit('attempted');
			this.emit('authenticated');
			return Promise.resolve();
		} catch (e) {
			this.storage.set('surreal', null);
			this.token = null;
			this.attempted = true;
			this.invalidated = true;
			this.authenticated = false;
			this.emit('attempted');
			this.emit('invalidated');
			return Promise.reject();
		}
	}

	async invalidate() {
		try {
			let e = await this.db.invalidate(...arguments);
			this.storage.set('surreal', null);
			this.token = null;
			this.attempted = true;
			this.invalidated = true;
			this.authenticated = false;
			this.emit('attempted');
			this.emit('invalidated');
			return Promise.resolve();
		} catch (e) {
			this.storage.set('surreal', null);
			this.token = null;
			this.attempted = true;
			this.invalidated = true;
			this.authenticated = false;
			this.emit('attempted');
			this.emit('invalidated');
			return Promise.resolve();
		}
	}

	async authenticate() {
		try {
			let e = await this.db.authenticate(...arguments);
			this.attempted = true;
			this.invalidated = false;
			this.authenticated = true;
			this.emit('attempted');
			this.emit('authenticated');
			return Promise.resolve();
		} catch (e) {
			this.attempted = true;
			this.invalidated = true;
			this.authenticated = false;
			this.emit('attempted');
			this.emit('invalidated');
			return Promise.resolve();
		}
	}

}
