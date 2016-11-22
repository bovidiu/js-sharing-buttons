"use strict";
var SocialMedia = (function () {
    function SocialMedia() {
        this.fb_url = "http://www.facebook.com/sharer.php?u=";
        this.tw_url = "http://twitter.com/share?url=";
        this.ln_url = "http://www.linkedin.com/shareArticle?mini=true&url=";
        this.pi_url = "http://pinterest.com/pin/create/button/?url=";
        this.configureDefault();
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
        return this.config;
    };
    SocialMedia.prototype.configureDefault = function () {
        return this.config = {
            pageURL: window.location.href,
            defaultTarget: 'socialMedia'
        };
    };
    return SocialMedia;
}());
var cm = new SocialMedia();
console.log(cm.getConfig());
