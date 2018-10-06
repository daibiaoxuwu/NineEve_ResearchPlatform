var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
// const app=require("../")
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

/* describe("app", function(){
    it("should return page when accessing /", (done)=>{
        chai.request(app).get("/").end((err, res)=>{
            expect(res).to.have.status(200);
            done();
        })
    });
    after(()=>{
        app.close();
    })

}); */
