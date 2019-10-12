import EmberObject from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default class Range {

	constructor(range) {
		this.range = range;
	}

	@task(function* (fetch) {

		return yield fetch(this.range);

	}).drop() fetcher;

}
