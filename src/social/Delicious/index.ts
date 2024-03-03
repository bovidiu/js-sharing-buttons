import basicAnchorShare from "../../utils/createBasicAnchor";
import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";
/**
 * Default URL
 */
const URL:string = `https://delicious.com/save?v=5&provider=viaSocialMedia&noui&jump=close&url=${getPageURL()}&title=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "Delicious";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Delicious = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Delicious;