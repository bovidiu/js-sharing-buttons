import basicAnchorShare from "../../utils/createBasicAnchro";
import getPageURL from "../../utils/pageUrl";
/**
 * Default URL
 */
const URL:string = `http://digg.com/submit?url=${getPageURL()}`;
/**
 * ID for the module
 */
const ID: string = "Digg";
const Digg = (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig: FB = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Digg;