import Metric from './base';
import { assert } from '@ember/debug';

const src = 'script[src*="intercom"]';

export default class extends Metric {

	name = 'intercom';

	load() {

		if (window.Intercom) return;

		if (!this.config.id) return;

		/* eslint-disable */
		(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
		s.src=`https://widget.intercom.io/widget/${this.config.id}`;
		var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};
		if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
		/* eslint-enable */

		window.Intercom('boot', { app_id: this.config.id });

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.Intercom;

	}

	clear() {

		this.load();

		if (!window.Intercom) return;

		window.Intercom('shutdown');

	}

	identify(id, data) {

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		this.load();

		if (!window.Intercom) return;

		let event = Object.assign({}, data, {
			user_id: id,
		});

		window.Intercom('update', event);

	}

	trackPage(data) {

		this.load();

		if (!window.Intercom) return;

		window.Intercom('trackEvent', 'page viewed', data);

	}

	trackEvent(name, data) {

		this.load();

		if (!window.Intercom) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.Intercom('trackEvent', name, data);

	}

}
