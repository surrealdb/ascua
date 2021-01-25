const func = (v) => v;

export default class RecordArray extends Array {

	constructor(owner, type = func, ...values) {

		super( ...values.map(type) );

		this.type = type;

		if (owner) {
			this.addArrayObserver(owner, {
				willChange: 'autosave',
				didChange: 'autosave',
			});
		}

	}

	addObject(value) {
		super.addObject( this.type(value) );
	}

	addObjects(values) {
		super.addObjects( [].concat(values).map(this.type) );
	}

	pushObject(value) {
		super.pushObject( this.type(value) );
	}

	pushObjects(values) {
		super.pushObjects( [].concat(values).map(this.type) );
	}

	setObjects(values) {
		super.setObjects( [].concat(values).map(this.type) );
	}

	replace(idx, count, values) {
		super.replace(idx, count, [].concat(values).map(this.type) );
	}

	then() {
		return Promise.all(this).then(...arguments);
	}

	catch() {
		return Promise.all(this).catch(...arguments);
	}

	finally() {
		return Promise.all(this).finally(...arguments);
	}

}
