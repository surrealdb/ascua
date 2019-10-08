const PADDING = 10;

export default function position(side, e, t) {

	switch (side) {
	case 'n':
		return {
			t: e.t - t.h - PADDING,
			l: e.l + (e.w / 2) - (t.w / 2),
		};
	case 'ne':
		return {
			t: e.t - t.h - PADDING,
			l: e.l + (e.w / 2) - PADDING - (PADDING / 2),
		};
	case 'e':
		return {
			t: e.t + (e.h / 2) - (t.h / 2),
			l: e.l + e.w + PADDING + (PADDING / 2),
		};
	case 'se':
		return {
			t: e.t + e.h + PADDING,
			l: e.l + (e.w / 2) - PADDING - (PADDING / 2),
		};
	case 's':
		return {
			t: e.t + e.h + PADDING,
			l: e.l + (e.w / 2) - (t.w / 2),
		};
	case 'sw':
		return {
			t: e.t + e.h + PADDING,
			l: e.l + (e.w / 2) - t.w + PADDING + (PADDING / 2),
		};
	case 'w':
		return {
			t: e.t + (e.h / 2) - (t.h / 2),
			l: e.l - t.w - PADDING,
		};
	case 'nw':
		return {
			t: e.t - t.h - PADDING,
			l: e.l + (e.w / 2) - t.w + PADDING + (PADDING / 2),
		};
	default:
		return {
			t: e.t - t.h - PADDING,
			l: e.l + (e.w / 2) - (t.w / 2),
		};
	}

}
