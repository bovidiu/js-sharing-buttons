import createElement from "../../utils/createElement";
import pageUrl from "../../utils/pageUrl";

/**
 * Default URL
 */
const URL: string = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl()}`;
/**
 * ID for the module
 */
const ID: string = "Facebook";
/**
 * Default types for icon config
 */
type FB = {
    class?: string
    id?: string
    fa?: string
    url?: string,
    rel?: string
}
/**
 * Create placeholders based on config
 * @param config
 * @constructor
 */
const Facebook = (config: defaultConfig):void => {
    // @ts-ignore
    const getConfig: FB = config.icon[ID];
    const parent: Element | null = document.querySelector(config.placeholder);
    const anchor = createElement("a", {
        className: getConfig.class ?? `sm-icon sm--${ID.toLowerCase()}`,
        id: getConfig.id ?? `sm--${ID.toLowerCase()}`,
        rel: getConfig.rel ?? "noindex nofollow",
        href: getConfig.url ?? URL
    })
    if (getConfig.fa) {
        const fs = createElement("span", {className: getConfig.fa});
        fs.appendChild(anchor)
    }
    parent?.appendChild(anchor);
}
export default Facebook;