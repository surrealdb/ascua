import { computed } from '@ember/object';

export default function(target, key, desc) {

	const init = desc.initializer;

	desc.initializer = undefined;

	const cp = computed(`args.${key}`, {
		get() {
			switch (this.args[key]) {
			case undefined:
				return init();
			default:
				return this.args[key];
			}
		},
	});

	return cp(target, key, desc);

}
