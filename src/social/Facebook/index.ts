import getPageURL from "../../utils/pageUrl";
import basicAnchorShare from "../../utils/createBasicAnchor";

/**
 * Default URL
 */
const URL: string = `https://www.facebook.com/sharer/sharer.php?u=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Facebook";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Facebook = (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig: FB = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Facebook;