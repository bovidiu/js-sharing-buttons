[![Build Status](https://travis-ci.org/bovidiu/js-sharing-buttons.svg?branch=v1.4-dev)](https://travis-ci.org/bovidiu/js-sharing-buttons)
#Social Media Sharing Buttons
Social media buttons to share your page to social media;

The current library of social media list includes:
* Facebook
* Twitter
* LinkedIn
* Pinterest
* Google
* Digg
* Tumblr
* Reddit
* VKontakte
* Delicious
* Gmail
* Blogger
* Amazon
* Bitly

#Install
You can use composer to install it `composer require bovidiu/js-sharing-bootstrap` or npm `npm i js-sharing-buttons` 

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

#Configure

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


