import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { timeout } from '@ascua/tasks';
import { restart } from '@ascua/tasks';

export default class extends Component {

	@inject pdfjs;

	@tracked doc;

	@tracked num = this.args.page || 1;

	@action didCreate(element) {
		this.process.run(this.args.url);
	}

	@action didChange(element) {
		this.process.run(this.args.url);
	}

	@action willDelete() {
		this.cleanup.run();
	}

	@action select(e, page) {
		if (page != this.num) {
			this.num = page;
			if (this.args.onSelectPage) {
				this.args.onSelectPage(page);
			}
		}
	}

	@restart * cleanup() {
		try {
			if (this.xhr && this.xhr.destroy) this.xhr.destroy();
			if (this.doc && this.doc.destroy) this.doc.destroy();
		} catch (e) {
			// Ignore
		}
	}

	@restart * process(url) {
		try {
			yield timeout(100);
			yield this.cleanup.run();
			this.lib = yield this.pdfjs.load();
			this.xhr = this.lib.getDocument(url);
			this.doc = yield this.xhr.promise;
		} catch (e) {
			// Ignore
		}
	}

}
