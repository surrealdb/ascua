import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import { typeOf } from '@ember/utils';
import { get } from '@ember/object';

export function searchBy([...params], { exact = false }) {

	let props = params.slice(0, -2);
	let value = params.slice(-2)[0];
	let array = params.slice(-1)[0];

	props = [].concat.apply([], props);

	if ( isEmpty(props) ) {
		return [];
	}

	if ( isEmpty(value) ) {
		return [].concat(array).uniq();
	}

	if (typeOf(value) === 'number') {
		value = String(value).split(' ');
	}

	if (typeOf(value) === 'string') {
		value = value.toLowerCase().split(' ');
	}

	return [].concat(array).filter(item => {
		return [].concat(value).every(v => {
			return [].concat(props).any(p => {

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
