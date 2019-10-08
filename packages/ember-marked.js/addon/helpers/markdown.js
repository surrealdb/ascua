import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import marked from 'marked';

export function markdown([value=''], { inline = false }) {

	switch (inline) {
	case true:
		return htmlSafe(marked.inlineLexer(String(value), {
			gfm: true, breaks: false,
		}));
	case false:
		return htmlSafe(marked(String(value), {
			gfm: true, breaks: false,
		}));
	}

}

export default helper(markdown);
