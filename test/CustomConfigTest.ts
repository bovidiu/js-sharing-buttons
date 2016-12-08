/// <reference path="../typings/mocha/mocha.d.ts" />
import { SocialMedia } from "../ts/SocialMedia";

describe('Custom Social Media', () => {
  let sm : SocialMedia;
  beforeEach(function () {
    sm = new SocialMedia({
      defaultTarget: 'testTarget'
    });
    this.timeout(100);
  });
  it('should be able to initialise the class', function (done) {
    let userConfig = new SocialMedia();
    if (typeof userConfig !== 'object') {
      throw new Error('Expected popup to be set as false');
    }
    done();
  });
});