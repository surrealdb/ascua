import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { cache } from '@ascua/decorators';

export default class extends Component {

	@cache get code() {
		let code = this.args.code;
		let lang = this.args.language;
		let grammar = Prism.languages[lang];
		return htmlSafe(Prism.highlight(code, grammar, lang));
	}

}
