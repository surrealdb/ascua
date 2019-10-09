import { setModifierManager } from '@ember/modifier';

export default setModifierManager(
	() => ({

		createModifier() {
			return { element: null };
		},

		installModifier(state, element, args) {
			state.element = element;
			Object.keys(args.named).forEach(k => {
				element.style[k] = isNaN(args.named[k]) ? args.named[k] : args.named[k]+'px';
			});
		},

		updateModifier({ element }, args) {
			Object.keys(args.named).forEach(k => {
				element.style[k] = isNaN(args.named[k]) ? args.named[k] : args.named[k]+'px';
			});
		},

		destroyModifier() {},

	}),
	class StyleModifier {}
);
