import Component from '@glimmer/component';
import { action } from '@ember/object';
import { timeout } from '@ascua/tasks';
import { restart } from '@ascua/tasks';

export default class Viewer extends Component {

	@action didCreate(element) {
		this.w = element.offsetWidth;
		this.h = element.offsetHeight;
		this.i = element.querySelectorAll('img')[0];
		this.c = element.querySelectorAll('canvas')[0];
		this.process.run(this.args.doc, this.args.page);
	}

	@action didChange(element) {
		this.w = element.offsetWidth;
		this.h = element.offsetHeight;
		this.i = element.querySelectorAll('img')[0];
		this.c = element.querySelectorAll('canvas')[0];
		this.process.run(this.args.doc, this.args.page);
	}

	@action didResize(element) {
		this.w = element.offsetWidth;
		this.h = element.offsetHeight;
		this.i = element.querySelectorAll('img')[0];
		this.c = element.querySelectorAll('canvas')[0];
		this.process.run(this.args.doc, this.args.page);
	}

	@action willDelete() {
		this.cleanup.run();
	}

	@restart * cleanup() {
		try {
			if (this.ren && this.ren.cancel) yield this.ren.cancel();
			if (this.pge && this.pge.cleanup) yield this.pge.cleanup();
		} catch (e) {
			// Ignore
		}
	}

	@restart * process(doc, page) {

		try {

			if (!doc) throw('No doc');

			if (!page) throw('No page');

			yield timeout(100);

			yield this.cleanup.run();

			this.pge = yield doc.getPage(page);

			let ww = this.w - 75;
			let wh = this.h - 75;
			let vp = this.pge.getViewport({ scale: 1 });
			let scale = Math.min(ww/vp.width, wh/vp.height);

			let viewport = this.pge.getViewport({ scale });
			this.c.width = viewport.width;
			this.c.height = viewport.height;

			this.ren = this.pge.render({
				canvasContext: this.c.getContext('2d'),
				viewport: viewport,
			});

			yield this.ren.promise;

		} catch (e) {

			// Ignore

			throw e;

		} finally {

			if (this.ren && this.ren.cancel) {
				this.ren.cancel();
			}

			if (this.pge && this.pge.cleanup) {
				this.pge.cleanup();
			}

		}

	}

}
