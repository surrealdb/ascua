import { task } from 'ember-concurrency';

export default class Range {

	constructor(range) {
		this.range = range;
	}

	@task(function* (fetch) {
		try {
			return fetch(this.range);
		} catch (e) {
			// Ignore
		}
	}).drop() fetcher;

}
