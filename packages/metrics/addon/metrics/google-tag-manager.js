import Metric from './base';
import { assert } from '@ember/debug';

const src = 'script[src*="googletagmanager"]';

export default class extends Metric {

	name = 'google-tag-manager';

	init() {

		super.init(...arguments);

		if (window.gt) return;

		if (!this.config.id) return;

		/* eslint-disable */
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer',this.config.id);
		/* eslint-enable */

		window.gt = function(data) { window.dataLayer.push(data); };

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.dataLayer;

		delete window.gt;

	}

	clear() {

		if (!window.gt) return;

		window.gt({ 'event': 'clear' });

	}

	identify(id) {

		if (!window.gt) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.gt({ 'event': 'identify', 'userId': id });

	}

	trackEvent(name, data) {

		if (!window.gt) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		let event = Object.assign({}, data, {
			event: name,
		});

		window.gt(event);

	}

}
