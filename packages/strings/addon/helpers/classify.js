import { helper } from '@ember/component/helper';
import { classify as f } from '@ember/string';

export function classify([value='']) {
	return f( String(value) );
}

export default helper(classify);
