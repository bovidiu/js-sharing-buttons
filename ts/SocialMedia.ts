import { SocialMediaInterface } from './SocialMediaInterface';
class SocialMedia implements SocialMediaInterface {
  fb_url: string;
  tw_url: string;
  ln_url: string;
  pi_url: string;
  config: any;

  constructor() {
    this.fb_url = "http://www.facebook.com/sharer.php?u=";
    this.tw_url = "http://twitter.com/share?url=";
    this.ln_url = "http://www.linkedin.com/shareArticle?mini=true&url=";
    this.pi_url = "http://pinterest.com/pin/create/button/?url=";
    this.configureDefault();
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
  getConfig(): any{
    return this.config;
  }

  /**
   * Set default config in {}
   * @returns {{pageURL: string, defaultTarget: string}}
   */
  configureDefault(): any {
    return this.config = {
      pageURL: window.location.href,
      defaultTarget: 'socialMedia'
    };
  }
}


let cm = new SocialMedia();

console.log(cm.getConfig()) ;