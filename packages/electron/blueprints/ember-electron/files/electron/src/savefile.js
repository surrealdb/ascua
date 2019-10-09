const { app, shell, dialog, BrowserWindow } = require('electron');
const { join } = require('path');

const message = "The file you attempted to download failed."

function hostview(webContents) {
	if (webContents.getType() === 'webview') {
		return BrowserWindow.fromWebContents(
			webContents.hostWebContents
		);
	} else {
		return BrowserWindow.fromWebContents(
			webContents
		);
	}
}

function progress(win, bytes, items) {
	if (items.size) {
		win.setProgressBar(bytes.recv / bytes.full);
	} else {
		win.setProgressBar(-1);
	}
}

module.exports = function(opts = {}) {

	opts.saveAs = opts.saveAs || false;
	opts.openDir = opts.openDir || false;
	opts.bounceDir = opts.bounceDir || true;
	opts.directory = opts.directory || app.getPath('downloads');

	app.once('session-created', (session) => {

		const items = new Set();
		const bytes = { recv: 0, full: 0 };

		session.on('will-download', (e, item, webContents) => {

			items.add(item);

			// Update the total number of
			// bytes being downloaded so we
			// can measure the progress.

			bytes.full += item.getTotalBytes();

			// Get the BrowserWindow which
			// contains this webContents so
			// we can update the progress.

			let win = hostview(webContents);

			// Get the filepath which will
			// be used for saving the item
			// to the disk.

			let fold = opts.directory;
			let name = item.getFilename();
			let path = join(fold, name);

			// Set the output file path so
			// that no Save As dialog will
			// be shown, if set in options.

			if (!opts.saveAs) {
				item.setSavePath(path);
			}

			// As the file is downloading,
			// let's update the download
			// progress bar status.

			item.on('updated', (e, state) => {

				bytes.recv = [...items].reduce( (val, item) => {
					return val += item.getReceivedBytes();
				}, 0);

				progress(win, bytes, items);

				if (state === 'interrupted') {
					item.cancel();
				}

			});

			// When the file has finished
			// downloading, let's remove
			// it from the progress bar.

			item.on('done', (e, state) => {

				items.delete(item);

				bytes.full -= item.getTotalBytes();

				bytes.recv = [...items].reduce( (val, item) => {
					return val += item.getReceivedBytes();
				}, 0);

				progress(win, bytes, items);


				if (state !== 'completed') {
					dialog.showErrorBox('Download Error', message);
				}

				if (state === 'completed') {
					if (opts.openDir) {
						shell.showItemInFolder(path);
					}
					if (opts.bounceDir) {
						app.dock.downloadFinished(path);
					}
				}

			});

		});

	});

};
