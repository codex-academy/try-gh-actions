const hello = require('../hello');
const assert = require('assert');

describe('Test hello', function() {

	it('should pass', function() {
		assert.equal('Hello, Andre', hello('Andre'));
	})
	
	it('should not pass', function() {
		assert.equal('Hello, Daniell', hello('Daniel'));
	});

});