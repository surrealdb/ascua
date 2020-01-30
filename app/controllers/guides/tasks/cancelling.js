import Controller from '@ember/controller';
import { timeout } from '@ascua/tasks';
import { restart } from '@ascua/tasks';

export default class extends Controller {

	@restart * mytask() {
		try {
			yield timeout(5000);
			return new Date();
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

}
