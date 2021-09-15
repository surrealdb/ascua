import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { timeout } from '@ascua/tasks';
import { restart } from '@ascua/tasks';
import { drop } from '@ascua/tasks';

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
		this.e = element;
		this.process.run(this.args.page);
	}

	@action didChange(element) {
		this.e = element;
		this.process.run(this.args.page);
	}

	@action didSelect(element, page) {
		if (page === this.args.page.pageNumber) {
			if ('scrollIntoViewIfNeeded' in element) {
				element.scrollIntoViewIfNeeded(true);
			} else {
				element.scrollIntoView();
			}
		}
	}

	@action willDelete() {
		this.cleanup.run();
	}

	@drop * cleanup() {
		try {
			if (this.ren && this.ren.cancel) yield this.ren.cancel();
		} catch (e) {
			// Ignore
		}
	}

	@restart * process(page) {

		yield page;

		try {

			if (this.c) this.e.removeChild(this.c);
			this.c = document.createElement('canvas');
			this.e.appendChild(this.c);

			let ww = this.args.w;
			let wh = this.args.h;
			let pr = window.devicePixelRatio || 1;
			let pv = page.getViewport({ scale: pr });
			let sc = Math.min(ww/pv.width, wh/pv.height);
			let vp = page.getViewport({ scale: sc * pr });

			this.c.getContext('2d').scale(pr, pr);

			this.c.width = vp.width;
			this.c.height = vp.height;

			if (!this.visible) return;

			if (this.args.pdf.renders[page.pageNumber]) {
				yield this.args.pdf.renders[page.pageNumber];
			}

			this.ren = page.render({
				canvasContext: this.c.getContext('2d'),
				enableWebGL: true,
				viewport: vp,
			});

			this.args.pdf.renders[page.pageNumber] = this.ren.promise;

			let rend = yield this.ren.promise;

			let text = yield page.getTextContent();

			let view = this.e.querySelector('text');
			view.style.left = this.c.offsetLeft + 'px';
			view.style.top = this.c.offsetTop + 'px';
			view.style.height = this.c.offsetHeight + 'px';
			view.style.width = this.c.offsetWidth + 'px';

			pdfjsLib.renderTextLayer({
				textContent: text,
				container: view,
				viewport: vp,
				textDivs: [],
			});

		} catch (e) {

			// Ignore

		}

	}

}
