import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import Masonry from 'masonry.js';

export default class extends Component {

	masonry = undefined;

	@arg columnWidth = undefined;
	@arg fitWidth = false;
	@arg gutter = 0;
	@arg horizontalOrder = false;
	@arg originLeft = true;
	@arg originTop = true;
	@arg percentPosition = false;
	@arg resize = true;
	@arg stagger = 0;
	@arg transitionDuration = 0;

	observer = new MutationObserver(this.reload);

	@action didCreate(element) {
		this.masonry = new Masonry(element, {
			itemSelector: 'app-masonry-item',
			columnWidth: this.columnWidth,
			fitWidth: this.fitWidth,
			horizontalOrder: this.horizontalOrder,
			gutter: this.gutter,
			originLeft: this.originLeft,
			originTop: this.originTop,
			percentPosition: this.percentPosition,
			resize: this.resize,
			stagger: this.stagger,
			transitionDuration: this.transitionDuration,
		});
	}

	@action didChange(element) {
		this.masonry.reloadItems();
		this.masonry.layout();
	}

	@action willDestroy() {
		this.masonry.destroy();
	}

	@action didScroll(element) {
		let el = element.target;
		if (el.scrollHeight - el.scrollTop - el.offsetHeight < 1) {
			if (typeof this.args.model.loadmore === 'function') {
				this.args.model.loadmore(this.args.model.length);
			}
		}
	}

	@action reload(mutations) {
		for (let mutation of mutations) {
			if (mutation.type == 'childList') {
				[].forEach.call(mutation.addedNodes, child => {
					if (child.tagName === "IMG") {
						child.addEventListener('load', () => {
							this.masonry.reloadItems();
							this.masonry.layout();
						});
						child.addEventListener('error', () => {
							this.masonry.reloadItems();
							this.masonry.layout();
						});
					}
				})
			}
		}
		this.masonry.reloadItems();
		this.masonry.layout();
	}

}
