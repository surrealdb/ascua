import { computed } from '@ember/object';
import Sparse from './classes/array';

const FETCH = function() {
	return { data: [], total: 0 };
};

export default function(limit, ...args) {

	let fetch = args.pop() || FETCH;

	return computed(function() {

		return Sparse.create({
			ctx: this,
			limit: limit,
			fetch: fetch,
			query: args,
		});

	});

}
