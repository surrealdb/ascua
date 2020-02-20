import Core from '@ember/object';
import context from '@ascua/context';
import { inject } from '@ember/service';
import { setProperties } from '@ember/object';
import Patch from '../dmp/patch';
import Diff from '../dmp/diff';

const INITIAL = Symbol("Initial");
const SAVING = Symbol("Saving");
const LOADED = Symbol("Loaded");
const RESYNC = Symbol("Resync");

export default class Model extends Core {

	static create(data = {}) {

		for (const key in data) {
			switch (true) {
			case data[key] === null:
				delete data[key];
				break;
			case data[key] === undefined:
				delete data[key];
				break;
			}
		}

		return super.create(...arguments);

	}

	@inject store;

	#id = null;

	#meta = undefined;

	#data = undefined;

	// Current record state
	#state = INITIAL;

	// Context cancel function
	#cancel = undefined;

	// Last state of sent data
	#client = undefined;

	// Last state of received data
	#server = undefined;

	// Current remote server promise
	#promise = undefined;

	// The `tb` property can be used
	// to retrieve the actual table
	// that this record belongs to.

	get tb() {
		return this.#meta.tb;
	}

	// The `id` property can be used
	// to retrieve the actual thing
	// id for this Surreal record.

	get id() {
		return this.#id;
	}

	set id(value) {
		return this.#id = this.#id || value;
	}

	// The `meta` property stores the
	// raw table and id of the record
	// which is generated on the server.

	get meta() {
		return this.#meta;
	}

	set meta(value) {
		return this.#meta = this.#meta || value;
	}

	// The `data` property can be used
	// to retrieve the underlying data
	// that is used with the record.

	get data() {
		return this.#data = this.#data || {};
	}

	// The `json` property returns a
	// JSON representation copy of the
	// record's current data snapshot.

	get json() {
		return JSON.parse(JSON.stringify(this));
	}

	// The `diff` property returns a
	// DIFF representation copy of the
	// record's current data snapshot.

	get diff() {
		return new Diff(this.#client, this.json).output();
	}

	// When formatted as a string, the
	// record will output the record
	// id, with both table and id.

	toString() {
		return this.#id;
	}

	// When formatted as a JSON string,
	// the record's underlying data will
	// be used for serlialization.

	toJSON() {
		return this.data;
	}

	/**
	 * Finalizes the record setup.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	init() {
		super.init(...arguments);
		this.#state = LOADED;
		this.#server = this.json;
		this.#client = this.json;
	}

	/**
	 * Enables setting undefined properties.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	setUnknownProperty() {
		// Ignore
	}

	/**
	 * Save the record to the database.
	 *
	 * @returns {Promise} Promise object with the saved record.
	 */

	async save() {
		if (this.#cancel) this.#cancel();
		let [ctx, canc] = context.withCancel();
		this.#cancel = canc;
		return this.looper(ctx);
	}

	/**
	 * Autosaves the record to the database.
	 *
	 * @returns {Promise} Promise object with the saved record.
	 */

	async autosave() {
		// Ignore
	}

	/**
	 * Rollback the record without saving.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	rollback() {
		let undo = {};
		let data = this.#data;
		let client = this.#client;
		let server = this.#server;
		this.#state = RESYNC;
		Object.keys(server).forEach(key => {
			undo[key] = server[key] || undefined;
		});
		Object.keys(client).forEach(key => {
			undo[key] = server[key] || undefined;
		});
		Object.keys(data).forEach(key => {
			undo[key] = server[key] || undefined;
		});
		setProperties(this, undo);
		this.#state = LOADED;
		return
	}

	/**
	 * Initiates a record modification from the
	 * server based on the modified record data.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	ingest(data) {
		this.#state = RESYNC;
		this.#server = data;
		let changes = new Diff(this.#client, this.json).output();
		let current = new Patch(this.#server, changes).output();
		setProperties(this, current);
		this.#client = this.json;
		this.#state = LOADED;
		if (changes.length) {
			this.autosave();
		}
	}

	/**
	 * Initiates a record update with the database.
	 *
	 * @returns {Promise} Promie object with the updated record.
	 */

	async update() {
		this.#client = this.json;
		try {
			this.#promise = this.store.update(this);
			return await this.#promise;
		} catch (e) {
			this.#promise = undefined;
			throw e;
		}
	}

	/**
	 * Initiates a record delete with the database.
	 *
	 * @returns {Promise} Promise object with the deleted record.
	 */

	async delete() {
		this.#client = this.json;
		try {
			this.#promise = this.store.delete(this);
			return await this.#promise;
		} catch (e) {
			this.#promise = undefined;
			throw e;
		}
	}

	/**
	 * Check to see if an update can be pushed to the
	 * server. If the record is already saving, then
	 * the method will wait until it has finished,
	 * before saving again. If the record is resyncing
	 * then the save will be ignored.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	async looper(ctx) {

		try {
			switch (this.#state) {
			case SAVING:
				await ctx.delay(500);
				break;
			case LOADED:
				await ctx.delay(100);
				break;
			}
		} catch (e) {
			return;
		}

		switch (this.#state) {
		case SAVING:
			this.#state = SAVING;
			await this.#promise;
			return this.looper(ctx);
		case LOADED:
			this.#state = SAVING;
			await this.#promise;
			return this.update(ctx);
		}

	}

}
