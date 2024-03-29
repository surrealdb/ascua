import marked from 'marked';

const renderer = new marked.Renderer();
renderer.heading = (text) => text + '\n';
renderer.image = () => '';
renderer.link = (href, title, text) => text + ` (${href})`;
renderer.paragraph = (text) => text + '\n';
renderer.code = () => '';
renderer.html = (html) => html;
renderer.strong = (text) => text;
renderer.em = (text) => text;
renderer.codespan = (text) => text;
renderer.br = () => '\n';

export default function(value) {

	return marked.parse(String(value), {
		renderer: renderer,
	}).replace(/&#(\d+);/g, (m, dec) => {
		return String.fromCharCode(dec);
	}).replace(/&nbsp;/g, () => {
		return ' ';
	}).replace(/<[^>]*>/g, () => {
		return '';
	}).replace(/&[^;]*;/g, () => {
		return '';
	});

}
