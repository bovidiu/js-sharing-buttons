[![Build Status](https://travis-ci.org/bovidiu/js-sharing-buttons.svg?branch=v1.4-dev)](https://travis-ci.org/bovidiu/js-sharing-buttons)

[![](https://data.jsdelivr.com/v1/package/npm/js-sharing-buttons/badge)](https://www.jsdelivr.com/package/npm/js-sharing-buttons)

[![npm](https://img.shields.io/npm/dt/js-sharing-buttons.svg?logo=npm)](https://www.npmjs.com/package/js-sharing-buttons)


# :warning: New Version
In the next few months we are looking to optimise the small library and extended. Feel free to join our discussion https://github.com/bovidiu/js-sharing-buttons/discussions and let us know your oppinion or just introduce yourself.


# Social Media Sharing Buttons

Social media buttons to share your page to social media;

The current library of social media list includes:
* Amazon,
* Bitly,
* Blogger,
* Buffer,
* Delicious,
* Digg,
* Email,
* Evernote,
* Facebook,
* GMail,
* LinkedIn,
* Pinterest,
* Pocket,
* Reddit,
* StumbleUpon,
* Telegram,
* Tumblr,
* Twitter,
* WhatsApp,
* Wordpress,

#Install
Using npm `npm i js-sharing-buttons` 

Or implement it manually by adding the script in the footer of the pagelike:

```$xslt                                    
<script src="/path/to/js/SocialMedia.min.js"></script>
```
or use the CDN
```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/latest/SocialMedia.min.js"></script>
```
SRI CDN
```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/latest/SocialMedia.min.js" integrity="sha256-aq2Jk+ughOTxmvjt+RG7mStscd7Cpr/ifg2rkkc6z7E=" crossorigin="anonymous"></script>
```

# Configure

## Script
After adding the above script, right after add:
```$xslt
<script>
var sm = new SocialMedia();
sm.init();
</script>
```
It shoould look like similar to this:

```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/1.0/SocialMedia.min.js"></script>
<script>
var sm = new SocialMedia();
sm.init();
</script>
```

## HTML
Add any where in the page a div or any HTML element with a class called `socialMedia`, ie:

```
<div class="socialMedia"></div>
```

## Custom settings
The library supports multiple instances in a page as well as custom configurations.

### Change target element class
When the library get initialize include a `defaultTarget` class.

```$xslt
<script>
var sm = new SocialMedia({
  defaultTarget: 'myElementClassTarget'
});
sm.init();
</script>
```
### Activate/Deactivate buttons
By default the library will show Facebook and Twitter links, however you can enable/disable all icons.
Example:
#### Activate LinkedIn button
```$xslt
<script>
var sm = new SocialMedia({
  icon: {
    linkedin: {
      active : true
    }
  }
});
sm.init();
</script>
```
#### Deactivate Facebook button

```$xslt
<script>
var sm = new SocialMedia({
  icon: {
    facebook: {
      active : false
    }
  }
});
sm.init();
</script>
```


