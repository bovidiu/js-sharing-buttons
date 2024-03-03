import socialCall from "./social/index";
/**
 * Setup default config.
 */
let defaultConfig:defaultConfig = {
    placeholder:".socialMedia",
    version:"[VERSION]",
    icon:{}
};

/**
 * Initializing custom config.
 *
 * @param config
 */
const display = (config:defaultConfig) =>{
    let customConfig:defaultConfig = {...defaultConfig, ...config};
    if(Object.keys(customConfig).length){
        socialCall(customConfig);
    }
}
/**
 * Default exposure to browser.
 */
export default window.SocialMedia={
    defaultConfig,
    display
}

