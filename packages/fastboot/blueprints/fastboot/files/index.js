exports.main = require('@ascua/server');

if (process.env.SERVE) {
	exports.main.listen(process.env.SERVE);
}
