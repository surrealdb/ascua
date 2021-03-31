module.exports = (req, res, next) => {

	res.removeHeader('x-powered-by');

	res.set('Cache-Control', 'no-store, must-revalidate, max-age=0');
	res.set('Expect-CT', 'enforce, max-age=86400');
	res.set('Feature-Policy', "payment 'self';");
	res.set('Referrer-Policy', 'no-referrer');
	res.set('Strict-Transport-Security', 'max-age=31536000');
	res.set('X-Content-Type-Options', 'nosniff');
	res.set('X-Frame-Options', 'sameorigin');
	res.set('X-XSS-Protection', '1; mode=block');

	next();

};
