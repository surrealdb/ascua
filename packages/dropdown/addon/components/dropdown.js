import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { get } from '@ember/object';

export default class extends Component {

	@inject('-document') document;

	@tracked top = 0;

	@tracked left = 0;

	@tracked search = '';

	@tracked options = [];

	@tracked selected = [];

	@tracked display = false;

	@tracked visible = false;

	@action open() {
		this.display = true;
	}

	@action close() {
		this.display = false;
	}

	@action focus(element) {
		this.search = '';
		element.focus();
	}

	@action popup(element) {

		let w = element.offsetWidth;
		let h = element.offsetHeight;
		let t = this.element.getBoundingClientRect().top - 5;
		let l = this.element.getBoundingClientRect().left - 5;

		while ( l+w > window.innerWidth-30 ) l--;

		while ( t+h > window.innerHeight-30 ) t--;

		this.left = l; this.top = t;

	}

	@action didCreate(element) {
		this.element = element;
	}

	@action register(el, value, label) {
		this.options.addObject({
			el, label, value
		});
	}

	@action unregister(el, value, label) {
		this.options = this.options.filter(opt => {
			return opt.el !== el;
		});
	}

	@action reregister(el, value, label) {
		this.options = this.options.map(opt => {
			return opt.el !== el ? opt : {
				el, label, value
			};
		});
	}

	@action changed(value) {

		if (this.args.multiple) {
			if ( [].concat(this.args.value).includes(value) ) {
				value = [].concat(this.args.value).removeObject(value);
			} else {
				value = [].concat(this.args.value).addObject(value);
			}
		}

		if (this.args.onSelect) {
			this.args.onSelect(value);
		}

		this.close();

	}

	get value() {

		return [].concat(this.args.value);

	}

	get label() {

		if (this.args.label) {

			let label = this.value.filter(Boolean).map(v => {
				return get(v, this.args.label);
			});

			return label.join(', ');

		} else {

			let label = this.options.reduce( (a, o, k) => {
				if ( this.value.includes(o.value) ) {
					a.push(o.label);
				}
				return a;
			}, []);

			return label.join(', ');

		}

	}

}
