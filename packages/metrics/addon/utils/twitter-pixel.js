export function original(config) {

	/* eslint-disable */
	!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
	},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
	a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
	/* eslint-enable */

}

export function optimised(config) {

	/* eslint-disable */
	!function(e,s){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
	},s.version='1.1',s.queue=[])}(window);
	/* eslint-enable */

	if (document.readyState === 'complete') {

		let script = document.createElement('script');
		script.src = 'https://static.ads-twitter.com/uwt.js';
		script.async = false;
		script.defer = true;
		document.head.appendChild(script);

	} else {

		document.addEventListener('readystatechange', function(event) {
			if (event.target.readyState === 'complete') {
				let script = document.createElement('script');
				script.src = 'https://static.ads-twitter.com/uwt.js';
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
