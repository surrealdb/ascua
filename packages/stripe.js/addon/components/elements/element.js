import Component from '@glimmer/component';
import { action } from '@ember/object';
import Event from '@ascua/events';

export default class extends Component {

	@action didCreate(element) {

		if (this.args.elements === null) return;

		this.element = this.args.elements.create(this.type, this.opts);

		this.element.mount(element);

		this.element.on('change', detail => {
			if (this.args.onError) {
				this.args.onError(detail.error);
			}
			if (this.args.onEmpty) {
				this.args.onEmpty(detail.empty);
			}
			if (this.args.onComplete) {
				this.args.onComplete(detail.complete);
			}
		});

		this.element.on('change', detail => {
			element.dispatchEvent(
				new Event('change', { detail })
			)
		});

		this.element.on('ready', detail => {
			element.dispatchEvent(
				new Event('ready', { detail })
			)
		});

		this.element.on('focus', detail => {
			element.dispatchEvent(
				new Event('focus', { detail })
			)
		});

		this.element.on('blur', detail => {
			element.dispatchEvent(
				new Event('blur', { detail })
			)
		});

		this.element.on('click', detail => {
			element.dispatchEvent(
				new Event('click', { detail })
			)
		});

	}

	@action didChange() {

		if (this.args.elements === null) return;

		this.element.update(this.opts);

	}

	@action willDelete() {

		if (this.args.elements === null) return;

		this.element.unmount();

		this.element.destroy();

	}

}
