import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import position from '../utils/position';

export default class extends Component {

	@inject('-document') document;

	@tracked enabled = false;

	@tracked visible = false;

	@computed('args.side')
	get side() {
		return this.args.side || 's';
	}

	@computed('args.show')
	get show() {
		return this.args.show || 'hover';
	}

	@computed('args.hide')
	get hide() {
		return this.args.hide || 'hover';
	}

	constructor() {

		super(...arguments);

		this.uniq = Math.random().toString(36).substr(2, 10);

		this.openHandler = this.open.bind(this);

		this.closeHandler = this.close.bind(this);

	}

	@action didInsert(element) {

		this.target = element.parentNode;

		this.show.split(' ').forEach(e => {
			switch (e) {
			case 'click':
				return this.target.addEventListener('click', this.openHandler);
			case 'hover':
				return this.target.addEventListener('mouseenter', this.openHandler);
			}
		});

		this.hide.split(' ').forEach(e => {
			switch (e) {
			case 'click':
				return document.addEventListener('mousedown', this.closeHandler);
			case 'hover':
				return this.target.addEventListener('mouseleave', this.closeHandler);
			}
		});

	}

	@action willDestroy(element) {

		this.target = element.parentNode;

		this.show.split(' ').forEach(e => {
			switch (e) {
			case 'click':
				return this.target.removeEventListener('click', this.openHandler);
			case 'hover':
				return this.target.removeEventListener('mouseenter', this.openHandler);
			}
		});

		this.hide.split(' ').forEach(e => {
			switch (e) {
			case 'click':
				return document.removeEventListener('mousedown', this.closeHandler);
			case 'hover':
				return this.target.removeEventListener('mouseleave', this.closeHandler);
			}
		});

	}

	@action open() {
		this.enabled = true;
		setTimeout( () => {
			this.style();
			this.visible = true;
		});
	}

	@action close() {
		this.visible = false;
		this.enabled = false;
	}

	@action style() {

		let i = document.getElementById(this.uniq);

		let e = { // element
			t: this.target.getBoundingClientRect().top,
			l: this.target.getBoundingClientRect().left,
			w: this.target.offsetWidth,
			h: this.target.offsetHeight,
		};

		let t = { // tooltip
			w: i.offsetWidth,
			h: i.offsetHeight,
		}

		let p = position(this.side, e, t);

		Object.assign(i.style, {
			top: `${p.t}px`,
			left: `${p.l}px`,
		});

	}

}
