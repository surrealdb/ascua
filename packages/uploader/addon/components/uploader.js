import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@arg width = '100%';

	@arg height = '100%';

	@arg clickable = true;

	@tracked waiting = false;

	@tracked loading = false;

	@tracked dropping = false;

	@action didStop(event) {
		event.stopPropagation();
	}

	@action didClick(event) {
		event.target.querySelectorAll('input')[0].click();
	}

	@action didInput(event) {
		this.into(event.target.files);
	}

	@action didDragOver(event) {
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDragEnter(event) {
		this.dropping = true;
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDragLeave(event) {
		this.dropping = false;
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDrop(event) {
		this.dropping = false;
		event.preventDefault();
		event.stopPropagation();
		if (event.dataTransfer) {
			if (event.dataTransfer.files.length > 0) {
				return this.into(event.dataTransfer.files);
			}
		}
	}

	into(files) {

		let ms = [].concat(this.args.mimetypes).filter(Boolean);
		let es = [].concat(this.args.extensions).filter(Boolean);

		for (let i=0; i<files.length; i++) {

			let f = files[i];

			if (es.length && es.includes(f.ext) === false) {
				return;
			}

			if (ms.length && ms.includes(f.type) === false) {
				return;
			}

			let r = new FileReader();

			if (this.args.onOpen) {
				this.args.onOpen(f);
			}

			r.onload = e => {
				this.waiting = true;
				this.loading = false;
				if (this.args.onLoad) {
					this.args.onLoad(e, f);
				}
			}

			r.onerror = e => {
				this.waiting = true;
				this.loading = false;
				if (this.args.onError) {
					this.args.onError(e, f);
				}
			}

			r.onprogress = e => {
				this.waiting = false;
				this.loading = true;
				if (this.args.onProgress) {
					this.args.onProgress(e, f);
				}
			}

			r.readAsBinaryString(f);

		}

	}

}
