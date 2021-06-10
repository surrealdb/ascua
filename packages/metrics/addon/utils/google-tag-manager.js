export function original(config) {

	/* eslint-disable */
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer',config.id);
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	(function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});
	})(window,'dataLayer');
	/* eslint-enable */

	if (document.readyState === 'complete') {

		let script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtm.js?id=${config.id}`;
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);

	} else {

		document.addEventListener('readystatechange', function(event) {
			if (event.target.readyState === 'complete') {
				let script = document.createElement('script');
				script.src = `https://www.googletagmanager.com/gtm.js?id=${config.id}`;
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
