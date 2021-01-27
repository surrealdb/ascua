import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@arg display = (typeof FastBoot !== 'undefined');

	@tracked visible = false;

	@action didRerender(el) {
		el.removeAttribute('display');
		el.removeAttribute('visible');
	}

	@action didEnterViewport(el) {
		this.visible = true;
	}

	@action didFinishLoading(el) {
		el.target.setAttribute('visible', '');
	}

}
