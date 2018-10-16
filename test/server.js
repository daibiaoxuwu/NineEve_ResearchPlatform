var expect  = require("chai").expect;
var request = require("request");

describe("login page test", function(done) {
    var url = "http://localhost:80/";
    it("return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })
})