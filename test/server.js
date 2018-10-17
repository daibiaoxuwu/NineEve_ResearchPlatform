var expect  = require("chai").expect;
var request = require("request");

describe("server test", function() {
    var url = "http://localhost:80/";
    var remoteUrl = "https://nineeve_researchplatform_nineeve.app.secoder.net";
    describe("login page test", function(done) {
        it("return status 200", function(done) {
            request(remoteUrl, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    describe("login query test", function(done) {
      it("return status 200", function(done) {
        let profix = "/login";
        request(remoteUrl+profix, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(response.body).to.equal("Hello World!");
          done();
        })
      })
    })
});
