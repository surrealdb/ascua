import Metric from './base';
import { assert } from '@ember/debug';

const src = 'script[src*="heapanalytics"]';

export default class extends Metric {

	name = 'heap';

	init() {

		super.init(...arguments);

		if (window.heap) return;

		if (!this.config.id) return;

		/* eslint-disable */
		window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=0,a.defer=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
		heap.load(this.config.id);
		/* eslint-enable */

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.heap;

	}

	clear() {

		if (!window.heap) return;

		window.heap.resetIdentity();

	}

	identify(id, data) {

		if (!window.heap) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.heap.identify(id);

		window.heap.addUserProperties(data);

	}

	trackEvent(name, data) {

		if (!window.heap) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.heap.track(name, data);

	}

}
