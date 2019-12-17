import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Electron from 'electron';

export default class extends Service.extend(Evented) {

	// Whether an update is available
	// for the ember app, so that we
	// can display a notification.

	@tracked updatefound = false;

	// Setup the Electron service if the
	// feature is supported, and check
	// continuously for updates.

	constructor() {

		super(...arguments);

		if (Electron === null) return;

		this.config = getOwner(this).lookup('ascua:electron');

		if (this.config.frequency) {
			this.timer = setInterval(
				this.check.bind(this),
				this.config.frequency,
			);
		}

		this.on('updatefound', () => {
			switch (this.config.autoupdate) {
			case false:
				return this.updatefound = true;
			case true:
				return this.reset();
			}
		});

		this.setup();

		this.check();

		this.theme();

	}

	// If this service is going to be
	// destroyed, then let's ensure that
	// the checker timer is cancelled.

	willDelete() {

		if (this.timer) clearInterval(this.timer);

		super.willDelete(...arguments);

	}

	// Setup setups up the event listener
	// for when an update is found on the
	// remote versioning service.

	setup() {

		if (Electron === null) return;

		const { autoUpdater } = Electron.remote.require('electron-updater');

		autoUpdater.on('update-downloaded', () => {
			this.trigger('updatefound');
		});

	}

	// Theme determines whether this app
	// is running in light or dark mode
	// according to the MacOS setting.

	theme() {

		const prefs = Electron.remote.systemPreferences;

		let theme = () => prefs.isDarkMode() ? 'dark' : 'light';

		prefs.subscribeNotification('AppleInterfaceThemeChangedNotification', () => {
			document.body.setAttribute('macos-theme', theme());
		});

		document.body.setAttribute('macos-theme', theme());

	}

	// Reset reloads the newer software
	// version by reloading the page
	// which will load the new version.

	@action reset() {

		if (Electron === null) return;

		const { autoUpdater } = Electron.remote.require('electron-updater');

		autoUpdater.quitAndInstall({ isSilent: true, isForceRunAfter: true });

	}

	// Check determines if an update to
	// the application is available by
	// checking the server version.

	@action check() {

		if (Electron === null) return;

		const { autoUpdater } = Electron.remote.require('electron-updater');

		autoUpdater.checkForUpdates().catch(() => {});

	}

}
