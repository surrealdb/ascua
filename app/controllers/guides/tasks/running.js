import Controller from '@ember/controller';
import { timeout } from '@ascua/tasks';
import { task } from '@ascua/tasks';

export default class extends Controller {

	@task * mytask() {
		yield timeout(5000);
		return new Date();
	}

}
