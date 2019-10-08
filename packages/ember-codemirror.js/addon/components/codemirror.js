import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import CodeMirror from 'codemirror';

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

	@action didInsert(element) {

		this.editor = new CodeMirror(element, this.opts);

		this.editor.setValue(this.args.value || '');

		this.editor.on('change', (i) => {
			if (this.args.onChange) {
				this.args.onChange( i.getValue() );
			}
		});

	}

	@action didUpdate(element) {

		if (this.editor.getValue() !== this.args.value) {
			this.editor.setValue(this.args.value || '');
		}

		Object.keys(this.opts).forEach(k => {
			this.editor.setOption(k, this.opts[k]);
		});

	}

}
