module.exports = (req, res, next) => {

	res.removeHeader('x-powered-by');

	next();

};
