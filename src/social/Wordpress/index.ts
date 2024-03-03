import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";
import basicAnchorShare from "../../utils/createBasicAnchor";
/**
 * Default URL
 */
const URL:string = `https://www.evernote.com/clip.action?url=${getPageURL()}&title=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "Wordpress";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */

const Wordpress = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Wordpress;