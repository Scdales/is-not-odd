'use strict';

require('mocha');
const assert = require('assert');
const isNotOdd = require('./');

describe('isNotOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isNotOdd(1));
    assert(!isNotOdd(3));
    assert(isNotOdd(2));
    assert(isNotOdd(4));
    assert(isNotOdd(-2));
    assert(isNotOdd(-4));
    assert(isNotOdd(2.0e0));
    assert(isNotOdd(9007199254740992));
  });

  it('should work with strings:', function() {
    assert(!isNotOdd('1'));
    assert(!isNotOdd('3'));
    assert(isNotOdd('2'));
    assert(isNotOdd('4'));
    assert(isNotOdd('2.0e0'));
    assert(isNotOdd('9007199254740992'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isNotOdd(), /expected a number/);
    assert.throws(() => isNotOdd('foo'), /expected a number/);
    assert.throws(() => isNotOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isNotOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isNotOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});