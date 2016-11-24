"use strict";
var SocialMedia = (function () {
    function SocialMedia(user) {
        if (user === void 0) { user = null; }
        this.config = {
            defaultTarget: 'socialMedia',
            icon: {
                facebook: {
                    name: 'facebook',
                    active: true,
                    url: 'http://www.facebook.com/sharer.php?u='
                },
                twitter: {
                    name: 'twitter',
                    active: false,
                    url: 'http://twitter.com/share?url='
                },
                pinterest: {
                    name: 'pinterest',
                    active: false,
                    url: 'http://www.linkedin.com/shareArticle?mini=true&url='
                },
                linkedin: {
                    name: 'linkedin',
                    active: false,
                    url: 'http://pinterest.com/pin/create/button/?url='
                },
            }
        };
        this.userSetup(user);
    }
    SocialMedia.prototype.getConfig = function () {
        var defaultConfig = this.config;
        var user = this.userConfig;
        var allConfig = this.mergeRecursive(defaultConfig, user);
        return allConfig;
    };
    SocialMedia.prototype.mergeRecursive = function (obj1, obj2) {
        for (var p in obj2) {
            try {
                if (obj2[p].constructor == Object) {
                    obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);
                }
                else {
                    obj1[p] = obj2[p];
                }
            }
            catch (e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    };
    SocialMedia.prototype.getConfigElement = function (elem) {
        var currentConfig = this.getConfig();
        return currentConfig[elem];
    };
    SocialMedia.prototype.userSetup = function (user) {
        return this.userConfig = user;
    };
    SocialMedia.prototype.init = function () {
        var currentTag = this.getConfigElement('defaultTarget');
        if (currentTag !== 'undefined') {
            var availableTags = document.querySelectorAll('.' + currentTag);
            if (availableTags.length) {
                for (var i = 0; i < availableTags.length; i++) {
                    this.createIcons(currentTag, i);
                }
            }
        }
    };
    SocialMedia.prototype.createIcons = function (currentTag, i) {
        var activeIcons = this.getActiveIcons();
        for (var icon in activeIcons) {
            this.createAnchor(currentTag, i, activeIcons[icon].name, activeIcons[icon].url);
        }
    };
    SocialMedia.prototype.getActiveIcons = function () {
        var availabeTypes = this.getConfig();
        var results = [];
        for (var i in availabeTypes.icon) {
            if (availabeTypes.icon[i].active) {
                results.push(availabeTypes.icon[i]);
            }
        }
        return results;
    };
    SocialMedia.prototype.createAnchor = function (target, i, cls, url) {
        var availableTags = document.querySelectorAll('.' + target);
        var elem = document.createElement('a');
        elem.className = 'social-icon icon-' + cls;
        elem.href = url + window.location.href;
        availableTags[i].appendChild(elem);
    };
    return SocialMedia;
}());
window.SocialMedia = SocialMedia;
