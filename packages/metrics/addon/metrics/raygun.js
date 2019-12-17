import Metric from './base';
import { assert } from '@ember/debug';

const src = 'script[src*="raygun"]';

export default class extends Metric {

	name = 'raygun';

	load() {

		if (window.rg4js) return;

		if (!this.config.id) return;

		/* eslint-disable */
		!function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
		(a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
		f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
		h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
		e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
		/* eslint-enable */

		window.rg4js('apiKey', this.config.id);
		window.rg4js('enableCrashReporting', true);
		window.rg4js('enablePulse', true);

	}

	willDelete() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.rg4js;

	}

	clear() {

		this.load();

		if (!window.rg4js) return;

		window.rg4js('setUser', {
			isAnonymous: true,
		});

	}

	identify(id, data) {

		this.load();

		if (!window.rg4js) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		let event = Object.assign({}, data, {
			identifier: id,
		});

		window.rg4js('setUser', event);

	}

	trackPage() {

		this.load();

		if (!window.rg4js) return;

		window.rg4js('trackEvent', {
			type: 'pageView',
			path: location.pathname
		});

	}

}
