import socialCall from "./social/index";
/**
 * Setup default config.
 */
let defaultConfig:defaultConfig = {
    placeholder:".socialMedia",
    icon:{}
};

const display = (config:defaultConfig) =>{
    let customConfig:defaultConfig = {...defaultConfig, ...config};
    if(Object.keys(customConfig).length){
        socialCall(customConfig);
    }
}

export default window.SocialMedia={
    defaultConfig,
    display
}

