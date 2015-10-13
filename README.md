# js-sharing-bootstrap
Inject Social Media FontAwesome Icons and makes button shareable. The links will share current page.

# Configure
To inject the icons into your web page, add this file in the footer/header of your page and change the following:

## Set where the icons will be inserted!
Change the below variable with the CLASS/ID of your HTML tag where you want the icons to be inserted.

var attachedParent = '.socialMedia';

##Email configuration 
The below variables needs to be modify if you would like to share the content over email

var subject = encodeURI('Lorem Ipsum');

var message = encodeURI('dolor sit amet, consectetur adipiscing elit. Integer tempor vehicula tristique');


##Add/remove icons
In case you don't need all the icons, you can comment out or remove them from SocialMedia.run -> init:
DO NOT REMOVE SocialMedia.run.makePageURL();
