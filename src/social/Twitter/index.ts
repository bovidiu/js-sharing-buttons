import basicAnchorShare from "../../utils/createBasicAnchor";
import getPageURL from "../../utils/pageUrl";
/**
 * Default URL
 */
const URL:string =  `https://twitter.com/intent/tweet?text=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Twitter";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Twitter = (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig: FB = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Twitter;