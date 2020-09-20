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

	// The `diff` property returns a
	// DIFF representation copy of the
	// record's current data snapshot.

	get diff() {
		return new Diff(this.#client, this.json).output();
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
		return this._update.queue();
	}

	/**
	 * Delete the record in the database.
	 *
	 * @returns {Promise} Promise object with the deleted record.
	 */

	delete() {
		return this._delete.queue();
	}

	/**
	 * Save the record to the database.
	 *
	 * @returns {Promise} Promise object with the saved record.
	 */

	save() {
		return this._update.queue();
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

		this.#server = data;

		let changes = new Diff(this.#client, this.json).output();
		let current = new Patch(this.#server, changes).output();

		for (const key in current) {
			let old = JSON.stringify(this[key]);
			let now = JSON.stringify(current[key]);
			if (old != now) {
				set(this, key, current[key]);
			}
		}

		this.#client = this.json;

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

	@defer _update() {

		this.exists = true;
		this.#state = LOADING;
		this.#client = this.json;

		try {
			return this.store.update(this);
		} catch (e) {
			throw e;
		} finally {
			this.#state = UPDATED;
		}

	}

	/**
	 * Initiates a record delete with the database.
	 *
	 * @returns {Promise} Promise object with the deleted record.
	 */

	@defer _delete() {

		this.exists = false;
		this.#state = LOADING;
		this.#client = this.json;

		try {
			return this.store.delete(this);
		} catch (e) {
			throw e;
		} finally {
			this.#state = DELETED;
		}

	}

}
