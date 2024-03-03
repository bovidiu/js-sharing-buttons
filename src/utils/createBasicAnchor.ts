import createElement from "./createElement";

/**
 * Generic typing expected
 */
type ICO = {
    class?: string
    id?: string
    fa?: string
    url?: string,
    rel?: string
    text?: string
}
/**
 * Create document element.
 *
 * @param target
 * @param getConfig
 * @param ID
 * @param URL
 */
const basicAnchorShare = function (target:string, getConfig:ICO, ID:string, URL:string) {
    const parent: Element | null = document.querySelector(target);
    const anchor = createElement("a", {
        className: getConfig.class ?? `sm-icon sm--${ID.toLowerCase()}`,
        id: getConfig.id ?? `sm--${ID.toLowerCase()}`,
        rel: getConfig.rel ?? "noindex nofollow",
        href: getConfig.url ?? URL,
        innerHTML: getConfig.text ?? ''
    })
    if (getConfig.fa) {
        const fs = createElement("span", {className: getConfig.fa});
        fs.appendChild(anchor)
    }
    parent?.appendChild(anchor);
};

export default basicAnchorShare;