import basicAnchorShare from "../../utils/createBasicAnchro";
import getPageURL from "../../utils/pageUrl";

const URL:string = `https://www.blogger.com/blog_this.pyra?t&u=${getPageURL()}`;

/**
 * ID for the module
 */
const ID: string = "Blogger";
/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Blogger = (config: defaultConfig):void =>  {
    // @ts-ignore
    const getConfig = config.icon[ID];
    basicAnchorShare(config.placeholder, getConfig, ID, URL)
}
export default Blogger;