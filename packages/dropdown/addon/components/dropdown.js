import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class extends Component {

	@tracked values = [];

	@tracked options = [];

	@tracked visible = false;

	@action open() {
		this.style();
		this.visible = true;
	}

	@action close() {
		this.style();
		this.visible = false;
	}

	@action didCreate(element) {
		this.element = element;
	}

	@action register(option) {
		this.options.addObject(option);
	}

	@action unregister(option) {
		this.options.removeObject(option);
	}

	@action changed(option) {

		let value = option.args.value;

		if (!this.args.multiple) this.close();

		if (this.args.multiple) {
			if ( this.values.includes(value) ) {
				value = this.values.removeObject(value);
			} else {
				value = this.values.addObject(value);
			}
		}

		if (this.args.onSelect) {
			this.args.onSelect(value);
		}

	}

	@action style() {

		let f = this.element.children[2];
		let w = this.element.children[2].offsetWidth;
		let h = this.element.children[2].offsetHeight;
		let t = this.element.children[0].getBoundingClientRect().top - 5;
		let l = this.element.children[0].getBoundingClientRect().left - 5;

		let [ x, y ] = [ 0, -10 ];

		while ( l+w > window.innerWidth-30 ) {
			l--; x--;
		}

		while ( t+h > window.innerHeight-30 ) {
			t--; y--;
		}

		Object.assign(f.style, {
			top: `${y}px`,
			left: `${x}px`,
		});

	}

	@computed('args.value')
	get value() {
		return this.args.value || undefined;
	}

	@computed('args.{value,default,multiple}', 'options.@each.{label,value}')
	get label() {

		let label = null;

		label = this.options.filter(o => {
			if (this.args.multiple) {
				return [].concat(this.args.value).includes(o.args.value);
			} else {
				return this.args.value == o.args.value;
			}
		});

		label = label.map(o => {
			return o.args.label ? o.args.label : o.element.innerHTML;
		});

		return htmlSafe(label.join(', ') || this.args.default);

	}

}
