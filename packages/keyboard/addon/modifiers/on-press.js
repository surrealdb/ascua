import { setModifierManager, capabilities } from '@ember/modifier';
import handler from '../utils/handler';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {
			return { element: null, callback: null };
		},

		installModifier(state, element, { positional: [keys, func] }) {
			state.element = element;
			state.callback = handler.bind(state, keys, func);
			state.element.addEventListener('keydown', state.callback);
		},

		updateModifier(state, { positional: [keys, func] }) {
			state.element.removeEventListener('keydown', state.callback);
			state.callback = handler.bind(state, keys, func);
			state.element.addEventListener('keydown', state.callback);
		},

		destroyModifier(state) {
			state.element.removeEventListener('keydown', state.callback);
		},

	}),
	class OnKeyPressModifier { }
);
