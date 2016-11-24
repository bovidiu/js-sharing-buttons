"use strict";
describe('first test', function () {
    var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hello World!";
    document.body.appendChild(el);
    var myEl = document.getElementById('myDiv');
    it("has the right text", function () {
        (myEl.innerHTML).should.equal("Hello World!");
    });
});
