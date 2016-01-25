'use strict';

var assert = require('assert');
var app = require('../app');

describe("#add", function () {
    it("should valid sum", function () {
        assert.equal(app.add(1, 5), 6);
        assert.equal(app.add(10, 5), 15);
        assert.equal(app.add(-2, 5), 3);
        assert.equal(app.add(99, -9), 90);
    });
});