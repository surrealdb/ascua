import Task from './classes/task';
import { assert } from '@ember/debug';

export function timeout(wait=0) {
	return new Promise(resolve => {
		setTimeout(resolve.bind(this, wait), wait);
	});
}


export function task(target, key, desc) {

	assert(
		'The task decorator must only be applied to a function or a generator function',
		desc.value && typeof desc.value === 'function',
	);

	let task;

	return {
		enumerable: true,
		configurable: true,
		get() {
			return task ? task : task = new Task(this, desc.value, 'task');
		},
	};

}

export function drop(target, key, desc) {

	assert(
		'The drop decorator must only be applied to a function or a generator function',
		desc.value && typeof desc.value === 'function',
	);

	let task;

	return {
		enumerable: true,
		configurable: true,
		get() {
			return task ? task : task = new Task(this, desc.value, 'drop');
		},
	};

}

export function restart(target, key, desc) {

	assert(
		'The restart decorator must only be applied to a function or a generator function',
		desc.value && typeof desc.value === 'function',
	);

	let task;

	return {
		enumerable: true,
		configurable: true,
		get() {
			return task ? task : task = new Task(this, desc.value, 'restart');
		},
	};

}
