export function original(config) {

	/* eslint-disable */
	(function(w,d,s,l,i){w[l]=w[l]||[];var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s);j.async=true;j.src=
	'https://www.googletagmanager.com/gtag/js?id='+i;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer',config.id);
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	window.dataLayer = window.dataLayer || [];
	/* eslint-enable */

	if (document.readyState === 'complete') {

		let script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtag/js?id=${config.id}`;
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);

	} else {

		document.addEventListener('readystatechange', function(event) {
			if (event.target.readyState === 'complete') {
				let script = document.createElement('script');
				script.src = `https://www.googletagmanager.com/gtag/js?id=${config.id}`;
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
