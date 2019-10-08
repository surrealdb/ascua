import { helper } from '@ember/component/helper';
import { w as f } from '@ember/string';

export function w([...params]) {
	return params.map(String).map(f).reduce( (words, other) => words.concat(other) );
}

export default helper(w);
