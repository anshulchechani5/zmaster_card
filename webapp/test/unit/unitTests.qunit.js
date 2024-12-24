/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"z_master_card/zmastercard/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
