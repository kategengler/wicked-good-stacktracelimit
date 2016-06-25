/* jshint node: true */
'use strict';

module.exports = function contentForHead(config) {
  var defaultLimit = 100;
  var configIsSet = typeof config.stackTraceLimit === "number";
  var limit = configIsSet ? config.stackTraceLimit : defaultLimit;
  var isEnabled = true;

  if (config.environment === 'production') {
    isEnabled = configIsSet;
  }

  if (isEnabled) {
    return '<script>Error.stackTraceLimit=' + limit + ';</script>'
  }
};
