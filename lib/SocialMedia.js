/**
 * Author: Ovidiu S Bokar <ovidiu.bokar@gmail.com
 * Licence: MIT
 * Version: 2.0
 */
"use strict";
var SocialMedia = (function () {
    function SocialMedia(user) {
        if (user === void 0) { user = null; }
        this.config = {
            defaultTarget: 'socialMedia',
            popup: false,
            fontawesome: false,
            icon: {
                facebook: {
                    name: 'facebook',
                    class: '',
                    fonta: 'fa fa-facebook-official',
                    id: '',
                    active: true,
                    url: 'http://www.facebook.com/sharer.php?u=',
                    app: {
                        id: '',
                        redirect_uri: '',
                        url: 'https://www.facebook.com/dialog/share'
                    }
                },
                twitter: {
                    name: 'twitter',
                    class: '',
                    fonta: 'fa fa-twitter',
                    id: '',
                    active: true,
                    url: 'http://twitter.com/share?url='
                },
                pinterest: {
                    name: 'pinterest',
                    class: '',
                    fonta: 'fa fa-pinterest',
                    id: '',
                    active: false,
                    url: 'http://pinterest.com/pin/create/button/?url='
                },
                linkedin: {
                    name: 'linkedin',
                    fonta: 'fa fa-linkedin-square',
                    class: '',
                    id: '',
                    active: false,
                    url: 'http://www.linkedin.com/shareArticle?mini=true&url='
                },
                google: {
                    name: 'google',
                    fonta: 'fa fa-google-plus-official',
                    class: '',
                    id: '',
                    active: false,
                    url: 'https://plus.google.com/share?url='
                },
                digg: {
                    name: 'digg',
                    class: '',
                    fonta: 'fa fa-digg',
                    id: '',
                    active: false,
                    url: 'http://digg.com/submit?url='
                },
                Tumblr: {
                    name: 'tumblr',
                    class: '',
                    fonta: 'fa fa-tumblr',
                    id: '',
                    active: false,
                    url: 'https://www.tumblr.com/share?v=3&u='
                },
                Reddit: {
                    name: 'reddit',
                    class: '',
                    fonta: 'fa fa-reddit',
                    id: '',
                    active: false,
                    url: 'http://www.reddit.com/submit?url='
                },
                VKontakte: {
                    name: 'vkontakte',
                    class: '',
                    id: '',
                    active: false,
                    url: 'http://vk.com/share.php?url='
                },
                Delicious: {
                    name: 'delicious',
                    class: '',
                    fonta: 'fa fa-delicious',
                    id: '',
                    active: false,
                    url: 'https://delicious.com/post?url='
                },
                GMail: {
                    name: 'gmail',
                    class: '',
                    fonta: 'fa fa-envelope',
                    id: '',
                    active: false,
                    url: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to&ui=2&tf=1&body='
                },
                Blogger: {
                    name: 'blogger',
                    class: '',
                    id: '',
                    active: false,
                    url: 'https://www.blogger.com/blog_this.pyra?t&u='
                },
                Amazon: {
                    name: 'amazon',
                    class: '',
                    fonta: 'fa fa-amazon',
                    id: '',
                    active: false,
                    url: 'http://www.amazon.com/gp/wishlist/static-add?u='
                },
                Bitly: {
                    name: 'bitly',
                    class: '',
                    id: '',
                    active: false,
                    url: 'https://bitly.com/a/bitmarklet?u='
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
        elem.className = 'social-icon smi icon-' + cls;
        elem.href = url + window.location.href;
        if (this.getConfigElement('popup')) {
            elem.onclick = this.handleDataLoaded.bind(this);
        }
        if (this.getConfigElement('fontawesome')) {
            this.createFontAwesomeElement(elem, cls);
        }
        availableTags[i].appendChild(elem);
    };
    SocialMedia.prototype.createFontAwesomeElement = function (target, name) {
        var ielem = document.createElement('i');
        var iCls = this.getConfigElement('icon');
        ielem.className = iCls[name].fonta;
        return target.appendChild(ielem);
    };
    SocialMedia.prototype.handleDataLoaded = function (e) {
        e.preventDefault();
        this._popup(e.srcElement.parentNode.href);
    };
    SocialMedia.prototype._popup = function (path) {
        var width = window.innerWidth / 16;
        var height = window.innerHeight / 9;
        if (width < 300 && height < 100) {
            width = 320;
            height = 300;
        }
        return window.open(path, 'Social Media Sharing Window', "height=" + height + ",width=" + width + "");
    };
    return SocialMedia;
}());
exports.SocialMedia = SocialMedia;
//# sourceMappingURL=SocialMedia.js.map