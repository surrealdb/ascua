export function original(config) {

	/* eslint-disable */
	!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};
	d=s.createElement(q);d.src='//d1l6p2sc9645hc.cloudfront.net/gosquared.js';q=
	s.getElementsByTagName(q)[0];q.parentNode.insertBefore(d,q)}(window,document
	,'script','_gs');
	/* eslint-enable */

}

export function optimised(config) {

	original(config);

}

export default {
	original,
	optimised,
}
