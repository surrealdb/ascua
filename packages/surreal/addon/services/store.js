import Cache from '../classes/cache';
import Service from '@ember/service';
import { set } from '@ember/object';
import { inject } from '@ember/service';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import Model from '@ascua/surreal/model';

export default class Store extends Service {

	@inject surreal;

	cache = new Cache();

	stack = new Object();

	lookup(model) {
		return getOwner(this).factoryFor(`model:${model}`);
	}

	/**
	 * Reset the store.
	 *
	 * @returns {undefined} Does not return anything.
	 */

	reset() {
		this.cache = new Cache();
	}

	/**
	 * Remove records from the local record cache.
	 *
	 * @param {string} model - The model type.
	 * @param {undefined|string|Array} id - A specific record id.
	 * @returns {Promise} Promise object with the removed records.
	 */

	async remove(items) {

		return [].concat(items).map(async item => {
			return await this.unload(item.meta.tb, item.id);
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

		return [].concat(items).map(async item => {

			let cached = await this.cached(item.meta.tb, item.id);

			if (cached === undefined) {
				cached = this.lookup(item.meta.tb).create(item);
				this.cache.get(item.meta.tb).addObject(cached);
			} else {
				cached.ingest(item);
				return cached;
			}

			return cached;

		});

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
				return this.cache.get(model).remove(v => {
					return id.includes(v);
				});
			} else {
				return this.cache.get(model).removeBy('id', id);
			}

		} else {

			return this.cache.get(model).clear();

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
				return this.cache.get(model).filter(v => {
					return id.includes(v);
				});
			} else {
				return this.cache.get(model).findBy('id', id);
			}

		} else {

			return this.cache.get(model);

		}

	}

	/**
	 * Creates a record in the database and in the
	 * local cache. If the create is not successful
	 * due to an error or permissions failure, then
	 * the record will not be stored locally.
	 *
	 * @param {string} model - The model type.
	 * @param {string} id - Optional record id.
	 * @param {Object} properties - The record data.
	 * @returns {Promise} Promise object with the updated record.
	 */

	async create(model, id, properties) {

		assert('The model type must be a string', typeof model === 'string');

		if (arguments.length === 2) {
			[id, properties] = [undefined, id];
		}

		let record = this.lookup(model).create(properties);
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
	 * @param {Record} record - A record.
	 * @returns {Promise} Promise object with the updated record.
	 */

	async update(record) {

		assert('You must pass a record to be updated', record instanceof Model);

		try {

			let server = await this.surreal.change(record.tb, record.id, record.json);
			record.ingest(server);
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
	 * @param {Record} record - A record.
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
	 * or from the local record cache if desired. The
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

	async select(model, id) {

		assert('The model type must be a string', typeof model === 'string');

		let s = id || model;

		if (this.stack[s] === undefined) {
			return this.stack[s] = this.surreal.select(model, id).then(async data => {
				await this.inject(data);
				// delete this.stack[s];
				return this.cached(model, id);
			});
		} else {
			await this.stack[s];
			return this.cached(model, id);
		}

		if (id !== undefined) {
			let cached = await this.cached(model, id);
			if (cached) {
				// delete this.stack[s];
				return cached;
			}
		}

		// let records = await this.surreal.select(model, id);
		let records = await this.stack[s];
		await this.inject(records);
		delete this.stack[s];
		return this.cached(model, id);
	}

}
