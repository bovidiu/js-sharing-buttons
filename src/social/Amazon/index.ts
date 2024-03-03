import basicAnchorShare from "../../utils/createBasicAnchor";
import getPageURL from "../../utils/pageUrl";
/**
 * Default URL
 */
const URL:string = `https://www.amazon.com/gp/wishlist/static-add?u=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Amazon";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Amazon =  (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Amazon;