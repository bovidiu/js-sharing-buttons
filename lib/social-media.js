(function () {
  var SocialMedia   = SocialMedia || {};
  SocialMedia.icons = {
    list: function () {
      var ic = {
        facebook: {
          name: 'facebook',
          url: 'http://www.facebook.com/sharer.php?u=',
          fawesome: {
            official: 'fa fa-facebook-official',
            standard: 'fa fa-facebook',
            square: 'fa fa-facebook-square'
          }
        },
        twitter: {
          name: 'twitter',
          url: 'http://twitter.com/share?url=',
          fawesome: {
            standard: 'fa fa-twitter',
            square: 'fa fa-twitter-square'
          }
        },
        linkedin: {
          name: 'linkedin',
          url: 'http://www.linkedin.com/shareArticle?mini=true&url=',
          fawesome: {
            standard: 'fa fa-linkedin',
            square: 'fa fa-linkedin-square'
          }
        },
        pinterest: {
          name: 'pinterest',
          url: 'http://pinterest.com/pin/create/button/?url=',
          fawesome: {
            official: 'fa fa-pinterest-p',
            standard: 'fa fa-pinterest',
            square: 'fa fa-pinterest-square'
          }
        }
      };
      return ic;
    },
    build: function (cls) {
      return '<i class="' + cls + '"></i>';
    }
  };

  SocialMedia.config = {
    setupData: function () {
      var dt = {
        pageURL: window.location.href,
        defaultElement: 'socialMedia'
      };
      return dt;
    },
    init: function () {
      if (arguments.length && typeof arguments === "object") {
        console.log(arguments);
      }
    },
    makeAnchor: function (cls, txt, hrf) {
      var selector = SocialMedia.config.setupData();
      for (var i = 0; i < document.getElementsByClassName(selector.defaultElement).length; i++) {
        var anchorLink = document.createElement('a');
        var anchorText = document.getElementsByClassName(selector.defaultElement)[i];
        var icon       = document.createTextNode(txt);
        anchorLink.setAttribute('class', cls);
        anchorLink.setAttribute('href', hrf);
        anchorText.appendChild(anchorLink);
        anchorLink.appendChild(icon);
      }

    },
    getAllElemets: function () {
      var iconList = SocialMedia.icons.list();
      for (var key in iconList) {
        var iconTag = SocialMedia.icons.build(iconList[key].fawesome.standard);
        var path    = SocialMedia.config.setupData();
        var url     = iconList[key].url + path.pageURL;
        SocialMedia.config.makeAnchor(iconList[key].fawesome.standard, iconTag, url);
      }
    }
  };
  SocialMedia.config.getAllElemets();
})();