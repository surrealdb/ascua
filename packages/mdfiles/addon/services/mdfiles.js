import Service from '@ember/service';
import folders from '@ascua/mdfiles/files';
import config from '@ascua/config';

export default class extends Service {

	get config() {
		return config.mdfiles || {};
	}

	async folder(folder) {
		return fetch(folders[folder]).then(data => {
			return data.json();
		});
	}

}
