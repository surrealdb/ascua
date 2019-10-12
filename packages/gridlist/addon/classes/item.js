import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';

export default class extends Object {

	@alias('model.id') id;

	@tracked elect;

	@tracked index;

	@tracked model;

}
