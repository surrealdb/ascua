import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.13', { disableAutoTracking: true }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element, args) {
			element.focus();
		},

		updateModifier() {},

		destroyModifier() {},

	}),
	class FocusModifier {}
);
