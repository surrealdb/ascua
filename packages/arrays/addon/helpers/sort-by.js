import { sort } from '@ember/object/computed';
import { observer, get, defineProperty } from '@ember/object';
import { typeOf, isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import { isArray } from '@ember/array';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...props], { locale = false, numeric = false, caseFirst = 'false', sensitivity = 'base', ignorePunctuation = false }) {

		let param = props.slice(0, -1);
		let array = props.slice().pop();

		if ( isArray(param[0]) || typeOf(param[0]) === 'function') {
			param = param[0];
		}

		this.set('param', param);
		this.set('array', array);

		this.set('confs', {
			locale,
			numeric,
			caseFirst,
			sensitivity,
			ignorePunctuation,
		});

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	sortDidChange: observer('param', 'confs', function() {

		let confs = get(this, 'confs');
		let param = get(this, 'param');

		if ( isEmpty(param) ) {
			defineProperty(this, 'content', []);
			return;
		}

		if ( typeOf(param) === 'function' ) {
			defineProperty(this, 'content', sort('array', param));
		} else if (confs.locale === false) {
			defineProperty(this, 'content', sort('array', 'param'));
		} else if (confs.locale === true) {
			defineProperty(this, 'content', computed(param, function() {
				return this.get('array').slice().sort(function(one, two) {

					for (let i=0; i<param.length; i++) {

						let [prop, dir] = String(param[i]).split(':');

						let first = String( get(one, prop) );
						let secnd = String( get(two, prop) );

						let comps = first.localeCompare(secnd, undefined, {
							numeric: confs.numeric,
							caseFirst: confs.caseFirst,
							sensitivity: confs.sensitivity,
							ignorePunctuation: confs.ignorePunctuation,
						});

						if (comps !== 0) {
							return (dir === 'desc') ? (-1 * comps) : comps;
						} else {
							continue;
						}

					}

				});
			}));
		}

	}),

});
