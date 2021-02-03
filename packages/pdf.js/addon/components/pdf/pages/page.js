import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { timeout } from '@ascua/tasks';
import { restart } from '@ascua/tasks';

export default class extends Component {

	@tracked visible = false;

	@action didEnter(element) {
		if (this.visible === false) {
			this.visible = true;
		}
	}

	@action didLeave(element) {
		if (this.visible === true) {
			this.visible = false;
		}
	}

	@action didCreate(element) {
		this.c = element.querySelectorAll('canvas')[0];
		this.process.run(this.args.page);
	}

	@action didChange(element) {
		this.c = element.querySelectorAll('canvas')[0];
		this.process.run(this.args.page);
	}

	@action didSelect(element, page) {
		if (page === this.args.page.pageNumber) {
			if ('scrollIntoViewIfNeeded' in element) {
				element.scrollIntoViewIfNeeded();
			} else {
				element.scrollIntoView({
					behavior: 'smooth',
					inline: 'nearest',
					block: 'center',
				});
			}
		}
	}

	@restart * cleanup() {
		try {
			if (this.ren && this.ren.cancel) yield this.ren.cancel();
		} catch (e) {
			// Ignore
		}
	}

	@restart * process(page) {

		try {

			if (!page) return;

			yield this.cleanup.run();

			let ww = this.args.w;
			let wh = this.args.h;
			let pr = window.devicePixelRatio || 1;
			let vp = page.getViewport({ scale: 1 });
			let scale = Math.min(ww/vp.width, wh/vp.height);

			this.c.getContext('2d').clearRect(0, 0, this.c.width, this.c.height);

			let viewport = page.getViewport({ scale });
			this.c.width = viewport.width;
			this.c.height = viewport.height;

			if (!this.visible) return;

			this.ren = page.render({
				canvasContext: this.c.getContext('2d'),
				viewport: viewport,
			});

			yield this.ren.promise;

		} catch (e) {

			throw e;

		} finally {

			try {
				if (this.ren && this.ren.cancel) {
					yield this.ren.cancel();
				}
			} catch (e) {
				// Ignore
			}

		}

	}

}
