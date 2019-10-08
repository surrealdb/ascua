import { helper } from '@ember/component/helper';

export function scrollTo(args, { top = 0, left = 0, smooth = false }) {
	return () => {

		if (typeof FastBoot !== 'undefined') return;

		window.scrollTo({
			top: top,
			left: left,
			behavior: smooth ? 'smooth' : 'auto',
		});

	};
}

export default helper(scrollTo);
