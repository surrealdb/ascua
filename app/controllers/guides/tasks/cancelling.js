import Controller from '@ember/controller';
import { timeout } from '@ascua/tasks';
import { task } from '@ascua/tasks';

export default class extends Controller {

	@task * mytask() {
		try {
			yield timeout(5000);
			return new Date();
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
			throw e;
		}
	}

}
