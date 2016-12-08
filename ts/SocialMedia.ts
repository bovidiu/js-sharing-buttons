import { SocialMediaInterface } from "./SocialMediaInterface";
export class SocialMedia implements SocialMediaInterface {
  config: any;
  userConfig: any;

  /**
   * Class constructor
   * Builds default configurations and sets any custom configuration if the parameter is pass
   * @param user
   */
  constructor(user = null) {
    this.config = {
      defaultTarget : 'socialMedia',
      popup : false,
      fontawesome: false,
      icon : {
        facebook : {
          name : 'facebook',
          class : '',
          fonta: 'fa fa-facebook-official',
          id : '',
          active : true,
          url : 'http://www.facebook.com/sharer.php?u=',
          app : {
            id : '',
            redirect_uri : '',
            url : 'https://www.facebook.com/dialog/share'
          }
        },
        twitter : {
          name : 'twitter',
          class : '',
          fonta: 'fa fa-twitter',
          id : '',
          active : true,
          url : 'http://twitter.com/share?url='
        },
        pinterest : {
          name : 'pinterest',
          class : '',
          fonta: 'fa fa-pinterest',
          id : '',
          active : false,
          url : 'http://pinterest.com/pin/create/button/?url='
        },
        linkedin : {
          name : 'linkedin',
          fonta: 'fa fa-linkedin-square',
          class : '',
          id : '',
          active : false,
          url : 'http://www.linkedin.com/shareArticle?mini=true&url='
        },
        google : {
          name : 'google',
          fonta: 'fa fa-google-plus-official',
          class : '',
          id : '',
          active : false,
          url : 'https://plus.google.com/share?url='
        },
        digg : {
          name : 'digg',
          class : '',
          fonta: 'fa fa-digg',
          id : '',
          active : false,
          url : 'http://digg.com/submit?url='
        },
        Tumblr : {
          name : 'tumblr',
          class : '',
          fonta: 'fa fa-tumblr',
          id : '',
          active : false,
          url : 'https://www.tumblr.com/share?v=3&u='
        },
        Reddit : {
          name : 'reddit',
          class : '',
          fonta: 'fa fa-reddit',
          id : '',
          active : false,
          url : 'http://www.reddit.com/submit?url='
        },
        VKontakte : {
          name : 'vkontakte',
          class : '',
          id : '',
          active : false,
          url : 'http://vk.com/share.php?url='
        },
        Delicious : {
          name : 'delicious',
          class : '',
          fonta: 'fa fa-delicious',
          id : '',
          active : false,
          url : 'https://delicious.com/post?url='
        },
        GMail : {
          name : 'gmail',
          class : '',
          fonta: 'fa fa-envelope',
          id : '',
          active : false,
          url : 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to&ui=2&tf=1&body='
        },
        Blogger : {
          name : 'blogger',
          class : '',
          id : '',
          active : false,
          url : 'https://www.blogger.com/blog_this.pyra?t&u='
        },
        Amazon : {
          name : 'amazon',
          class : '',
          fonta: 'fa fa-amazon',
          id : '',
          active : false,
          url : 'http://www.amazon.com/gp/wishlist/static-add?u='
        },
        Bitly : {
          name : 'bitly',
          class : '',
          id : '',
          active : false,
          url : 'https://bitly.com/a/bitmarklet?u='
        },
      }
    };
    this.userSetup(user);
  }

  /**
   * Merge default config with user config and return only one object config
   * @returns {any}
   */
  getConfig(): any {
    let defaultConfig = this.config;
    let user          = this.userConfig;
    let allConfig     = this.mergeRecursive(defaultConfig, user);
    return allConfig;
  }

  /**
   * Recursivly merge two pbjects into one
   * @param obj1
   * @param obj2
   * @returns {any}
   */
  mergeRecursive(obj1, obj2): any {
    for (var p in obj2) {
      try {
        if (obj2[p].constructor == Object) {
          obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch (e) {
        obj1[p] = obj2[p];
      }
    }
    return obj1;
  }

  /**
   * Get configuration per section
   * @param elem
   * @returns {any}
   */
  getConfigElement(elem): any {
    let currentConfig = this.getConfig();
    return currentConfig[elem];
  }

  /**
   * Set user configurations
   * @param user
   * @returns {any}
   */
  userSetup(user): any {
    return this.userConfig = user;
  }

  /**
   * Initialise creation of links
   */
  init(): any {
    let currentTag = this.getConfigElement('defaultTarget');
    if (currentTag !== 'undefined') {
      let availableTags = document.querySelectorAll('.' + currentTag);
      if (availableTags.length) {
        for (let i = 0; i < availableTags.length; i++) {
          this.createIcons(currentTag, i)
        }
      }
    }
  }

  /**
   * get a list of active icons and build the anchor
   * @param currentTag
   * @param i
   */
  createIcons(currentTag, i): any {
    let activeIcons = this.getActiveIcons();
    for (let icon in activeIcons) {
      this.createAnchor(currentTag, i, activeIcons[icon].name, activeIcons[icon].url);
    }
  }

  /**
   *  Filter the configuration to get only the active icons
   * @returns {Array}
   */
  getActiveIcons(): any {
    let availabeTypes = this.getConfig();
    let results       = [];
    for (let i in availabeTypes.icon) {
      if (availabeTypes.icon[i].active) {
        results.push(availabeTypes.icon[i]);
      }
    }
    return results;
  }

  /**
   * Create an anchor element by passing the target element, index of target element
   * element name (which becomes the class) and element url
   * @param target
   * @param i
   * @param cls
   * @param url
   */
  createAnchor(target, i, cls, url): any {
    let availableTags = document.querySelectorAll('.' + target);
    let elem          = document.createElement('a');
    elem.className = 'social-icon smi icon-' + cls;
    elem.href         = url + window.location.href;
    // Click popup window
    if(this.getConfigElement('popup')){
      elem.onclick = this.handleDataLoaded.bind(this);
    }
    //add fontawesome element if FA is activated
    if(this.getConfigElement('fontawesome')){
      this.createFontAwesomeElement(elem,cls);
    }
    availableTags[i].appendChild(elem);
  }

  /**
   * Append anchor font-awesome icon
   * @param target
   * @param name
   * @returns {Node}
   */
  createFontAwesomeElement(target,name): any{
      let ielem = document.createElement('i');
      let iCls = this.getConfigElement('icon');
      ielem.className = iCls[name].fonta;
     return target.appendChild(ielem);
  }

  /**
   * Handle click event
   * @param e
   */
  handleDataLoaded(e){
    e.preventDefault();
    this._popup(e.srcElement.parentNode.href);
  }

  /**
   * Create popup window
   * @param path
   * @returns {Window}
   * @private
   */
  private _popup(path): any {
    let width = window.innerWidth/16;
    let height = window.innerHeight/9;
    if(width < 300 && height < 100){
      width = 320;
      height = 300;
    }
    return window.open(path,'Social Media Sharing Window',"height="+height+",width="+width+"");
  }
}