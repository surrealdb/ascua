const express = require('express');
const fastboot = require('fastboot');
const plugins = require('./src/plugins');

const app = new fastboot({
	distPath: 'dist',
	resilient: true,
});

const srv = express();

srv.use(plugins.host); // Get hostname

srv.use(plugins.logger); // Log the request

srv.use(plugins.headers); // Display headers

srv.use(express.static('dist', {
	etag: false,
	index: false,
	fallthrough: true,
	lastModified: false,
}));

srv.use( (req, res) => {

	let opts = {};
	opts.request = req;
	opts.response = res;

	app.visit(req.url, opts).then(success, failure);

	async function respond(result) {

		let body = await result.html();

		for (let h of result.headers.entries()) {
			res.set(h[0], h[1]);
		}

		res.status(result.statusCode);

		result.error ? res.send() : res.send(body);

	}

	async function success(result) {
		try {
			await respond(result);
		} catch(e) {
			res.status(500);
		}
	}

	async function failure(error) {
		res.status(500);
	}

});

module.exports = srv;
