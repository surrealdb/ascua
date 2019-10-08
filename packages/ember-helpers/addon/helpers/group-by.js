import Helper from '@ember/component/helper';
import { isArray, A } from '@ember/array';
import { isEmpty } from '@ember/utils';
import { get, defineProperty } from '@ember/object';
import { observer, computed } from '@ember/object';

export default Helper.extend({

	compute([path, array]) {
		this.set('path', path);
		this.set('array', array);
		return this.get('content');
	},

	changed: observer('content', function() {
		this.recompute();
	}),

	pathDidChange: observer('path', 'value', function() {

		let path = get(this, 'path');

		if ( isEmpty(path) ) {
			defineProperty(this, 'content', null);
			return;
		}

		defineProperty(this, 'content', computed(`array.@each.${path}`, function() {

			let path = get(this, 'path');
			let array = get(this, 'array');
			let groups = {};

			array.forEach(item => {

				let value = get(item, path);
				let group = get(groups, value);

				if ( !isArray(group) ) {
					group = A();
					groups[value] = group;
				}

				group.push(item);

			});

			return groups;

		}));

	}),

});
