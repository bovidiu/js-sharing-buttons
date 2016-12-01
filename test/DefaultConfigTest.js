"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
var SocialMedia_1 = require("../ts/SocialMedia");
describe('Default Social Media', function () {
    var sm;
    beforeEach(function () {
        sm = new SocialMedia_1.SocialMedia();
        this.timeout(100);
    });
    describe('#getConfig()', function () {
        it('should have defaultTarget', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.defaultTarget) {
                throw new Error('Expected test object to be present');
            }
            done();
        });
        it('should have assign socialMedia to defaultTarget', function (done) {
            var userConfig = sm.getConfig();
            if (userConfig.defaultTarget !== 'socialMedia') {
                throw new Error('Expected test object to be present');
            }
            done();
        });
        it('should have icon object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon) {
                throw new Error('Expected icon object to be assign');
            }
            done();
        });
        /* Facebook icon */
        it('should have icon Facebook object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.facebook) {
                throw new Error('Expected icon.facebook object to be assign');
            }
            done();
        });
        it('should have name assign to icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.facebook.name) {
                throw new Error('Expected icon.facebook should have a name');
            }
            done();
        });
        it('should have to be set active icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.facebook.active) {
                throw new Error('Expected icon.facebook to be active');
            }
            done();
        });
        it('should have to have a url set to active icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.facebook.url) {
                throw new Error('Expected url to be present in icon.facebook');
            }
            done();
        });
        it('should have class empty string icon.facebook.class ', function (done) {
            var userConfig = sm.getConfig();
            var fb = userConfig.icon.facebook["class"];
            if (fb.length > 0) {
                throw new Error('Expected to be empty string icon.facebook.class');
            }
            done();
        });
        it('should have id empty string icon.facebook.class ', function (done) {
            var userConfig = sm.getConfig();
            var fb = userConfig.icon.facebook.id;
            if (fb.length > 0) {
                throw new Error('Expected to be empty string on icon.facebook.id');
            }
            done();
        });
        it('should have app.id empty string icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            var fb = userConfig.icon.facebook.app.id;
            if (fb.length > 0) {
                throw new Error('Expected to be empty string on icon.facebook.app.id');
            }
            done();
        });
        it('should have app.redirect_uri empty string icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            var fb = userConfig.icon.facebook.app.redirect_uri;
            if (fb.length > 0) {
                throw new Error('Expected to be empty string on icon.facebook.app.id');
            }
            done();
        });
        it('should have app.url set icon.facebook ', function (done) {
            var userConfig = sm.getConfig();
            var fb = userConfig.icon.facebook.app.url;
            if (!fb.length) {
                throw new Error('Expected a url for icon.facebook.app.url');
            }
            done();
        });
        /* Twitter icon */
        it('should have icon Twitter object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.twitter) {
                throw new Error('Expected icon.twitter object to be assign');
            }
            done();
        });
        it('should have name assign to icon.Twitter ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.twitter.name) {
                throw new Error('Expected icon.twitter should have a name');
            }
            done();
        });
        it('should have to be set active icon.Twitter ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.twitter.active) {
                throw new Error('Expected icon.twitter to be active');
            }
            done();
        });
        it('should have to have a url set to active icon.twitter ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.twitter.url) {
                throw new Error('Expected url to be present in icon.twitter');
            }
            done();
        });
        /* pinterest icon */
        it('should have icon pinterest object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.pinterest) {
                throw new Error('Expected icon.pinterest object to be assign');
            }
            done();
        });
        it('should have name assign to icon.pinterest ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.pinterest.name) {
                throw new Error('Expected icon.pinterest should have a name');
            }
            done();
        });
        it('should have to be set active icon.pinterest ', function (done) {
            var userConfig = sm.getConfig();
            if (userConfig.icon.pinterest.active) {
                throw new Error('Expected icon.pinterest not to be active');
            }
            done();
        });
        it('should have to have a url set to active icon.pinterest ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.pinterest.url) {
                throw new Error('Expected url to be present in icon.pinterest');
            }
            done();
        });
        /* linkedin icon */
        it('should have icon pinterest object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.linkedin) {
                throw new Error('Expected icon.linkedin object to be assign');
            }
            done();
        });
        it('should have name assign to icon.linkedin ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.linkedin.name) {
                throw new Error('Expected icon.linkedin should have a name');
            }
            done();
        });
        it('should have to be set active icon.linkedin ', function (done) {
            var userConfig = sm.getConfig();
            if (userConfig.icon.linkedin.active) {
                throw new Error('Expected icon.linkedin not to be active');
            }
            done();
        });
        it('should have to have a url set to active icon.linkedin ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.linkedin.url) {
                throw new Error('Expected url to be present in icon.linkedin');
            }
            done();
        });
        /* linkedin icon */
        it('should have icon google object assign', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.google) {
                throw new Error('Expected icon.google object to be assign');
            }
            done();
        });
        it('should have name assign to icon.google ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.google.name) {
                throw new Error('Expected icon.google should have a name');
            }
            done();
        });
        it('should have to be set active icon.google ', function (done) {
            var userConfig = sm.getConfig();
            if (userConfig.icon.linkedin.google) {
                throw new Error('Expected icon.google not to be active');
            }
            done();
        });
        it('should have to have a url set to active icon.google ', function (done) {
            var userConfig = sm.getConfig();
            if (!userConfig.icon.google.url) {
                throw new Error('Expected url to be present in icon.google');
            }
            done();
        });
    });
    describe('#getConfigElement(elem)', function () {
        it('should get value of defaultTarget', function (done) {
            var userConfig = sm.getConfigElement('defaultTarget');
            if (userConfig !== 'socialMedia') {
                throw new Error('Expected to get socialMedia');
            }
            done();
        });
        it('should get instance object of icon', function (done) {
            var userConfig = sm.getConfigElement('icon');
            if (typeof userConfig !== 'object') {
                throw new Error('Expected icons to be an object');
            }
            done();
        });
    });
});
