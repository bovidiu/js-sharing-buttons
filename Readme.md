[![Build Status](https://travis-ci.org/bovidiu/js-sharing-buttons.svg?branch=v1.4-dev)](https://travis-ci.org/bovidiu/js-sharing-buttons)
#Social Media Sharing Buttons
Social media buttons to share your page to social media; already configured to use font-awesome icons.

The current library of social media list includes:
* Facebook
* Twitter
* LinkedIn
* Pinterest

#Install
You can use composer to install it `composer require bovidiu/js-sharing-bootstrap` 

Or implement it manually by adding the script in the footer of the pagelike:

```$xslt                                    
<script src="/path/to/js/SocialMedia.min.js"></script>
```
or use the CDN
```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/1.0/SocialMedia.min.js"></script>
```
SRI CDN
```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/1.0/SocialMedia.min.js" integrity="sha256-aq2Jk+ughOTxmvjt+RG7mStscd7Cpr/ifg2rkkc6z7E=" crossorigin="anonymous"></script>
```

#Configure

## Script
After adding the above script, right after add:
```$xslt
<script>
SocialMedia.init();
</script>
```
It shoould look like similar to this:

```$xslt
<script src="https://cdn.jsdelivr.net/socialmedia.js/1.0/SocialMedia.min.js"></script>
<script>
SocialMedia.init();
</script>
```

## HTML
Add any where in the page a div or any HTML element with a class called `socialMedia`, ie:

```
<div class="socialMedia"></div>
```



