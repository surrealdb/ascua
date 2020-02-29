const express = require('express');
const fastboot = require('fastboot');
const plugins = require('./src/plugins');

const app = new fastboot({
	distPath: 'dist',
	resilient: true,
});

const srv = express();

srv.use(plugins.json); // Parse body

srv.use(plugins.form); // Parse body

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

		if (result.error) throw result.error;

		if (result.headers) {
			for (let h of result.headers.entries()) {
				res.set(h[0], h[1]);
			}
		}

		res.status(result.statusCode).send(body);

	}

	async function success(result) {
		try {
			await respond(result);
		} catch(error) {
			console.error(error);
			res.status(500).send();
		}
	}

	async function failure(error) {
		console.error(error);
		res.status(500).send();
	}

});

module.exports = srv;
