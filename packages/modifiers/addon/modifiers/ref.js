import { setModifierManager, capabilities } from '@ember/modifier';
import { set } from '@ember/object';

export default setModifierManager(
	() => ({

		capabilities: capabilities ? capabilities('3.13') : undefined,

		createModifier() {
			return {
				element: undefined,
				context: undefined,
				property: undefined,
			};
		},

		installModifier(state, element, { positional: [context, property] }) {

			state.element = element;
			state.context = context;
			state.property = property;

			set(state.context, state.property, state.element);

		},

		updateModifier(state) {

			set(state.context, state.property, state.element);

		},

		destroyModifier() {},

	}),
	class RefModifier {}
);
