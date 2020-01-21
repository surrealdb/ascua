import uniq from './uniq';
import test from './test';

const persisted = test();

export default function() {

	if (persisted === false) {

		return uniq(64);

	}

	if (persisted === true) {

		let session = localStorage.getItem('session');

		if (session === null || session.length != 64) {
			session = uniq(64);
		}

		localStorage.setItem('session', session);

		return session;

	}

}






