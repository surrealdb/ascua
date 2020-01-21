import Core from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Field extends Core {

	#data = {};

	#parent = undefined;

	// The `data` property can be used
	// to retrieve the underlying data
	// that is used with the record.

	get data() {
		return this.#data;
	}

	set data(value) {
		return this.#data = value;
	}

	// When formatted as a JSON string,
	// the record's underlying data will
	// be used for serlialization.

	toJSON() {
		return this.#data;
	}

	/**
	 * Save the record to the database.
	 * @returns {Promise} Promise object with the saved record.
	 */

	save() {
		return this.#parent && this.#parent.save();
	}

	/**
	 * Autosave the record to the database.
	 * @returns {Promise} Promise object with the saved record.
	 */

	autosave() {
		return this.#parent && this.#parent.autosave();
	}

}
