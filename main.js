'use strict';

var oDate = require('o-date');

function init(container) {
	container = container || document.body;
	oDate.init(container);
}

module.exports = {
	init: init
};
