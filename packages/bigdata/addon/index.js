import Sparse from './sparse';
import Infinite from './infinite';
import { assert } from '@ember/debug';
import { addObserver } from '@ember/object/observers';

export function sparse(limit, ...props) {

	let fetch = props.pop();

	assert(
		'The sparse decorator must have a limit number as its first argument',
		limit && typeof limit === 'number',
	);

	assert(
		'The sparse decorator must have a fetch function as its final argument',
		fetch && typeof fetch === 'function',
	);

	return function(target, key, desc) {
		desc.initializer = function() {
			let array = new Sparse(limit, fetch.bind(this));
			props.forEach(prop => {
				addObserver(this, prop, array, 'reset');
			});
			return array;
		}
		return desc;
	}

}

export function infinite(limit, ...props) {

	let fetch = props.pop();

	assert(
		'The infinite decorator must have a limit number as its first argument',
		limit && typeof limit === 'number',
	);

	assert(
		'The infinite decorator must have a fetch function as its final argument',
		fetch && typeof fetch === 'function',
	);

	return function(target, key, desc) {
		desc.initializer = function() {
			let array = new Infinite(limit, fetch.bind(this));
			props.forEach(prop => {
				addObserver(this, prop, array, 'reset');
			});
			return array;
		}
		return desc;
	}

}
