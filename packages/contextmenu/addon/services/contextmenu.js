import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import Electron from 'electron';

const text = [
	{ label: 'Undo', role: 'undo' },
	{ label: 'Redo', role: 'redo' },
	{ type: 'separator' },
	{ label: 'Cut', role: 'cut' },
	{ label: 'Copy', role: 'copy' },
	{ label: 'Paste', role: 'paste' },
	{ label: 'Select All', role: 'selectall' }
];

const list = (item) => {
	return {
		role: item.role,
		type: item.type,
		label: item.label,
		enabled: !!item.enabled,
		visible: !!item.visible,
		checked: !!item.checked,
		sublabel: item.sublabel,
		accelerator: item.accelerator,
		click: () => item.click(),
	};
}

function enabled() {
	try {
		if (!window) throw "exception";
		if (!window.addEventListener) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Service {

	@tracked enabled = false;

	@tracked x = 0;

	@tracked y = 0;

	items = [];

	constructor() {

		super(...arguments);

		if (enabled() === false) return;

		this.owner = getOwner(this);

		this.route = this.owner.lookup('route:application');

		document.addEventListener('mousedown', (e) => {
			if ( !e.target.matches('context-menu-item') ) {
				this.hide();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.which == 27) this.hide();
		});

	}

	hide() {

		this.route.disconnectOutlet({
			outlet: 'contextmenu',
			parentView: 'application',
		});

		this.enabled = false;

	}

	show(event, name, model) {

		this.items = [];

		if (Electron) {
			return this.showDesktop(event, name, model);
		} else {
			return this.showBrowser(event, name, model);
		}

	}

	render(event, name, model) {

		let cont = this.owner.lookup(`controller:${name}`);

		if (!cont) this.route.generateController(name);

		this.route.render(name, {
			model: model,
			controller: name,
			into: 'application',
			outlet: 'contextmenu',
		});

	}

	showBrowser(event, name, model) {

		if (event.target.matches('input,textarea'))
			return true;

		if (event.target.isContentEditable)
			return true;

		this.x = event.clientX;
		this.y = event.clientY;

		this.enabled = true;

		this.render(event, name, model);

		event.preventDefault();

		return false;

	}

	showDesktop(event, name, model) {

		if (event.target.matches('input,textarea'))
			return this.showDesktopText();

		if (event.target.isContentEditable)
			return this.showDesktopText();

		this.render(event, name, model);

		this.showDesktopMenu();

		event.preventDefault();

		return false;

	}

	showDesktopMenu() {
		setTimeout( () => {
			const remote = Electron.remote;
			// Build the menu from the template.
			let menu = remote.Menu.buildFromTemplate( this.items.map(list) );
			// Display the contextmenu in the window.
			menu.popup({ window: remote.getCurrentWindow() });
			// Clear up the contextmenu artifacts.
			this.hide();
		});
	}

	showDesktopText() {
		setTimeout( () => {
			const remote = Electron.remote;
			// Build the menu from the template.
			let menu = remote.Menu.buildFromTemplate( text );
			// Display the contextmenu in the window.
			menu.popup({ window: remote.getCurrentWindow() });
			// Clear up the contextmenu artifacts.
			this.hide();
		});
	}

}
