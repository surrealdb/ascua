/* eslint-env node */

const { app, BrowserWindow } = require('electron');

const remote = require('@electron/remote/main');

const location = require('@ascua/app');

const os = require('os');

app.setName('My App');

remote.initialize();

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

	let platform = os.platform();

	let window = new BrowserWindow({
		width: 1600,
		height: 1100,
		show: show,
		center: true,
		minWidth: 1024,
		minHeight: 768,
		titleBarStyle: 'hidden',
		backgroundColor: '#ffffff',
		tabbingIdentifier: 'default',
		disableAutoHideCursor: true,
		frame: platform === 'darwin' ? true : false,
		webPreferences: {
			java: false,
			images: true,
			plugins: false,
			affinity: 'app',
			spellcheck: true,
			webviewTag: true,
			webSecurity: true,
			scrollBounce: true,
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
			experimentalFeatures: false,
			textAreasAreResizable: false,
			allowRunningInsecureContent: false,
			allowDisplayingInsecureContent: false,
			devTools: (app.isPackaged === false),
		}
	});

	window.loadURL(location);

}
