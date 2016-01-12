'use strict';

// for reference review https://dzone.com/articles/code-coverage-jasmine-tests
//http://ariya.ofilabs.com/2012/12/javascript-code-coverage-with-istanbul.html

describe('sqrt', () => {
  it('should compute the square root of 4 as 2', function() {
    expect(My.sqrt(4)).toEqual(2);
	});

	it('should throw an exception if given a negative number', function() {
  expect(function(){ My.sqrt(-1); }).
    toThrow(new Error('sqrt can\'t work on negative number'));
	});
});

describe('ES6 Foo', () => {

  let foo;

  beforeEach(() => {
    foo = new Foo();
  });

  it('should secondLet be undefined because block scoped variable', () => {
    expect(foo.secondLet).toEqual(undefined);
  });

  it('should return Do Something when calling doSomething', () => {
    expect(foo.doSomething()).toEqual('Do Something');
  });
});

describe('let validation', () => {

  it('should myLet always be 2', () => {
    expect(myLet).toEqual(2);
  });
});
