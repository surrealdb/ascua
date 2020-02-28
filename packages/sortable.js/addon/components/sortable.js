import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import Sortable from 'sortable';

export default class extends Component {

	@arg options = {};

	#events = [
		'onChoose',
		'onUnchoose',
		'onStart',
		'onEnd',
		'onAdd',
		'onUpdate',
		'onSort',
		'onRemove',
		'onMove',
		'onClone',
		'onChange',
		'scrollFn',
		'setData',
		'onFilter',
	];

	@action didCreate(element) {

		if (!Sortable) return;

		this.instance = Sortable.create(element, {
			...this.options
		});

		this.#events.forEach(name => {
			const fn = this.args[name];
			if (typeof fn === 'function') {
				this.instance.option(name, (...args) => {
					fn(...args, this.instance);
				});
			}
		});

	}

	@action didChange(element) {

		if (!Sortable) return;

		let opts = Object.entries(this.options);

		for (let [key, val] of opts) {
			this.sortable.option(key, value);
		}

	}

	@action willDelete() {

		if (!Sortable) return;

		this.instance.destroy();

	}

}
