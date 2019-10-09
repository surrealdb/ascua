module.exports = (req, res, next) => {
	console.log(req.hostname, req.url);
	next();
};
