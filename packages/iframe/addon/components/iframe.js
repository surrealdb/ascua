import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@tracked frame;

	@computed('args.src')
	get src() {
		return this.args.src || 'about:blank';
	}

	@computed('args.zoom')
	get zoom() {
		return this.args.zoom || 1;
	}

	@computed('args.width')
	get width() {
		return this.args.width || '100%';
	}

	@computed('args.height')
	get height() {
		return this.args.height || '100%';
	}

	@computed('zoom', 'frame')
	get scale() {
		return Math.min(1, this.frame / this.zoom);
	}

	@computed('scale')
	get perct() {
		return Math.max(100, (1 / this.scale) * 100) + '%';
	}

	@computed('scale')
	get trans() {
		return `scale(${this.scale})`;
	}

	@action didCreate(element) {
		this.frame = element.offsetWidth;
	}

}
