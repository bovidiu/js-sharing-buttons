import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";
import basicAnchorShare from "../../utils/createBasicAnchor";
/**
 * Default URL
 */
const URL:string = `https://reddit.com/submit?url=${getPageURL()}&title=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "Reddit";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Reddit = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Reddit;