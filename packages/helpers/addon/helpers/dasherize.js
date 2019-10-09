import { helper } from '@ember/component/helper';
import { dasherize as f } from '@ember/string';

export function dasherize([value='']) {
	return f( String(value) );
}

export default helper(dasherize);
