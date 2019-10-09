import { helper } from '@ember/component/helper';

export function split([separator, ...params]) {
	return params.map(String).map( string => string.split(separator) ).reduce( (words, other) => words.concat(other) );
}

export default helper(split);
