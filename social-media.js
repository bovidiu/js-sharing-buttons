/*
Thank you!
https://github.com/bovidiu/js-sharing-bootstrap/
*/
var SocialMedia = SocialMedia || {};
var pageURL='';
var attachedParent = '.socialMedia';
var subject = encodeURI('Lorem Ipsum');
var message = encodeURI('dolor sit amet, consectetur adipiscing elit. Integer tempor vehicula tristique');

SocialMedia.set={

    FacebookLink:function(){
        return 'http://www.facebook.com/sharer.php?u=';
    },
    TwitterLink:function(){
        return 'http://twitter.com/share?url=';
    },
    LinkedInLink:function(){
        return 'http://www.linkedin.com/shareArticle?mini=true&url=';
    },
    EmailLink:function(subject,body){
        return 'mailto:?Subject='+subject+'&Body='+body;
    },
    FacebookIconSquareBootstrap:function(){
        return '<i class="fa fa-facebook-square"></i>';
    },
    TwitterIconSquareBootstrap:function(){
        return '<i class="fa fa-twitter-square"></i>';
    },
    LinkedInIconSquareBootstrap:function(){
        return '<i class="fa fa-linkedin-square"></i>';
    },
    MailIconSquareBootstrap:function(){
        return '<i class="fa fa-envelope-square"></i>';
    },
    ATag:function(cls,txt, hrf,arg){

        return $('<a/>', {
            class: cls,
            href:hrf,
        }).html(txt).appendTo(arg);
    },
    PageURL:function(){
        return document.URL;
    }
}
SocialMedia.get={

    FacebookLink:function(){
        return SocialMedia.set.FacebookLink();
    },
    TwitterLink:function(){
        return SocialMedia.set.TwitterLink();
    },
    LinkedInLink:function(){
        return SocialMedia.set.LinkedInLink();

    },
    EmailLink:function(subject,body) {
        return SocialMedia.set.EmailLink(subject, body);
    },
    IconFacebook:function(){
        return SocialMedia.set.FacebookIconSquareBootstrap();
    },
    IconTwitter:function(){
        return SocialMedia.set.TwitterIconSquareBootstrap();
    },
    IconLinkedIn:function(){
        return SocialMedia.set.LinkedInIconSquareBootstrap();
    },
    IconMail:function(){
        return SocialMedia.set.MailIconSquareBootstrap();
    },
    ATag:function(cls,txt, hrf,arg){
        return SocialMedia.set.ATag(cls,txt, hrf,arg);
    },
    PageURL:function(){
        return SocialMedia.set.PageURL();
    }
}
SocialMedia.run={
    makePageURL:function(){
        pageURL = SocialMedia.get.PageURL();
    },
    makeURL:function(social,url){
        return social+url;
    },
    makeFacebookLink:function(){
        var makeALink = SocialMedia.run.makeURL(SocialMedia.get.FacebookLink(),pageURL);
        SocialMedia.get.ATag('facebook-icon',SocialMedia.get.IconFacebook(),makeALink,attachedParent);
    },
    makeTwitterLink:function(){
        var makeALink = SocialMedia.run.makeURL(SocialMedia.get.TwitterLink(),pageURL);
        SocialMedia.get.ATag('twitter-icon',SocialMedia.get.IconTwitter(),makeALink,attachedParent);
    },
    makeLinkedInLink:function(){
        var makeALink = SocialMedia.run.makeURL(SocialMedia.get.LinkedInLink(),pageURL);
        SocialMedia.get.ATag('linkedin-icon',SocialMedia.get.IconLinkedIn(),makeALink,attachedParent);
    },
    makeMailLink:function(){
        var makeALink = SocialMedia.run.makeURL(SocialMedia.get.EmailLink(subject,message),pageURL);
        SocialMedia.get.ATag('mail-icon',SocialMedia.get.IconMail(),makeALink,attachedParent);
    },
    init:function(){
        SocialMedia.run.makePageURL();
        SocialMedia.run.makeFacebookLink();
        SocialMedia.run.makeTwitterLink();
        SocialMedia.run.makeLinkedInLink();
        SocialMedia.run.makeMailLink();
    }
}

SocialMedia.run.init();
