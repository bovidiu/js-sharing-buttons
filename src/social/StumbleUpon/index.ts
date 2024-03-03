import basicAnchorShare from "../../utils/createBasicAnchor";
import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";

/**
 * Default URL
 */
const URL:string = `https://www.stumbleupon.com/submit?url=${getPageURL()}&title=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "StumbleUpon";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const StumbleUpon = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default StumbleUpon;