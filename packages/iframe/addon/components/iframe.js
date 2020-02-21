import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@tracked frame;

	@arg src = 'about:blank';

	@arg zoom = 1;

	@arg width = '100%';

	@arg height = '100%';

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
