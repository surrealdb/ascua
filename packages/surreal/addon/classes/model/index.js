import Core from '@ember/object';
import context from '@ascua/context';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { set, setProperties } from '@ember/object';
import { defer } from '@ascua/queue';
import Patch from '../dmp/patch';
import Diff from '../dmp/diff';

export const INITIAL = Symbol("INITIAL");
export const LOADING = Symbol("LOADING");
export const UPDATED = Symbol("UPDATED");
export const DELETED = Symbol("DELETED");

export default class Model extends Core {

	@inject store;

	#id = null;

	#meta = undefined;

	#data = undefined;

	// Current record state
	#state = INITIAL;

	// Current context object
	#ctx = undefined;

	// Context cancel function
	#cancel = undefined;

	// Last state of sent data
	#client = undefined;

	// Last state of received data
	#server = undefined;

	// Property for whether the record exists
	@tracked exists = undefined;

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

	// The `state` property enables an
	// external observer to see which
	// syncing state the record is in.

	get state() {
		return this.#state;
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
		this.exists = true;
		this.#state = UPDATED;
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
	 * Autosaves the record to the database.
	 *
	 * @returns {Promise} Promise object with the saved record.
	 */

	autosave() {
		// Ignore
	}

	/**
	 * Update the record in the database.
	 *
	 * @returns {Promise} Promise object with the updated record.
	 */

	update() {
		if (this.#cancel) this.#cancel();
		[this.#ctx, this.#cancel] = context.withCancel();
		return this._update.queue();
	}

	/**
	 * Delete the record in the database.
	 *
	 * @returns {Promise} Promise object with the deleted record.
	 */

	delete() {
		if (this.#cancel) this.#cancel();
		[this.#ctx, this.#cancel] = context.withCancel();
		return this._delete.queue();
	}

	/**
	 * Save the record to the database.
	 *
	 * @returns {Promise} Promise object with the saved record.
	 */

	save() {
		if (this.#cancel) this.#cancel();
		[this.#ctx, this.#cancel] = context.withCancel();
		return this._modify.queue();
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

		this.#state = LOADING;

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

		this.#state = UPDATED;

		return

	}

	/**
	 * Initiates a record modification from the
	 * server based on the modified record data.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	ingest(data) {

		this.#state = LOADING;

		// Store the current record data from the server

		this.#server = this.store.lookup(this.tb).create(data);

		// Calculate changes while data was in flight

		let changes = new Diff(this.#client, this.json).output();

		// Merge in-flight changes with server changes

		let current = new Patch(this.#server.json, changes).output();

		// Reapply in-flight changes to local record

		for (const key in current) {
			this[key] = current[key];
		}

		this.#client = this.#server.json;

		this.#state = UPDATED;

		if (changes.length) {
			this.autosave();
		}

	}

	/**
	 * Initiates a record update with the database.
	 *
	 * @returns {Promise} Promise object with the updated record.
	 */

	@defer async _modify() {

		try {
			await this.#ctx.delay(250);
			let diff = new Diff(this.#server.json, this.json).output();
			if (diff.length) {
				this.exists = true;
				this.#state = LOADING;
				this.#client = this.json;
				return this.store.modify(this, diff);
			}
		} catch (e) {
			// Ignore
		} finally {
			this.#state = UPDATED;
		}

	}

	/**
	 * Initiates a record update with the database.
	 *
	 * @returns {Promise} Promise object with the updated record.
	 */

	@defer async _update() {

		try {
			await this.#ctx.delay(250);
			this.exists = true;
			this.#state = LOADING;
			this.#client = this.json;
			return this.store.update(this);
		} catch (e) {
			// Ignore
		} finally {
			this.#state = UPDATED;
		}

	}

	/**
	 * Initiates a record delete with the database.
	 *
	 * @returns {Promise} Promise object with the deleted record.
	 */

	@defer async _delete() {

		try {
			await this.#ctx.delay(250);
			this.exists = false;
			this.#state = LOADING;
			this.#client = this.json;
			return this.store.delete(this);
		} catch (e) {
			// Ignore
		} finally {
			this.#state = DELETED;
		}

	}

}
