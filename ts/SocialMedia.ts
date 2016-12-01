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
      icon : {
        facebook : {
          name: 'facebook',
          class : '',
          id : '',
          active : true,
          url : 'http://www.facebook.com/sharer.php?u=',
          app: {
            id : '',
            redirect_uri : '',
            url: 'https://www.facebook.com/dialog/share'
          }
        },
        twitter : {
          name: 'twitter',
          active : true,
          url : 'http://twitter.com/share?url='
        },
        pinterest : {
          name: 'pinterest',
          active : false,
          url : 'http://pinterest.com/pin/create/button/?url='
        },
        linkedin : {
          name: 'linkedin',
          active : false,
          url : 'http://www.linkedin.com/shareArticle?mini=true&url='
        },
        google : {
          name: 'google',
          active : false,
          url : 'https://plus.google.com/share?url='
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
    let currentTag    = this.getConfigElement('defaultTarget');
    if (currentTag !== 'undefined') {
      let availableTags = document.querySelectorAll('.' + currentTag);
      if (availableTags.length) {
        for (let i = 0; i < availableTags.length; i++) {
          this.createIcons(currentTag,i)
        }
      }
    }
  }

  /**
   * get a list of active icons and build the anchor
   * @param currentTag
   * @param i
   */
  createIcons(currentTag, i): any{
    let activeIcons = this.getActiveIcons();
    for(let icon in activeIcons){
      this.createAnchor(currentTag, i,activeIcons[icon].name,activeIcons[icon].url);
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
    elem.className    = 'social-icon icon-'+cls;
    elem.href         = url + window.location.href;
    availableTags[i].appendChild(elem);
  }

}