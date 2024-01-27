import Service from '@ember/service';
import folders from '@ascua/mdfiles/files';
import config from '@ascua/config';

export default class extends Service {

	get config() {
		return config.mdfiles || {};
	}

	async folder(folder) {
		return fetch(config.rootURL + folders[folder] + '/index.json').then(data => {
			return data.json();
		})
	}

	async file(folder, name) {
		return fetch(config.rootURL + folders[folder] + `/${name}.json`).then(data => {
			return data.json();
		});
	}

}
