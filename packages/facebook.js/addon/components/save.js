import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@inject facebook;

	@arg lazy = false;
	@arg size = 'large';
	@arg uri = undefined;

	@action async didCreate(element) {
		const FB = await this.facebook.load();
		FB.XFBML.parse(element);
	}

	@action async didChange(element) {
		const FB = await this.facebook.load();
		FB.XFBML.parse(element);
	}

}
