import { helper } from '@ember/component/helper';
import { camelize as f } from '@ember/string';

export function camelize([value='']) {
	return f( String(value) );
}

export default helper(camelize);
