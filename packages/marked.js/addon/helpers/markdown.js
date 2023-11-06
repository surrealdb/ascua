import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import convert from '../functions/markdown';

export function markdown([value=''], { inline = false }) {
	return htmlSafe(convert(value, inline));
}

export default helper(markdown);
