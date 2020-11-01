import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked frame;

	get src() {
		return this.args.src || 'about:blank';
	}

	get zoom() {
		return this.args.zoom || 1;
	}

	get width() {
		return this.args.width || '100%';
	}

	get height() {
		return this.args.height || '100%';
	}

	get partition() {
		return Math.random().toString(36).substr(2, 10);
	}

	get scale() {
		return Math.min(1, this.frame / this.zoom);
	}

	get perct() {
		return Math.max(100, (1 / this.scale) * 100) + '%';
	}

	get trans() {
		return `scale(${this.scale})`;
	}

	@action didCreate(element) {
		this.frame = element.offsetWidth;
	}

}
