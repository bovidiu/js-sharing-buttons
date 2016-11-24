"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
var SocialMedia_1 = require("../ts/SocialMedia");
describe('Default Social Media', function () {
    var sm;
    beforeEach(function () {
        sm = new SocialMedia_1.SocialMedia();
    });
    describe('#getConfig()', function () {
        it('should have defaultTarget', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.defaultTarget) {
                throw new Error('Expected test object to be present');
            }
            done();
        });
        it('should have assing socialMedia to defaultTarget', function (done) {
            var userConfig = sm.getConfig();
            if (userConfig.defaultTarget !== 'socialMedia') {
                throw new Error('Expected test object to be present');
            }
            done();
        });
    });
});
