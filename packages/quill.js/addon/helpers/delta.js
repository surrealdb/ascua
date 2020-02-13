import { helper } from '@ember/component/helper';
import Quill from 'quill';

const Delta = Quill.import('delta');

export function delta([delta]) {
	return new Delta(delta);
}

export default helper(delta);
