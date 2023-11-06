import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: false }),

		createModifier() {},

		installModifier(state, element, args) {
			let [fn, ...rest] = args.positional;
			args.positional.forEach(() => {});
			args.named && Object.values(args.named);
			fn(element, ...rest, args.named);
		},

		updateModifier() {},

		destroyModifier() {},

	}),
	class DidInsertModifier {}
);
