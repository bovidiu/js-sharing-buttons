export interface SocialMediaInterface{
  fb_url : string;
  tw_url: string;
  ln_url: string;
  pi_url: string;
  userConfig: any;
  getFacebookURL(): string;
  getTwitterURL(): string;
  getLinkedInURL(): string;
  getPinterestURL(): string;
  getConfig(): any;
  configureDefault(): any;
  userSetup(user): any;

}