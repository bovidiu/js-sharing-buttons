var webPage = require('webpage');
var page = webPage.create();

page.open('http://127.0.0.1:8080', function(status) {
   console.log(status);
  var title = page.evaluate(function() {
    return document.title;
  });

  console.log(title);
  phantom.exit();

});