const express = require('express');

const json = express.json({
	inflate: true,
	limit: '100kb',
	reviver: null,
	strict: true,
	type: 'application/json',
	verify: undefined
});

module.exports = (req, res, next) => {
	json(req, res, next);
};
