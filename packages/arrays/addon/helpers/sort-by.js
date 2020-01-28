import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import { typeOf } from '@ember/utils';
import { get } from '@ember/object';
import array from '../utils/array';

export function sortBy([...params], { locale = false, numeric = false, caseFirst = 'false', sensitivity = 'base', ignorePunctuation = false }) {

	let props = params.slice(0, -1);
	let value = params.slice().pop();

	if ( isArray(props[0]) || typeOf(props[0]) === 'function') {
		props = props[0];
	}

	if ( isEmpty(props) ) {
		return [];
	}

	if ( !isArray(value) ) {
		return [];
	}

	if ( typeOf(props) === 'function' ) {
		return array(value).sort(props);
	}

	if ( locale === false ) {
		return array(value).sortBy(...props);
	}

	return array(value).sort(function(one, two) {

		for (let i=0; i<props.length; i++) {

			let [prop, dir] = String(props[i]).split(':');

			let a = String( get(one, prop) );
			let b = String( get(two, prop) );

			let comps = a.localeCompare(b, undefined, {
				numeric,
				caseFirst,
				sensitivity,
				ignorePunctuation,
			});

			if (comps !== 0) {
				return (dir === 'desc') ? (-1 * comps) : comps;
			} else {
				continue;
			}

		}

	});

}

export default helper(sortBy);
