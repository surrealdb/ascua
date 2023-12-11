import Service from '@ember/service';
import { trees } from '@ascua/mdfiles/files';
import config from '@ascua/config';

export default class extends Service {

	get config() {
		return config.mdfiles || {};
	}

	async folder(name) {
		let tree = { name, path: this.config.folders[name] };
		return trees[tree.path].map(file => {
			return { ...file, path: file.path.replace(`${tree.path}/`, '') };
		});
	}

}
