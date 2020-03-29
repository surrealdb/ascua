import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@computed('args.{conf.a,conf.a.length,item.id}')
	get selected() {
		return !! [].concat(this.args.conf.a).find(id => {
			return id == this.args.item.id;
		});
	}

	@action didCreate(element) {
		this.position(element);
	}

	@action didChange(element) {
		this.position(element);
	}

	position(element) {

		if (this.args.conf.k === 'l') {
			// Item height
			let h = this.args.conf.i.h;
			// Item index
			let i = this.args.item.index;
			// Calculate y position
			let y = h * i;
			// Set element style
			element.style.top = `${y}px`;
			element.style.width = '100%';
			element.style.height = `${h}px`;
		}

		if (this.args.conf.k === 'g') {
			// Total items
			let t = this.args.total;
			// View area
			let a = this.args.conf.e.w;
			// Total cols
			let c = this.args.conf.v.c;
			// Item width
			let w = this.args.conf.i.w;
			// Item height
			let h = this.args.conf.i.h;
			// Item index
			let i = this.args.item.index;
			// Detect if multi rows
			let s = a / w > t;
			// Work out position from left
			let p = i % c;
			// Work out remaining space
			let r = a - (w * c);
			// Work out extra gap between items
			let g = r / (c+1);
			// Work out X and Y
			let x = s ? p * w : p * w + (p+1) * g;
			let y = Math.floor(i / c) * h;
			// Set element style
			element.style.top = `${y}px`;
			element.style.left = `${x}px`;
			element.style.width = `${w}px`;
			element.style.height = `${h}px`;
		}

	}

	@action didClick(event) {
		if (this.args.onClick) {
			return this.args.onClick(event, this.args.item);
		}
	}

	@action dblClick(event) {
		if (this.args.onDblClick) {
			return this.args.onDblClick(event, this.args.item);
		}
	}

	@action ctxClick(event) {
		if (this.args.onCtxClick) {
			return this.args.onCtxClick(event, this.args.item);
		}
	}

}
