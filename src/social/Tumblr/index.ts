import getPageTitle from "../../utils/pageTitle";
import getPageURL from "../../utils/pageUrl";
import getPageDescription from "../../utils/pageDescription";
import basicAnchorShare from "../../utils/createBasicAnchor";
/**
 * Default URL
 */
const URL:string = `https://www.tumblr.com/share/link?url=${getPageURL()}&name=${getPageTitle()}&description=${getPageDescription()}`;
/**
 * ID for the module
 */
const ID: string = "Tumblr";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Tumblr = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Tumblr;