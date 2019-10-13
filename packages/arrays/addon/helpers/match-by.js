import { isArray } from '@ember/array';
import { isEmpty } from '@ember/utils';
import { observer, get, set } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([...params]) {

		let props = params.slice(0, -2);
		let model = params.slice(-1)[0];
		let value = params.slice(-2)[0];

		this.set('props', props);
		this.set('value', value);
		this.set('model', model);

		return this.get('match');

	},

	changed: observer('match', function() {
		this.recompute();
	}),

	searchDidChange: observer('props', 'value', 'model', function() {

		let props = get(this, 'props');
		let value = get(this, 'value');
		let model = get(this, 'model');

		if ( isEmpty(props) ) {
			set(this, 'match', true);
			return;
		}

		if (!value) {
			set(this, 'match', true);
			return;
		}

		if (!model) {
			set(this, 'match', true);
			return;
		}

		if (!isArray(props)) {
			set(this, 'match', true);
			return;
		}

		let found = String(value).toLowerCase().split(' ');

		set(this, 'match', props.any(prop => {
			let value = String( model.get(prop) ).toLowerCase();
			return found.any(i => value.indexOf(i) !== -1 );
		}));

	}),

});
