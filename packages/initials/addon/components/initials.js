import Component from '@glimmer/component';
import initials from '../utils/initials';
import hashcode from '../utils/hashcode';
import { computed } from '@ember/object';
import { arg } from '@ascua/decorators';

const COLOURS = [
	'#1abc9c', '#16a085', '#f1c40f',
	'#f39c12', '#2ecc71', '#27ae60',
	'#e67e22', '#d35400', '#3498db',
	'#2980b9', '#e74c3c', '#c0392b',
	'#9b59b6', '#8e44ad', '#bdc3c7',
	'#34495e', '#2c3e50', '#95a5a6',
	'#7f8c8d', '#ec87bf', '#d870ad',
	'#f69785', '#9ba37e', '#b49255',
	'#b49255', '#a94136', '#5461b4',
];

export default class extends Component {

	@arg size = 80;

	@arg name = '?';

	@computed('name')
	get chars() {
		return initials(this.name);
	}

	@computed('name')
	get color() {
		return COLOURS[hashcode(this.name, COLOURS.length)];
	}

}
