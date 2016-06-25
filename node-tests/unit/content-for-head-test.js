/* jshint node: true */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var contentForHead = require('../../lib/content-for-head');

describe('contentForHead', function() {
  it('defaults to 100', function() {
    var content = contentForHead({});
    expect(content).to.equal(expectedScript(100));
  });

  it('uses the value from configuration in development environment', function() {
    var content = contentForHead({ stackTraceLimit: 15 });
    expect(content).to.equal(expectedScript(15));
  });

  describe('production', function() {
    it('does not set stackTraceLimit', function() {
      var content = contentForHead({ environment: 'production' });
      expect(content).to.equal(undefined);
    });

    it('is set in production if explicitly configured', function() {
      var content = contentForHead({ environment: 'production', stackTraceLimit: 43 });
      expect(content).to.equal(expectedScript(43));
    });
  });
});

function expectedScript(value) {
  return '<script>Error.stackTraceLimit=' + value + ';</script>';
}
