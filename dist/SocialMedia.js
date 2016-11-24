"use strict";
var SocialMedia = (function () {
    function SocialMedia(user) {
        if (user === void 0) { user = null; }
        this.fb_url = "http://www.facebook.com/sharer.php?u=";
        this.tw_url = "http://twitter.com/share?url=";
        this.ln_url = "http://www.linkedin.com/shareArticle?mini=true&url=";
        this.pi_url = "http://pinterest.com/pin/create/button/?url=";
        this.configureDefault();
        this.userSetup(user);
    }
    SocialMedia.prototype.getFacebookURL = function () {
        return this.fb_url;
    };
    SocialMedia.prototype.getTwitterURL = function () {
        return this.tw_url;
    };
    SocialMedia.prototype.getLinkedInURL = function () {
        return this.ln_url;
    };
    SocialMedia.prototype.getPinterestURL = function () {
        return this.pi_url;
    };
    SocialMedia.prototype.getConfig = function () {
        var defaultConfig = this.config;
        var user = this.userConfig;
        for (var uc in user) {
            if (defaultConfig[uc].length) {
                defaultConfig[uc] = user[uc];
            }
        }
        return defaultConfig;
    };
    SocialMedia.prototype.getConfigElement = function (elem) {
        var currentConfig = this.getConfig();
        if (currentConfig.hasOwnProperty(elem)) {
            return currentConfig[elem];
        }
        console.log('Property: ' + elem + ' can not be found');
    };
    SocialMedia.prototype.configureDefault = function () {
        return this.config = {
            pageURL: window.location.href,
            defaultTarget: 'socialMedia',
            fb_url: true,
            tw_url: true,
            pi_url: false,
            ln_url: false,
        };
    };
    SocialMedia.prototype.userSetup = function (user) {
        return this.userConfig = user;
    };
    SocialMedia.prototype.getListTagsOnPage = function () {
        var currentTag = this.getConfigElement('defaultTarget');
        if (currentTag !== 'undefined') {
            var availableTags = document.querySelectorAll('.' + currentTag);
            console.log(availableTags.length);
            if (availableTags.length) {
                for (var i = 0; i < availableTags.length; i++) {
                    this.createAnchor(currentTag);
                }
            }
        }
    };
    SocialMedia.prototype.createAnchor = function (target) {
        var availableTags = document.querySelectorAll('.' + target);
        var elem = document.createElement('a');
        elem.className = 'social-icon';
        elem.innerText = 'Social Media Buttons';
        elem.href = '//google.com';
        availableTags[0].appendChild(elem);
    };
    return SocialMedia;
}());
var cm = new SocialMedia();
console.log(cm.getListTagsOnPage());
