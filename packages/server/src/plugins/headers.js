module.exports = (req, res, next) => {

	res.removeHeader('x-powered-by');

	res.set('Cache-Control', 'no-store, must-revalidate, max-age=0');

	next();

};
