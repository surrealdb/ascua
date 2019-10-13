export default class Viewport {

	// ------------------------------

	static get Instance() {
        if (Viewport.singleton === null) {
            Viewport.singleton = new Viewport();
        }
        return this.singleton;
    }

	static singleton = null;

	// ------------------------------

	references = new WeakMap();

	find(root, options = {}) {

		let found = this.references.get(root);

		if (found) return found;

		let value = {
			observer: new IntersectionObserver(entries => {
				return this.intersect(root, options, entries);
			}, options),
			watchers: [],
		};

		this.references.set(root, value);

		return value;

	}

	observe(element, onEnter, onLeave, options = {}) {

		const { root = window } = options;

		const ref = this.find(root, options);

		const { observer, watchers } = ref;

		observer.observe(element);

		watchers.push({ element, onEnter, onLeave });

	}

	unobserve(element, options = {}) {

		const { root = window } = options;

		const ref = this.find(root, options);

		const { observer, watchers } = ref;

		observer.unobserve(element);

		for (let i = watchers.length - 1; i >= 0; i--) {
			if (watchers[i]) {
				if (watchers[i].element === element) {
					watchers.splice(i, 1);
					break;
				}
			}
		}

	}

	intersect(root, options, entries) {

		const ref = this.find(root, options);

		entries.forEach(entry => {

			const isEnter = entry.isIntersecting == true;
			const isLeave = entry.intersectionRatio <= 0;
			const filter = w => w.element === entry.target;

			if (isEnter) {
				ref.watchers.filter(filter).forEach(w => {
					w.onEnter();
				});
			}

			if (isLeave) {
				ref.watchers.filter(filter).forEach(w => {
					w.onLeave();
				});
			}

		});

	}

}
