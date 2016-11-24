/// <reference path="../typings/mocha/mocha.d.ts" />
import  { SocialMedia }   from '../ts/SocialMedia';

describe('Default Social Media', () =>{
  let sm : SocialMedia;

  beforeEach(function () {
    sm = new SocialMedia();
  });
  describe('#getConfig()', function() {
    it('should have defaultTarget', function(done) {
      let userConfig = sm.getConfig();
      if(!userConfig.defaultTarget){
        throw new Error('Expected test object to be present');
      }
      done();
    });
    it('should have assing socialMedia to defaultTarget', function(done) {
      let userConfig = sm.getConfig();
      if(userConfig.defaultTarget !== 'socialMedia'){
        throw new Error('Expected test object to be present');
      }
      done();
    });
  });

});