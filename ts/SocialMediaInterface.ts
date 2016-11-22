export interface SocialMediaInterface{
  fb_url : string;
  tw_url: string;
  ln_url: string;
  pi_url: string;
  getFacebookURL(): string;
  getTwitterURL(): string;
  getLinkedInURL(): string;
  getPinterestURL(): string;
  getConfig(): any;
  configureDefault(): any;

}