import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import CodeMirror from 'codemirror';
import Event from '@ascua/events';

const defaults = {
	autoCloseBrackets: true,
	autofocus: false,
	commentBlankLines: false,
	cursorBlinkRate: 530,
	electricChars: true,
	extraKeys: {
		'Cmd-/': 'toggleComment',
		'Cmd-Alt-/': 'blockComment',
	},
	firstLineNumber: 1,
	historyEventDelay: 1250,
	indentUnit: 4,
	indentWithTabs: false,
	lineNumbers: true,
	lineWrapping: false,
	matchBrackets: true,
	mode: 'javascript',
	readOnly: false,
	smartIndent: true,
	tabSize: 4,
	theme: 'abcum',
	undoDepth: 200,
	value: '',
	viewportMargin: 10,
};

export default class extends Component {

	@computed('args.opts')
	get opts() {
		return Object.assign({}, defaults, this.args.opts);
	}

	@action didCreate(element) {

		this.editor = new CodeMirror(element, this.opts);

		this.editor.setValue( String(this.args.value) );

		this.editor.on('change', (i) => {
			if (this.args.onValue) {
				this.args.onValue( i.getValue() );
			}
		});

		this.editor.on('change', (instance, change) => {
			element.dispatchEvent( new Event("change", {
				detail: { instance, change }
			}));
		});

		this.editor.on('changes', (instance, changes) => {
			element.dispatchEvent( new Event("changes", {
				detail: { instance, changes }
			}));
		});

		this.editor.on('beforeChange', (instance, changes) => {
			element.dispatchEvent( new Event("beforeChange", {
				detail: { instance, changes }
			}));
		});

		this.editor.on('cursorActivity', (instance) => {
			element.dispatchEvent( new Event("cursorActivity", {
				detail: { instance }
			}));
		});

		this.editor.on('keyHandled', (instance, name, event) => {
			element.dispatchEvent( new Event("keyHandled", {
				detail: { instance, name, event }
			}));
		});

		this.editor.on('beforeSelectionChange', (instance, selection) => {
			element.dispatchEvent( new Event("beforeSelectionChange", {
				detail: { instance, selection }
			}));
		});

		this.editor.on('viewportChange', (instance, from, to) => {
			element.dispatchEvent( new Event("viewportChange", {
				detail: { instance, from, to }
			}));
		});

		this.editor.on('gutterClick', (instance, line, gutter, event) => {
			element.dispatchEvent( new Event("gutterClick", {
				detail: { instance, line, gutter, event }
			}));
		});

		this.editor.on('gutterContextMenu', (instance, line, gutter, event) => {
			element.dispatchEvent( new Event("gutterContextMenu", {
				detail: { instance, line, gutter, event }
			}));
		});

		this.editor.on('focus', (instance, event) => {
			element.dispatchEvent( new Event("focus", {
				detail: { instance, event }
			}));
		});

		this.editor.on('blur', (instance, event) => {
			element.dispatchEvent( new Event("blur", {
				detail: { instance, event }
			}));
		});

		this.editor.on('scroll', (instance) => {
			element.dispatchEvent( new Event("scroll", {
				detail: { instance }
			}));
		});

	}

	@action didChange() {

		if (this.editor.getValue() !== this.args.value) {
			this.editor.setValue(this.args.value + '');
		}

		Object.keys(this.opts).forEach(k => {
			this.editor.setOption(k, this.opts[k]);
		});

	}

}
