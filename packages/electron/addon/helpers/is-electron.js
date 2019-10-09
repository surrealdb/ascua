import { helper } from '@ember/component/helper';
import Electron from 'electron';

export function isElectron() {
	return Electron !== null;
}

export default helper(isElectron);
