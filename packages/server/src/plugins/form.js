const express = require('express');

const form = express.urlencoded({
	extended: true,
	inflate: true,
	limit: '100kb',
	parameterLimit: 1000,
	type: 'application/x-www-form-urlencoded',
	verify: undefined
});

module.exports = (req, res, next) => {
	form(req, res, next);
};
