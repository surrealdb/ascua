import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {},

		installModifier(state, element, args) {
			let [fn, ...rest] = args.positional;
			fn(element, ...rest, args.named);
		},

		updateModifier() {},

		destroyModifier() {},

	}),
	class DidInsertModifier {}
);
