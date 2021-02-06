export function original(config) {

	/* eslint-disable */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	(function(i,r){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
	})(window,'ga');
	/* eslint-enable */

	window.addEventListener('load', function() {
		let script = document.createElement('script');
		script.src = 'https://www.google-analytics.com/analytics.js';
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);
	});

}

export default {
	original,
	optimised,
}
