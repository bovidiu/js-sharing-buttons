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
      console.log(iconList);
      for (var key in iconList) {
        var path    = SocialMedia.config.setupData();
        var url     = iconList[key].url + path.pageURL;
        SocialMedia.config.makeAnchor(iconList[key].fawesome.standard, '', url);
      }
    },
    getSpecificIcons: function(icon){
      var iconList = SocialMedia.icons.list();
          var path    = SocialMedia.config.setupData();
           var url     = iconList[icon].url + path.pageURL;
          SocialMedia.config.makeAnchor(iconList[icon].fawesome.standard, '', url);

    }
  };

  //check for dataset on div
  var elem =  document.getElementsByClassName('socialMedia');
  for(var i = 0; i < elem.length; i++){
    if(elem[i].hasAttribute('data-sm-icon')){
       var iconType = elem[i].dataset.smIcon.split(',');
      //console.log(iconType)

     for(var x = 0; x < iconType.length; x++){
       console.log(iconType[x])
     }

     /* if(iconType[0] !== 'undefined') {
        elem[i].innerHTML += buildLink(iconType[0]);
      }
      if(iconType[1] !== 'undefined') {
        elem[i].innerHTML += buildLink(iconType[1]);
      }*/
         /*if(iconType[1]){
        elem[i].innerHTML = iconType[1];}*/
        //SocialMedia.config.getSpecificIcons(iconType[icn]);
        /*if (iconList.hasOwnProperty(icon[icn])){
         var path    = SocialMedia.config.setupData();
         var url     = iconList[icon[icn]].url + path.pageURL;
         SocialMedia.config.makeAnchor(iconList[icon[icn]].fawesome.standard, '', url);
         }*/
    }
  /*  else {
       SocialMedia.config.getAllElemets();
    } */
  }

  function buildLink(target){
    var iconList = SocialMedia.icons.list();
    var path    = SocialMedia.config.setupData();
    var url     = iconList[target].url + path.pageURL;
    SocialMedia.config.makeAnchor(iconList[target].fawesome.standard, '', url);
  }
})();
