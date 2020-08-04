import Component from '@glimmer/component';
import { arg } from '@ascua/decorators';
import { action } from '@ember/object';
import Cropper from 'cropper';

export default class extends Component {

	@arg src = '';
	@arg data = {};

	@arg autoCrop = false;
	@arg background = true;
	@arg center = true;
	@arg dragMode = 'crop';
	@arg guides = true;
	@arg highlight = true;
	@arg movable = false;
	@arg preview = '';
	@arg responsive = true;
	@arg restore = true;
	@arg rotatable = true;
	@arg scalable = false;
	@arg viewMode = 2;
	@arg zoomable = false;

	@action didCreate(element) {

		if (!Cropper) return;

		this.instance = new Cropper(element, {
			data: Object.assign({}, this.data),
			autoCrop: this.autoCrop,
			background: this.background,
			center: this.center,
			dragMode: this.dragMode,
			guides: this.guides,
			highlight: this.highlight,
			movable: this.movable,
			preview: this.preview,
			responsive: this.responsive,
			restore: this.restore,
			rotatable: this.rotatable,
			scalable: this.scalable,
			viewMode: this.viewMode,
			zoomable: this.zoomable,
		});

		if (this.args.onReady) {
			element.addEventListener('ready', (event) => {
				this.args.onReady(this.instance, event);
			});
		}

		if (this.args.onCrop) {
			element.addEventListener('crop', (event) => {
				this.args.onCrop(this.instance, event);
			});
		}

		if (this.args.onZoom) {
			element.addEventListener('zoom', (event) => {
				this.args.onZoom(this.instance, event);
			});
		}

	}

	@action didChange(element) {

		if (!Cropper) return;

		this.instance.replace(this.src);

	}

	@action didModify(element) {

		if (!Cropper) return;

		this.instance.setData(this.data);

	}

	@action didResize(element) {

		if (!Cropper) return;

		this.instance.setData(this.data);

	}

	@action willDestroy() {

		if (!Cropper) return;

		this.instance.destroy();

	}

}
