'use strict';

const assert = require('assert');
const app = require('../app');

describe("#add", () => {
    it("should valid sum", function () {
        assert.equal(app.add(1, 5), 6);
        assert.equal(app.add(10, 5), 15);
        assert.equal(app.add(-2, 5), 3);
        assert.equal(app.add(99, -9), 90);
    });
});