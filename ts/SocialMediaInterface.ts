export interface SocialMediaInterface{
  /**
   * Store user configurations
   */
  userConfig: any;
  /**
   * Store default configuration
   */
  config: any;
  /**
   * Get all configuration as one single object
   */
  getConfig(): any;
  /**
   * Set the user config globally
   * @param user
   */
  userSetup(user): any;
  /**
   * Merge default config with user config
   * @param obj1
   * @param obj2
   */
  mergeRecursive(obj1, obj2): any;
  /**
   * Get configuration per element
   * @param elem
   */
  getConfigElement(elem): any;
  /**
   * Initialise the icons
   */
  init(): any;
  /**
   * Build icons
   * @param currentTag
   * @param i
   */
  createIcons(currentTag, i): any;
  /**
   * Get active icons
   */
  getActiveIcons(): any;
  /**
   * Create anchors
   * @param target
   * @param i
   * @param cls
   * @param url
   */
  createAnchor(target, i, cls, url): any;

  /**
   * Create anchor
   * @param target
   * @param name
   */
  createFontAwesomeElement(target,name) : any;

  /**
   * Handle click event
   * @param e
   */
  handleDataLoaded(e): any;

}