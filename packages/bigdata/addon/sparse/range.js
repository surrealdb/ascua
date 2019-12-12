import context from '@ascua/context';

export default class Range {

	constructor(range) {
		this.range = range;
	}

	async fetch(fetch) {

		if (this.cancel) this.cancel();

		[this.ctx, this.cancel] = context.withCancel();

		return await fetch(this.ctx, this.range);

	}

}
