// Setup emberapp serving
require('./src/emberapp');

// Setup default main menu
require('./src/mainmenu');

// Setup download progress
require('./src/savefile');

module.exports = process.env.EMBER_ELECTRON_LOCATION || 'ember://app';
