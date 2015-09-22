'use strict';

var chai = require('chai');
var expect = chai.expect;
var noFalsy = require('./');

chai.should();

describe('no-nil', function() {
  it('should remove falsy values from objects', function() {
    var input = {boo: 0, foo: null, coo: 5};

    noFalsy(input);

    expect('boo' in input).to.be.false;
    expect('foo' in input).to.be.false;
    input.coo.should.equal(5);
  });

  it('should remove falsy values from arrays', function() {
    var input = [null, '', 4];

    noFalsy(input);

    input.length.should.equal(1);
    input[0].should.equal(4);
  });

  it('should return null for falsy values', function() {
    expect(noFalsy(null)).to.be.null;
    expect(noFalsy(undefined)).to.be.null;
    expect(noFalsy(0)).to.be.null;
    expect(noFalsy(NaN)).to.be.null;
    expect(noFalsy('')).to.be.null;
  });

  it('should return all other values', function() {
    var expected = 'asdfasdf';

    noFalsy(expected).should.equal(expected);
  });
});
