import { helper } from '@ember/component/helper';
import { capitalize as f } from '@ember/string';

export function capitalize([value='']) {
	return f( String(value) );
}

export default helper(capitalize);
