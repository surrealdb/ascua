import Controller from '@ember/controller';

export default class extends Controller {

	delta = {
		ops: [
			{ insert: 'Gandalf', attributes: { bold: true } },
			{ insert: ' the ' },
			{ insert: 'Grey', attributes: { color: '#cccccc' } },
			{ insert: '. ' },
		]
	}

}
