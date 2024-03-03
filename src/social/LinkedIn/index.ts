import basicAnchorShare from "../../utils/createBasicAnchro";
import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";
/**
 * Default URL
 */
const URL:string = `https://www.linkedin.com/shareArticle?mini=true&url=${getPageURL()}&title=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "LinkedIn";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const LinkedIn = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default LinkedIn;