import { helper } from '@ember/component/helper';

export function slug([value='']) {
	return String(value).replace(/[\s.]/gi, '-').replace(/[^a-zA-Z0-9_-]+/g, '').replace(/--/, '-').toLowerCase();
}

export default helper(slug);
