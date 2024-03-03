import Amazon from "./Amazon";
import WhatsApp from "./WhatsApp";
import Bitly from "./Bitly";
import Blogger from "./Blogger";
import Buffer from "./Buffer";
import Delicious from "./Delicious";
import Digg from "./Digg";
import Email from "./Email";
import Evernote from "./Evernote";
import Facebook from "./Facebook";
import GMail from "./GMail";
import LinkedIn from "./LinkedIn";
import Pinterest from "./Pinterest";
import Pocket from "./Pocket";
import Reddit from "./Reddit";
import StumbleUpon from "./StumbleUpon";
import Telegram from "./Telegram";
import Tumblr from "./Tumblr";
import Twitter from "./Twitter";
import Wordpress from "./Wordpress";

const social:defaultIcons = {
    Amazon,
    Bitly,
    Blogger,
    Buffer,
    Delicious,
    Digg,
    Email,
    Evernote,
    Facebook,
    GMail,
    LinkedIn,
    Pinterest,
    Pocket,
    Reddit,
    StumbleUpon,
    Telegram,
    Tumblr,
    Twitter,
    WhatsApp,
    Wordpress,
}

const socialCall = (config:defaultConfig) => {
    console.log(config);
    if(config.icon){
        Object.keys(config.icon).forEach((ico:any) => {
            // @ts-ignore
            social[ico](config);
        })
    }
}

export default socialCall