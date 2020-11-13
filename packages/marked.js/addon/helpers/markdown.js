import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.paragraph = (text) => text + '\n';

export function markdown([value=''], { inline = false }) {

	switch (inline) {
	case true:
		return htmlSafe(marked.parseInline(String(value), {
			gfm: true, breaks: true, renderer: renderer,
		}));
	case false:
		return htmlSafe(marked(String(value), {
			gfm: true, breaks: false,
		}));
	}

}

export default helper(markdown);
