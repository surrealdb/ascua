import Core from '@ember/object';
import { inject } from '@ember/service';

export default class Field extends Core {

	@inject store;

	#data = undefined;

	#parent = undefined;

	// The `data` property can be used
	// to retrieve the underlying data
	// that is used with the record.

	get data() {
		return this.#data = this.#data || {};
	}

	// The `parent` property can be used
	// to retrieve the underlying parent
	// model that owns this record.

	get parent() {
		return this.#parent;
	}

	set parent(value) {
		this.#parent = this.#parent || value;
	}

	// When formatted as a JSON string,
	// the record's underlying data will
	// be used for serlialization.

	toJSON() {
		return this.data;
	}

	/**
	 * Enables setting undefined properties.
	 * @returns {undefined} Does not return anything.
	 */

	setUnknownProperty() {
		// Ignore
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
