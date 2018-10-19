var expect  = require("chai").expect;
var request = require("request");

describe("login page test", function(done) {
    var url = "http://localhost:80/";
    var remoteUrl = "https://nineeve_researchplatform_nineeve.app.secoder.net:443";
    it("return status 200", function(done) {
        request(remoteUrl, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })
})

/*typical hooks
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
*/

/*database hook
  beforeEach(function(done) {
    db.clear(function(err) {
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
  });
*/

