'use strict';

var Widget = require('../lib/{%= name %}.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['{%= name %}'] = {
    setUp: function(done) {
        // setup here
        done();
    },

    'your test name': function(test) {
        test.expect(1);

        //Insert test here

        //For example:
        var w = new Widget();
        w.setCaption('hello');
        test.equal(w.stringify(), '<div>hello</div>');

        test.done();
    }
};