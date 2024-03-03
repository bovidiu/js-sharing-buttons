import getPageURL from "../../utils/pageUrl";
import getPageTitle from "../../utils/pageTitle";
import basicAnchorShare from "../../utils/createBasicAnchro";
/**
 * Default URL
 */
const URL:string = `https://t.me/share/url?url=${getPageURL()}&text=${getPageTitle()}`;
/**
 * ID for the module
 */
const ID: string = "Telegram";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Telegram = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Telegram;