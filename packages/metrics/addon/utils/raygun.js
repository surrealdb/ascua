export function original(config) {

	/* eslint-disable */
	!function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
	(a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
	f.async=0,f.defer=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
	h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
	e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	!function(a,e,h){a.RaygunObject=e,a[e]=a[e]||function(){
	(a[e].o=a[e].o||[]).push(arguments)},h=a.onerror,a.onerror=function(b,c,d,f,g){
	h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
	e:g})}}(window,"rg4js");
	/* eslint-enable */

	if (document.readyState === 'complete') {

		let script = document.createElement('script');
		script.src = '//cdn.raygun.io/raygun4js/raygun.min.js';
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);

	} else {

		document.addEventListener('readystatechange', function(event) {
			if (event.target.readyState === 'complete') {
				let script = document.createElement('script');
				script.src = '//cdn.raygun.io/raygun4js/raygun.min.js';
				script.async = false;
				script.defer = true;
				document.head.appendChild(script);
			}
		});

	}

}

export default {
	original,
	optimised,
}
