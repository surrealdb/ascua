import { tracked } from '@glimmer/tracking';

export default class extends Object {

	@tracked elect;

	@tracked index;

	@tracked model;

	get id() {
		return this.model.id;
	}

}
