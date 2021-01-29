import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@inject facebook;

	@arg action = 'like';
	@arg colorscheme = 'light';
	@arg href = undefined;
	@arg layout = 'standard';
	@arg lazy = false;
	@arg ref = undefined;
	@arg share = true;
	@arg size = 'small';
	@arg width = undefined;

	@action async didCreate(element) {
		const FB = await this.facebook.load();
		FB.XFBML.parse();
	}

	@action async didChange() {
		const FB = await this.facebook.load();
		FB.XFBML.parse();
	}

}
