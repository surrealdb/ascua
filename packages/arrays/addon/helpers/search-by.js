import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import { typeOf } from '@ember/utils';
import { get } from '@ember/object';
import array from '../utils/array';

export function searchBy([...params], { exact = false }) {

	let props = params.slice(0, -2);
	let match = params.slice(-2)[0];
	let value = params.slice(-1)[0];

	props = [].concat.apply([], props);

	if ( isEmpty(props) ) {
		return [];
	}

	if ( !isArray(value) ) {
		return [];
	}

	if ( isEmpty(match) ) {
		return array(value).uniq();
	}

	if (typeOf(match) === 'number') {
		match = String(match).split(' ');
	}

	if (typeOf(match) === 'string') {
		match = match.toLowerCase().split(' ');
	}

	return array(value).filter(item => {
		return array(match).every(v => {
			return array(props).any(p => {

				let f = get(item, p);

				if (isArray(f) === false) {
					switch (exact) {
					case true:
						return String(f).toLowerCase() == v;
					default:
						return String(f).toLowerCase().indexOf(v) !== -1;
					}
				}

				if (isArray(f) === true) {
					return [].concat(f).any(f => {
						switch (exact) {
						case true:
							return String(f).toLowerCase() == v;
						default:
							return String(f).toLowerCase().indexOf(v) !== -1;
						}
					});
				}

			});
		});
	});

}

export default helper(searchBy);
