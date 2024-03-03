import getPageTitle from "../../utils/pageTitle";
import getPageURL from "../../utils/pageUrl";
import basicAnchorShare from "../../utils/createBasicAnchor";
/**
 * Default URL
 */
const URL:string = `https://api.whatsapp.com/send?text=${getPageTitle()} ${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "WhatsApp";

/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const WhatsApp = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default WhatsApp;