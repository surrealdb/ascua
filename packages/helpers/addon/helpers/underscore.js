import { helper } from '@ember/component/helper';
import { underscore as f } from '@ember/string';

export function underscore([value='']) {
	return f( String(value) );
}

export default helper(underscore);
