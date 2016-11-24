import { SocialMediaInterface } from './SocialMediaInterface';
interface HTMLElement {
  dataset: DOMStringMap;
  hidden: boolean;
  msGetInputContext(): MSInputMethodContext;
}
class SocialMedia implements SocialMediaInterface {
  fb_url: string;
  tw_url: string;
  ln_url: string;
  pi_url: string;
  config: any;
  userConfig: any;

  constructor(user=null) {
    this.fb_url = "http://www.facebook.com/sharer.php?u=";
    this.tw_url = "http://twitter.com/share?url=";
    this.ln_url = "http://www.linkedin.com/shareArticle?mini=true&url=";
    this.pi_url = "http://pinterest.com/pin/create/button/?url=";
    this.configureDefault();
    this.userSetup(user);
  }

  /**
   * get Facebook URL
   * @returns {string}
   */
  getFacebookURL(): string {
    return this.fb_url;
  }

  /**
   * get Twitter URL
   * @returns {string}
   */
  getTwitterURL(): string {
    return this.tw_url;
  }

  /**
   * get LinkedIn URL
   * @returns {string}
   */
  getLinkedInURL(): string {
    return this.ln_url;
  }

  /**
   * get Pinterest URL
   * @returns {string}
   */
  getPinterestURL(): string {
    return this.pi_url;
  }

  /**
   * get Config
   * @returns {any}
   */
  getConfig(): any {
    let defaultConfig = this.config;
    let user = this.userConfig;
    for(let uc in user){
       if(defaultConfig[uc].length){
         defaultConfig[uc] = user[uc];
       }
    }
    return defaultConfig;
  }
  getConfigElement(elem): any{
    let currentConfig = this.getConfig();

    if(currentConfig.hasOwnProperty(elem)){
      return currentConfig[elem];
    }
    console.log('Property: ' + elem + ' can not be found');

  }

  /**
   * Set default config in {}
   * @returns {{pageURL: string, defaultTarget: string}}
   */
  configureDefault(): any {
    return this.config = {
      pageURL: window.location.href,
      defaultTarget: 'socialMedia',
      fb_url: true,
      tw_url: true,
      pi_url: false,
      ln_url: false,
    };
  }

  /**
   * Set user configurations
   * @param user
   * @returns {any}
   */
  userSetup(user): any{
    return this.userConfig = user;
  }

  getListTagsOnPage(): any {
    let currentTag = this.getConfigElement('defaultTarget');
    if (currentTag !== 'undefined') {
      let availableTags = document.querySelectorAll('.' + currentTag);
      console.log(availableTags.length);
      if (availableTags.length) {
        for (let i = 0; i < availableTags.length; i++) {
          this.createAnchor(currentTag);
        }
        /*for(let at in availableTags){
         let elemConfig =availableTags[at];
         if(elemConfig){
         console.log(availableTags[at]);
         }else{
         console.log('no set')
         }
         }*/
      }
    }
  }
  createAnchor(target){
    let availableTags = document.querySelectorAll('.' + target);
   let elem = document.createElement('a');
    elem.className = 'social-icon';
    elem.innerText = 'Social Media Buttons';
    elem.href = '//google.com';
    availableTags[0].appendChild(elem);
  }

}


let cm = new SocialMedia();

console.log(cm.getListTagsOnPage()) ;