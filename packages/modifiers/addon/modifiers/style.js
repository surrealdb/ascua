import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities ? capabilities('3.13') : undefined,

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