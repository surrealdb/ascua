import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element, args) {
			state.element = element;
			args.positional.forEach(() => {});
			args.named && Object.values(args.named);
		},

		updateModifier() {},

		destroyModifier(state, args) {
			let [fn, ...rest] = args.positional;
			args.positional.forEach(() => {});
			args.named && Object.values(args.named);
			fn(state.element, ...rest, args.named);
		},

	}),
	class WillDestroyModifier {}
);
