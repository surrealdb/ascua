import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked w = 0;

	@tracked h = 0;

	@action didResize(element) {
		this.w = element.offsetWidth;
		this.h = element.offsetHeight;
	}

	@action didCreate(element) {
		this.w = element.offsetWidth;
		this.h = element.offsetHeight;
	}

	@action didSelect(element, i) {
		if ('scrollIntoViewIfNeeded' in element) {
			element.querySelectorAll('app-pdf-icon')[i-1].scrollIntoViewIfNeeded();
		} else {
			element.querySelectorAll('app-pdf-icon')[i-1].scrollIntoView({
				behavior: 'smooth',
				inline: 'nearest',
				block: 'center',
			});
		}
	}

}
