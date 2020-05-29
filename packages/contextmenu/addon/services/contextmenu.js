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

	load(name, model) {

		this.items = [];

		let cont = this.owner.lookup(`controller:${name}`);

		if (!cont) this.route.generateController(name);

		this.route.render(name, {
			model: model,
			controller: name,
			into: 'application',
			outlet: 'contextmenu',
		});

	}

	hide() {

		this.route.disconnectOutlet({
			outlet: 'contextmenu',
			parentView: 'application',
		});

		this.enabled = false;

		this.element = null;

	}

	prep(element, event, vars, name, model) {

		this.element = element;

	}

	show(element, event, vars, name, model) {

		if (Electron) {
			return this.showDesktop(element, event, vars, name, model);
		} else {
			return this.showBrowser(element, event, vars, name, model);
		}

	}

	showBrowser(element, event, vars, name, model) {

		if (event.target.matches('input,textarea'))
			return true;

		if (event.target.isContentEditable)
			return true;

		this.x = event.clientX;
		this.y = event.clientY;

		this.enabled = true;

		this.load(name, model);

		event.preventDefault();

		return false;

	}

	showDesktop(element, event, vars, name, model) {

		if (this.element !== element)
			return true;

		this.load(name, model);

		setTimeout( () => {

			// Fetch remote variables
			const remote = Electron.remote;
			const window = remote.getCurrentWindow();
			const webcont = window.webContents;
			const session = webcont.session;

			// Build the menu from the template.
			let menu = remote.Menu.buildFromTemplate( this.items.map(list) );

			// Check to see if there are dictionary suggestions
			if (vars.dictionarySuggestions && vars.dictionarySuggestions.length > 0) {

				// Add a separator at the top of the menu.
				menu.insert(0, new remote.MenuItem({
					type: 'separator',
				}));

				// Enable add-to-dictionary for misspelling.
				if (vars.misspelledWord) {
					menu.insert(0, new remote.MenuItem({
						label: 'Add to dictionary',
						click: () => session.addWordToSpellCheckerDictionary(vars.misspelledWord)
					}));
					menu.insert(0, new remote.MenuItem({
						type: 'separator',
					}));
				}

				// List spelling suggestions at top of menu.
				for (const [i, v] of vars.dictionarySuggestions.entries()) {
					menu.insert(i, new remote.MenuItem({
						label: v,
						click: () => webcont.replaceMisspelling(v)
					}));
				}

			}

			// Display the contextmenu in the window.
			menu.popup({ window: window });

			// Clear up the contextmenu artifacts.
			this.hide();

		});

		event.preventDefault();

		return false;

	}

}
