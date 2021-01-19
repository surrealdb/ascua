'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/big.js/big.js', {
			using: [{ transformation: 'amd', as: 'big.js' }]
		});

	},

};
