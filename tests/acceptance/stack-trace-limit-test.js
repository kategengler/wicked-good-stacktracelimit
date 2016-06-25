import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | stack trace limit');

test('Stack trace limit is set', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(Error.stackTraceLimit, 5, 'Stack trace limit is what we set it to');
  });
});
