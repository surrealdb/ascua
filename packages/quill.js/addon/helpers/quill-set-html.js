import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject quill;

	compute([name], { html }) {
		return (...passed) => {
			let data = passed.find(v => v instanceof Event === false) || html;
			this.quill.html(name, null, data, 'api');
		};
	}

}
