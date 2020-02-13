import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import JSONEditor from 'jsoneditor';

export default class extends Component {

	@arg enableSort = false;
	@arg enableTransform = false;
	@arg indentation = 4;
	@arg mode = 'tree';
	@arg modes = ['code','tree'];

	@action didCreate(element) {

		this.instance = new JSONEditor(element, {
			enableTransform: this.enableTransform,
			enableSort: this.enableSort,
			indentation: this.indentation,
			mode: this.mode,
			modes: this.modes,
			statusBar: this.statusBar,
			onChange: () => {
				this.json = this.instance.get();
				if (this.args.onChange) {
					this.args.onChange(this.json);
				}
			},
		});

		this.instance.set(this.args.json);

		this.instance.expandAll();

		this.json = this.args.json;

	}

	@action didChange(element, json) {

		if (this.json != this.args.json) {

			this.instance.set(this.args.json);

			this.instance.expandAll();

			this.json = this.args.json;

		}

	}

	@action willDelete() {

		this.instance.destroy();

	}

}
