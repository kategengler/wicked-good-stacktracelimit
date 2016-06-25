/* jshint node: true */
'use strict';
var contentForHead = require('./lib/content-for-head');

module.exports = {
  name: 'wicked-good-stacktracelimit',
  contentFor: function(type, config) {
    if (type === 'head') {
      return contentForHead(config);
    }
  }
};
