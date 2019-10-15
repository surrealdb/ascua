import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {

	this.route('config');
	this.route('styling');

	this.route('guides', function() {
		this.route('pwas');
		this.route('building');
		this.route('electron');
		this.route('fastboot');
	});

	this.route('services', function() {
		this.route('clock');
		this.route('electron');
		this.route('internet');
		this.route('location');
		this.route('metrics');
		this.route('storage');
		this.route('update');
		this.route('worker');
	});

	this.route('libraries', function() {
		this.route('apexcharts');
		this.route('chart');
		this.route('codemirror');
		this.route('mapbox-gl');
		this.route('marked');
		this.route('moment', function() {
			this.route('helpers');
		});
		this.route('sheet');
		this.route('stripe');
	});

	this.route('elements', function() {
		this.route('codemirror');
		this.route('contextmenu');
		this.route('dropdown');
		this.route('droppable');
		this.route('editable');
		this.route('iframe');
		this.route('gravatar');
		this.route('gridlist');
		this.route('initials');
		this.route('image');
		this.route('input');
		this.route('link');
		this.route('modal');
		this.route('select');
		this.route('social');
		this.route('label');
		this.route('tooltip');
		this.route('webview');
	});

	this.route('helpers', function() {
		this.route('arrays');
		this.route('dom');
		this.route('events');
		this.route('format');
		this.route('keyboard');
		this.route('logic');
		this.route('maths');
		this.route('promise');
		this.route('routing');
		this.route('strings');
	});

});
