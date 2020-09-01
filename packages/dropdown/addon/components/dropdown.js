import Component from '@glimmer/component';
import { setProperties } from '@ember/object';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	options = [];

	selected = [];

	display = false;

	visible = false;

	@action open() {
		setProperties(this, {
			display: true,
		});
		setTimeout( () => {
			this.style();
		});
	}

	@action close() {
		setProperties(this, {
			display: false,
			visible: false,
		});
	}

	@action didCreate(element) {
		this.element = element;
	}

	@action register(el, value, label) {
		this.options.addObject({ el, label, value });
	}

	@action reregister(el, value, label) {
		let obj = this.options.findBy('el', el);
		setProperties(obj, { value, label });
	}

	@action unregister(el, value, label) {
		let obj = this.options.findBy('el', el);
		this.options.removeObject(obj);
	}

	@action changed(value) {

		if (!this.args.multiple) this.close();

		if (this.args.multiple) {
			if ( this.selected.includes(value) ) {
				value = this.selected.removeObject(value);
			} else {
				value = this.selected.addObject(value);
			}
		}

		if (this.args.onSelect) {
			this.args.onSelect(value);
		}

	}

	style() {

		let f = this.element.children[2];
		let w = this.element.children[2].offsetWidth;
		let h = this.element.children[2].offsetHeight;
		let t = this.element.children[0].getBoundingClientRect().top - 5;
		let l = this.element.children[0].getBoundingClientRect().left - 5;

		let [ x, y ] = [ -10, -30 ];

		while ( l+w > window.innerWidth-30 ) {
			l--; x--;
		}

		while ( t+h > window.innerHeight-30 ) {
			t--; y--;
		}

		setProperties(this, {
			top: y,
			left: x,
			visible: true,
		});

	}

	@computed('args.value')
	get value() {
		return this.args.value;
	}

	@computed('args.value', 'options.@each', 'options.@each.{label,value}')
	get label() {

		let value = [].concat(this.args.value);

		let label = this.options.reduce( (a, o, k) => {

			if ( value.includes(o.value) ) {
				if (o.label) {
					a.push(o.label);
				} else {
					a.push(o.el.innerHTML);
				}
			}

			return a;

		}, []);

		return label.join(', ');

	}

}
