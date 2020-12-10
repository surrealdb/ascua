import { tracked } from '@glimmer/tracking';
import { get } from '@ember/object';

export default class extends Object {

	@tracked elect;

	@tracked index;

	@tracked model;

	get id() {
		return get(this.model, 'id');
	}

}
