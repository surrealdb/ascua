export function original(config) {

	/* eslint-disable */
	!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
	document,'script','https://connect.facebook.net/en_US/fbevents.js');
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	!function(f,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window);
	/* eslint-enable */

	if (document.readyState === 'complete') {

		let script = document.createElement('script');
		script.src = 'https://connect.facebook.net/en_US/fbevents.js';
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);

	} else {

		document.addEventListener('readystatechange', function(event) {
			if (event.target.readyState === 'complete') {
				let script = document.createElement('script');
				script.src = 'https://connect.facebook.net/en_US/fbevents.js';
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
