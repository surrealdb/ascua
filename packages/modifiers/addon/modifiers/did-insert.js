import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities ? capabilities('3.13') : undefined,

		createModifier() {},

		installModifier(state, element, args) {
			let [fn, ...rest] = args.positional;
			fn(element, rest, args.named);
		},

		updateModifier() {},

		destroyModifier() {},

	}),
	class DidInsertModifier {}
);
