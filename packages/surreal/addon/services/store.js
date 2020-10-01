import Cache from '../classes/cache';
import Service from '@ember/service';
import { inject } from '@ember/service';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import Model from '@ascua/surreal/model';
import count from "../builders/count";
import table from "../builders/table";

export default class Store extends Service {

	@inject surreal;

	#cache = new Cache();

	#stack = new Object();

	/**
	 * Reset the store.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	reset() {
		for (const k in this.#cache.data) {
			this.#cache.get(k).clear();
		}
	}

	/**
	 * Lookup the model by its name.
	 *
	 * @returns {Model} The class for the desired model.
	 */

	lookup(model) {
		return getOwner(this).factoryFor(`model:${model}`);
	}

	/**
	 * Find records in the store. This is an alias
	 * for the select method, as the Ember Router
	 * will use this method if a Route's model
	 * hook has not been defined.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the desired records.
	 */

	async find() {
		return this.select(...arguments);
	}

	/**
	 * Query records in the store. This is an alias
	 * for the search method, as the Ember Router
	 * will use this method if a Route's model
	 * hook has not been defined.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the desired records.
	 */

	async query() {
		return this.search(...arguments);
	}

	/**
	 * Remove records from the local record cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the removed records.
	 */

	async remove(ids) {

		return [].concat(ids).map(async id => {
			return await this.unload(id.split(':')[0], id);
		});

	}

	/**
	 * Inject records into the local record cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the removed records.
	 */

	async inject(items) {

		let records = [].concat(items).map(async item => {

			let cached = await this.cached(item.meta.tb, item.id);

			if (cached === undefined) {
				cached = this.lookup(item.meta.tb).create(item);
				this.#cache.get(item.meta.tb).addObject(cached);
			} else {
				cached.ingest.queue(item);
			}

			return cached;

		});

		switch ( Array.isArray(items) ) {
		case true:
			return await Promise.all(records);
		case false:
			return await records[0];
		}

	}

	/**
	 * Remove records from the local record cache.
	 * The second argument can be a single id, an
	 * array of ids, or undefined. If no id is
	 * specified, then all records of the specified
	 * type will be removed from the cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the removed records.
	 */

	async unload(model, id) {

		assert('The model type must be a string', typeof model === 'string');

		if (id !== undefined) {

			if (Array.isArray(id)) {
				return this.#cache.get(model).remove( v => id.includes(v) );
			} else {
				return this.#cache.get(model).removeBy('id', id);
			}

		} else {

			return this.#cache.get(model).clear();

		}

	}

	/**
	 * Retrieve records from the local record cache.
	 * The second argument can be a single id, an
	 * array of ids, or undefined. If no id is
	 * specified, then all records of the specified
	 * type will be retrieved from the cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the cached records.
	 */

	async cached(model, id) {

		assert('The model type must be a string', typeof model === 'string');

		if (id !== undefined) {

			if (Array.isArray(id)) {
				return this.#cache.get(model).filter( v => id.includes(v) );
			} else {
				return this.#cache.get(model).findBy('id', id);
			}

		} else {

			return this.#cache.get(model);

		}

	}

	/**
	 * Fetch records from the remote database server
	 * only, and inject the data into the cache. The
	 * second argument can be a single id, an array
	 * of ids, or undefined. If no id is specified,
	 * then all records of the specified type will be
	 * retrieved from the database. This method will
	 * update the local record cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the desired records.
	 */

	async remote(model, id) {

		assert('The model type must be a string', typeof model === 'string');

		let server = await this.surreal.select(model, id);
		return this.inject(server);

	}

	/**
	 * Creates a record in the database and in the
	 * local cache. If the create is not successful
	 * due to an error or permissions failure, then
	 * the record will not be stored locally.
	 *
	 * @param {string} model - The model type.
	 * @param {string} id - Optional record id.
	 * @param {Object} data - The record data.
	 * @returns {Promise} Promise object with the updated record.
	 */

	async create(model, id, data) {

		assert('The model type must be a string', typeof model === 'string');

		if (arguments.length === 2) {
			[id, data] = [undefined, id];
		}

		let record = this.lookup(model).create(data);
		let server = await this.surreal.create(model, id, record.data);
		await this.inject(server);
		return this.cached(model, server.id);

	}

	/**
	 * Updates all record changes with the database.
	 * If the update is not successful due to an
	 * error or permissions failure, then the record
	 * will be rolled back.
	 *
	 * @param {Model} record - A record.
	 * @returns {Promise} Promise object with the updated record.
	 */

	async modify(record, diff) {

		assert('You must pass a record to be modified', record instanceof Model);

		try {

			let server = await this.surreal.modify(record.tb, record.id, diff);
			record.ingest.queue(server);
			return record;

		} catch (e) {

			record.rollback();

			throw e;

		}

	}

	/**
	 * Updates all record changes with the database.
	 * If the update is not successful due to an
	 * error or permissions failure, then the record
	 * will be rolled back.
	 *
	 * @param {Model} record - A record.
	 * @returns {Promise} Promise object with the updated record.
	 */

	async update(record) {

		assert('You must pass a record to be updated', record instanceof Model);

		try {

			let server = await this.surreal.change(record.tb, record.id, record.json);
			record.ingest.queue(server);
			return record;

		} catch (e) {

			record.rollback();

			throw e;

		}

	}

	/**
	 * Deletes a record from the database and removes
	 * it from the local cache. If the delete is not
	 * successful due to an error or permissions
	 * failure, then the record will be rolled back.
	 *
	 * @param {Model} record - A record.
	 * @returns {Promise} Promise object with the delete record.
	 */

	async delete(record) {

		assert('You must pass a record to be deleted', record instanceof Model);

		try {

			await this.surreal.delete(record.tb, record.id);
			return this.unload(record.tb, record.id);

		} catch (e) {

			record.rollback();

			throw e;

		}

	}

	/**
	 * Select records from the remote database server
	 * or from the local record cache if cached. The
	 * second argument can be a single id, an array
	 * of ids, or undefined. If no id is specified,
	 * then all records of the specified type will be
	 * retrieved from the database. This method will
	 * update the local record cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @param {Object} opts - Select options object.
	 * @returns {Promise} Promise object with the desired records.
	 */

	async select(model, id, opts) {

		assert('The model type must be a string', typeof model === 'string');

		opts = Object.assign({}, { reload: false }, opts);

		if (this.#stack[id||model] === undefined) {

			this.#stack[id||model] = this.cached(model, id).then(cached => {

				switch (true) {
				case cached === undefined || cached.length === 0 || opts.reload === true:
					return this.remote(model, id).then(result => {
						delete this.#stack[id||model];
						return result;
					});
				case cached !== undefined && cached.length !== 0 && opts.reload !== true:
					return this.cached(model, id).then(result => {
						delete this.#stack[id||model];
						return result;
					});
				}

			});

		}

		return await this.#stack[id||model];

	}

	/**
	 * Count the total number of records within the
	 * remote database server, for the given search
	 * query paramaters. The second argument is an
	 * object containing query parameters which will
	 * be built into a count(*) SQL query. This method
	 * will return a number with the total records.
	 *
	 * @param {string} model - The model type.
	 * @param {Object} query - The query parameters.
	 * @returns {Promise} Promise object with the total number of records.
	 */

	async count(model, query) {

		let { text, vars } = count(model, query);

		let [json] = await this.surreal.query(text, vars);

		const { status, detail, result = [] } = json;

		if (status !== 'OK') throw new Error(detail);

		return result && result[0] && result[0].count || 0;

	}

	/**
	 * Search for records within the remote database
	 * server, skipping records already in the cache.
	 * The second argument is an object containing
	 * query parameters which will be built into an
	 * SQL query. This method will not update records
	 * in the local cache.
	 *
	 * @param {string} model - The model type.
	 * @param {Object} query - The query parameters.
	 * @returns {Promise} Promise object with the desired matching records.
	 */

	async search(model, query) {

		let { text, vars } = table(model, query);

		let [json] = await this.surreal.query(text, vars);

		const { status, detail, result = [] } = json;

		if (status !== 'OK') throw new Error(detail);

		let records = [].concat(result).map(item => {

			let cached = this.#cache.get(model).findBy('id', item.id);

			if (cached === undefined) {
				cached = this.lookup(model).create(item);
				this.#cache.get(model).addObject(cached);
			} else {
				cached.ingest.queue(item);
			}

			return cached;

		});

		return query.limit === 1 ? records[0] : records;

	}

}
