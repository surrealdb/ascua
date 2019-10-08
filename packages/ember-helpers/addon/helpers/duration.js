import { helper } from '@ember/component/helper';
import { A } from '@ember/array';
import { assert } from '@ember/debug';
import format from '../utils/format';

let valid = ['ns','µs','ms','s','m','h','d','w'];

let units = [];
units[0] = { symbol:"ns", value: 1 };
units[1] = { symbol:"μs", value: 1000 * units[0].value };
units[2] = { symbol:"ms", value: 1000 * units[1].value };
units[3] = { symbol:"s",  value: 1000 * units[2].value };
units[4] = { symbol:"m",  value: 60   * units[3].value };
units[5] = { symbol:"h",  value: 60   * units[4].value };
units[6] = { symbol:"d",  value: 24   * units[5].value };
units[7] = { symbol:"w",  value: 7    * units[6].value };

export function duration([val], { input='ns', exact = false, decimals=0 }) {

	assert('Must specify a valid unit (ns, µs, ms, s, m, h, d, w)', valid.indexOf(input) !== -1);

	let amnt = parseFloat(val) || 0;

	amnt = amnt * ( A(units).find(unit => unit.symbol === input) ).value;

	return units.slice(0).reverse().reduce( (str, unit) => {

		let div = amnt / unit.value;
		let val = Math.floor(div);

		if (val !== 0) {

			amnt -= val * unit.value;

			let cnt = div % 1 ? div.toString().split('.')[1].length : 0;
			let fmt = format(div, decimals || cnt);

			if (exact === true) {
				return str += val.toString() + unit.symbol + ' ';
			} else {
				return str ? str : fmt.toString() + unit.symbol;
			}

		}

		return str;

	}, '');

}

export default helper(duration);
