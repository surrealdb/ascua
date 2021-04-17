import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element, args) {
			state.element = element;
			Object.keys(args.named).forEach(k => {
				element.style[k] = isNaN(args.named[k]) ? args.named[k] : args.named[k]+'px';
			});
		},

		updateModifier(state, args) {
			Object.keys(args.named).forEach(k => {
				state.element.style[k] = isNaN(args.named[k]) ? args.named[k] : args.named[k]+'px';
			});
		},

		destroyModifier() {},

	}),
	class StyleModifier {}
);
