var webPage = require('webpage');
var page = webPage.create();

page.open('http://127.0.0.1:8080', function(status) {
   console.log(status);
  var title = page.evaluate(function() {
    throw new Error("Something went badly wrong!");
    return document.title;
  });
  console.log("Page Title: " + title);

  var facebookWrapperIcon = page.evaluate(function(){
    var fbOnly =  document.getElementsByClassName("FacebookIconOnly");
    if(fbOnly.length){
      return true;
    }else{
      throw new Error("Something went badly wrong!");
    }
  });
   console.log(facebookWrapperIcon);



  phantom.exit();

});