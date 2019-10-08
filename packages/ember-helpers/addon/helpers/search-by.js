import { A, isArray } from '@ember/array';
import { uniq, filter } from '@ember/object/computed';
import { isEmpty, typeOf } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

function isString(value) {
	return typeOf(value) === 'string';
}

export default Helper.extend({

	compute([...params], optns={}) {

		let props = params.slice(0, -2);
		let array = params.slice(-1)[0];
		let value = params.slice(-2)[0];

		this.set('props', props);
		this.set('value', value);
		this.set('array', array);
		this.set('optns', optns);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	searchDidChange: observer('props', 'value', 'optns', function() {

		let props = get(this, 'props');
		let value = get(this, 'value');
		let optns = get(this, 'optns');

		if (typeOf(value) === 'number') {
			value = String(value).split(' ');
		}

		if (typeOf(value) === 'string') {
			value = value.toLowerCase().split(' ');
		}

		if (isEmpty(props)) {
			defineProperty(this, 'content', []);
			return;
		}

		if (!value) {
			defineProperty(this, 'content', uniq('array'));
			return;
		}

		if (!isArray(props)) {
			defineProperty(this, 'content', filter('array'));
			return;
		}

		if (!isArray(value)) {
			defineProperty(this, 'content', filter('array'));
			return;
		}

		defineProperty(this, 'content', filter('array', item => {
			return A(value).every(v => {
				return A(props).any(p => {

					let field = get(item, p);

					if (isString(field)) {
						switch (optns.exact) {
						case true:
							return field.toLowerCase() == v;
						default:
							return field.toLowerCase().indexOf(v) !== -1;
						}
					}

					if (isArray(field)) {
						return A(field).any(f => {
							switch (optns.exact) {
							case true:
								return f.toLowerCase() == v;
							default:
								return f.toLowerCase().indexOf(v) !== -1;
							}
						});
					}

				});
			});
		}));

	}),

});
