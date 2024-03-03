import getPageURL from "../../utils/pageUrl";
import basicAnchorShare from "../../utils/createBasicAnchro";
import getPageTitle from "../../utils/pageTitle";

/**
 * Default URL
 */
const URL:string = `https://bufferapp.com/add?text=${getPageTitle()}&url=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Buffer";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Buffer =  (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)

}
export default Buffer;