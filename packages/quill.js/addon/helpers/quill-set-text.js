import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject quill;

	compute([name], { text }) {
		return (...passed) => {
			let data = passed.find(v => v instanceof Event === false) || text;
			this.quill.text(name, null, data, 'api');
		};
	}

}
