"use strict";
var SocialMedia = (function () {
    /**
     * Class constructor
     * Builds default configurations and sets any custom configuration if the parameter is pass
     * @param user
     */
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
                }
            }
        };
        this.userSetup(user);
    }
    /**
     * Merge default config with user config and return only one object config
     * @returns {any}
     */
    SocialMedia.prototype.getConfig = function () {
        var defaultConfig = this.config;
        var user = this.userConfig;
        var allConfig = this.mergeRecursive(defaultConfig, user);
        return allConfig;
    };
    /**
     * Recursivly merge two pbjects into one
     * @param obj1
     * @param obj2
     * @returns {any}
     */
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
    /**
     * Get configuration per section
     * @param elem
     * @returns {any}
     */
    SocialMedia.prototype.getConfigElement = function (elem) {
        var currentConfig = this.getConfig();
        return currentConfig[elem];
    };
    /**
     * Set user configurations
     * @param user
     * @returns {any}
     */
    SocialMedia.prototype.userSetup = function (user) {
        return this.userConfig = user;
    };
    /**
     * Initialise creation of links
     */
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
    /**
     * get a list of active icons and build the anchor
     * @param currentTag
     * @param i
     */
    SocialMedia.prototype.createIcons = function (currentTag, i) {
        var activeIcons = this.getActiveIcons();
        for (var icon in activeIcons) {
            this.createAnchor(currentTag, i, activeIcons[icon].name, activeIcons[icon].url);
        }
    };
    /**
     *  Filter the configuration to get only the active icons
     * @returns {Array}
     */
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
    /**
     * Create an anchor element by passing the target element, index of target element
     * element name (which becomes the class) and element url
     * @param target
     * @param i
     * @param cls
     * @param url
     */
    SocialMedia.prototype.createAnchor = function (target, i, cls, url) {
        var availableTags = document.querySelectorAll('.' + target);
        var elem = document.createElement('a');
        elem.className = 'social-icon icon-' + cls;
        elem.href = url + window.location.href;
        availableTags[i].appendChild(elem);
    };
    return SocialMedia;
}());
exports.SocialMedia = SocialMedia;
