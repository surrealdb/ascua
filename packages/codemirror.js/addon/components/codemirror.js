import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import CodeMirror from 'codemirror';
import Event from '@ascua/events';

const options = [
	'autoCloseBrackets',
	'autofocus',
	'commentBlankLines',
	'cursorBlinkRate',
	'electricChars',
	'extraKeys',
	'firstLineNumber',
	'historyEventDelay',
	'indentUnit',
	'indentWithTabs',
	'lineNumbers',
	'lineWrapping',
	'matchBrackets',
	'mode',
	'readOnly',
	'smartIndent',
	'tabSize',
	'theme',
	'undoDepth',
	'viewportMargin',
];

export default class extends Component {

	@arg value = null;

	@arg autoCloseBrackets = true;
	@arg autofocus = false;
	@arg commentBlankLines = false;
	@arg cursorBlinkRate = 530;
	@arg electricChars = true;
	@arg extraKeys = {
		'Cmd-/': 'toggleComment',
		'Cmd-Alt-/': 'blockComment',
	};
	@arg firstLineNumber = 1;
	@arg historyEventDelay = 1250;
	@arg indentUnit = 4;
	@arg indentWithTabs = true;
	@arg lineNumbers = true;
	@arg lineWrapping = false;
	@arg matchBrackets = true;
	@arg mode = 'javascript';
	@arg readOnly = false;
	@arg smartIndent = true;
	@arg tabSize = 4;
	@arg theme = 'abcum';
	@arg undoDepth = 200;
	@arg viewportMargin = 10;

	@action didCreate(element) {

		if (!CodeMirror) return;

		this.editor = new CodeMirror(element);

		options.forEach(k => {
			this.editor.setOption(k, this[k]);
		});

		if (this.value) {
			this.editor.setValue( String(this.value) );
		}

		this.editor.on('change', (i) => {
			if (this.args.onChange) {
				this.args.onChange( i.getValue() );
			}
		});

		this.editor.on('change', (instance, change) => {
			element.dispatchEvent( new Event('change', {
				detail: { instance, change }
			}));
		});

		this.editor.on('changes', (instance, changes) => {
			element.dispatchEvent( new Event('changes', {
				detail: { instance, changes }
			}));
		});

		this.editor.on('beforeChange', (instance, changes) => {
			element.dispatchEvent( new Event('beforeChange', {
				detail: { instance, changes }
			}));
		});

		this.editor.on('cursorActivity', (instance) => {
			element.dispatchEvent( new Event('cursorActivity', {
				detail: { instance }
			}));
		});

		this.editor.on('keyHandled', (instance, name, event) => {
			element.dispatchEvent( new Event('keyHandled', {
				detail: { instance, name, event }
			}));
		});

		this.editor.on('beforeSelectionChange', (instance, selection) => {
			element.dispatchEvent( new Event('beforeSelectionChange', {
				detail: { instance, selection }
			}));
		});

		this.editor.on('viewportChange', (instance, from, to) => {
			element.dispatchEvent( new Event('viewportChange', {
				detail: { instance, from, to }
			}));
		});

		this.editor.on('gutterClick', (instance, line, gutter, event) => {
			element.dispatchEvent( new Event('gutterClick', {
				detail: { instance, line, gutter, event }
			}));
		});

		this.editor.on('gutterContextMenu', (instance, line, gutter, event) => {
			element.dispatchEvent( new Event('gutterContextMenu', {
				detail: { instance, line, gutter, event }
			}));
		});

		this.editor.on('focus', (instance, event) => {
			element.dispatchEvent( new Event('focus', {
				detail: { instance, event }
			}));
		});

		this.editor.on('blur', (instance, event) => {
			element.dispatchEvent( new Event('blur', {
				detail: { instance, event }
			}));
		});

		this.editor.on('scroll', (instance) => {
			element.dispatchEvent( new Event('scroll', {
				detail: { instance }
			}));
		});

	}

	@action didChange() {

		if (!CodeMirror) return;

		if (this.editor.getValue() !== this.args.value) {
			this.editor.setValue(this.args.value + '');
		}

		options.forEach(k => {
			this.editor.setOption(k, this[k]);
		});

	}

}
