"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
var SocialMedia_1 = require("../ts/SocialMedia");
describe('Custom Social Media', function () {
    var sm;
    beforeEach(function () {
        sm = new SocialMedia_1.SocialMedia({
            defaultTarget: 'testTarget'
        });
        this.timeout(100);
    });
    it('should be able to initialise the class', function (done) {
        var userConfig = new SocialMedia_1.SocialMedia();
        if (typeof userConfig !== 'object') {
            throw new Error('Expected popup to be set as false');
        }
        done();
    });
});
