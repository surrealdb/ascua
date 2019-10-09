module.exports = (req, res, next) => {
	req.headers.host = req.headers['x-forwarded-host'] || req.headers.host;
	next();
};
