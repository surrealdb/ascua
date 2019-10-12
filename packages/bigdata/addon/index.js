import Sparse from './sparse';
import { assert } from '@ember/debug';
export { addObserver } from '@ember/object/observers';

export function sparse(limit, ...props) {

	let fetch = props.pop();

	assert(
		'The bigdata decorator must have a fetch function as its final argument',
		fetch && typeof fetch === 'function',
	);

	return function(target, key, desc) {

		let array = new Sparse(limit, fetch.bind(target));

		props.forEach(prop => {
			addObserver(target, prop, array, 'reset');
		});

		desc.initializer = () => array;

		return desc;

	}

}
