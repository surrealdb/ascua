import { setModifierManager, capabilities } from '@ember/modifier';
import Viewport from '../classes/viewport';
import enabled from '../utils/enabled';

const viewport = Viewport.Instance;

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element, args) {

			state.element = element;

			let [fn, ...rest] = args.positional;

			if (enabled()) {
				viewport.observe(
					element,
					() => fn(element, rest, args.named),
					() => {},
				);
			} else {
				fn(element, rest, args.named);
			}

		},

		updateModifier() {},

		destroyModifier({ element }) {
			if (enabled()) {
				viewport.unobserve(element);
			}
		}

	}),
	class DidEnterViewportModifier {}
);
