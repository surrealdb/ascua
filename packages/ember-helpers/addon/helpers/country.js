import { helper } from '@ember/component/helper';
import country from '../utils/country';

export function format(params) {
	return country(params[0]) || params[0];
}

export default helper(format);
