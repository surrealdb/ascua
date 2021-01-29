import marked from 'marked';

const renderer = new marked.Renderer();
renderer.paragraph = (text) => text + '\n';

export default function(value, inline) {

	switch (inline) {
	case true:
		return marked.parseInline(String(value), {
			gfm: true, breaks: true, renderer: renderer,
		});
	case false:
		return marked(String(value), {
			gfm: true, breaks: true,
		});
	}

}
