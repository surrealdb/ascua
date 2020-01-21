const func = (v) => v;

export default class CustomArray extends Array {

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

}
