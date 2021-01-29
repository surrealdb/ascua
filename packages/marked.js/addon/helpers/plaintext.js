import { helper } from '@ember/component/helper';
import convert from '../functions/plaintext';

export function plaintext([value='']) {
	return convert(value);
}

export default helper(plaintext);
