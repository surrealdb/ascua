import Service from '@ember/service';
import elementResizeDetectorMaker from 'element-resize-detector';

export default class extends Service {

	constructor() {
    	super(...arguments);
		this.detector = elementResizeDetectorMaker({
			strategy: "scroll"
		});
	}

	setup(element, callback, options) {
		this.detector.listenTo(options, element, callback);
	}

	clear(element, callback) {
		this.detector.removeListener(element, callback);
	}

}
