'use strict';

module.exports = (conf, opts) => {

	return `
	<meta name="format-detection" content="date=no">
	<meta name="format-detection" content="email=no">
	<meta name="format-detection" content="address=no">
	<meta name="format-detection" content="telephone=no">

	<meta name="theme-color" content="${opts.color}">
	<meta name="msapplication-TileColor" content="${opts.color}">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="${opts.name}">
	<meta name="apple-mobile-web-app-status-bar-style" content="${opts.style}">

	<link rel="manifest" href="${conf.rootURL}static/manifest.json">

	<meta name="msapplication-config" content="${conf.rootURL}static/browserconfig.xml">

	<link rel="mask-icon" href="${conf.rootURL}static/webapp/icon.svg" color="${opts.mask}">

	<link rel="shortcut icon" href="${conf.rootURL}static/webapp/favicon.png" type="image/png">

	<link rel="icon" sizes="16x16" href="${conf.rootURL}static/webapp/icon-16x16.png">
	<link rel="icon" sizes="32x32" href="${conf.rootURL}static/webapp/icon-32x32.png">
	<link rel="icon" sizes="128x128" href="${conf.rootURL}static/webapp/icon-128x128.png">
	<link rel="icon" sizes="192x192" href="${conf.rootURL}static/webapp/icon-192x192.png">

	<link rel="apple-touch-icon" sizes="57x57" href="${conf.rootURL}static/webapp/icon-57x57.png">
	<link rel="apple-touch-icon" sizes="76x76" href="${conf.rootURL}static/webapp/icon-76x76.png">
	<link rel="apple-touch-icon" sizes="120x120" href="${conf.rootURL}static/webapp/icon-120x120.png">
	<link rel="apple-touch-icon" sizes="152x152" href="${conf.rootURL}static/webapp/icon-152x152.png">
	<link rel="apple-touch-icon" sizes="167x167" href="${conf.rootURL}static/webapp/icon-167x167.png">
	<link rel="apple-touch-icon" sizes="180x180" href="${conf.rootURL}static/webapp/icon-180x180.png">

	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-750x1294.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-1242x2148.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-1668x2224.png" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
	<link rel="apple-touch-startup-image" href="${conf.rootURL}static/webapp/launch-2048x2732.png" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
	`;

};
