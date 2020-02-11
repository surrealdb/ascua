'use strict';

module.exports = {
	extends: 'octane',
	rules: {
		'block-indentation': 'tab',
		'attribute-indentation': false,
		'no-implicit-this': {
			allow: [
				'now', 'utc', 'uuid', 'console',
				'history-back', 'history-forward', 'reload',
				'route-url', 'route-name', 'route-path', 'route-vars',
			]
		},
		'no-curly-component-invocation': {
			allow: [
				'now', 'utc', 'uuid', 'console',
				'history-back', 'history-forward', 'reload',
				'route-url', 'route-name', 'route-path', 'route-vars',
			]
		},
	}
};
