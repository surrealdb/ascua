import Controller from '@ember/controller';

export default class extends Controller {

	items = new Array(1000).fill().map( (v, k) => {
		return { id: k+1 };
	});

}
