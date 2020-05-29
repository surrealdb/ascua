/* eslint-env node */

const { app, BrowserWindow } = require('electron');

const location = require('@ascua/app');

app.once('ready', () => {
	loadapp(false);
});

app.once('window-all-closed', () => {
	app.quit();
});

app.once('will-finish-launching', () => {

	app.setAsDefaultProtocolClient('my-app');

	app.on('browser-window-created', (e, window) => {

		window.once('ready-to-show', () => {
			window.show();
		});

		window.on('new-window-for-tab', () => {
			loadapp(true);
		});

	});

});

const loadapp = (show) => {

	let window = new BrowserWindow({
		width: 1600,
		height: 1100,
		show: show,
		frame: true,
		center: true,
		minWidth: 1024,
		minHeight: 768,
		titleBarStyle: 'hidden',
		backgroundColor: '#ffffff',
		tabbingIdentifier: 'default',
		disableAutoHideCursor: true,
		webPreferences: {
			java: false,
			images: true,
			plugins: true,
			affinity: 'app',
			webviewTag: true,
			webSecurity: true,
			sharedWorker: true,
			nodeIntegration: true,
			overlayScrollbars: true,
			experimentalFeatures: false,
			textAreasAreResizable: false,
			allowRunningInsecureContent: false,
			allowDisplayingInsecureContent: false,
		}
	});

	window.loadURL(location);

}
