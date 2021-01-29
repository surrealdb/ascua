import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import convert from '../functions/markdown';

export function markdown([value=''], { inline = false }) {
	return htmlSafe(convert(value, inline));
}

export default helper(markdown);
