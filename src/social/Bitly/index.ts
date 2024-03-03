import getPageURL from "../../utils/pageUrl";
import basicAnchorShare from "../../utils/createBasicAnchor";
/**
 * Default URL
 */
const URL:string = `https://bitly.com/a/bitmarklet?u=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Bitly";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Bitly =  (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig: BIT = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Bitly;