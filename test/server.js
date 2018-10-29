const chai=require('chai');
const expect=chai.expect;
chai.use(require('chai-http'))
var request = require('request');
const app = require('../backend_simulator/bs_fake.js');

/* old version by HBJ
describe('server test', function() {
    // var url = 'http://localhost:80/';
    // var remoteUrl = 'https://nineeve_researchplatform_nineeve.app.secoder.net';
    describe('login page test', function(done) {
        it('return status 200', function(done) {
            request(remoteUrl, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    describe('login query test', function(done) {
      it('return status 200', function(done) {
        let profix = '/login';
        request(remoteUrl+profix, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(response.body).to.equal('Hello World!');
          done();
        })
      })
    })
})
*/

describe('server test', function() {
    
    describe('page visit test', function() {
        it('should return the home page', function(done) {
            chai.request(app).get('/').end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            });
        })
    })

    describe('login test', function() {
        it('visit /login/byEmail', function(done) {
            chai.request(app)
            .get('/login/byEmail')
            .query({
                email: 'email',
                password: 'password'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('visit /login/byTeacherId', function(done) {
            chai.request(app)
            .get('/login/byTeacherId')
            .query({
                teacherId: 'teacherId',
                password: 'password'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('visit /login/byStudentId', function(done) {
            chai.request(app)
            .get('/login/byStudentId')
            .query({
                studentId: 'studentId',
                password: 'password'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    })

    describe('register test', function() {
        it('register by outside students', function(done) {
            chai.request(app)
            .get('/register/getUrl')
            .query({
                name: 'test student',
                university: 'university',
                email: 'test email',
                password: 'password'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    })

    describe('teacherInfo page test', function() {
        // it('/teacherInfo/get', function(done) {
        //     chai.request(app)
        //     .get('/teacherInfo/get')
        //     .end((err, res) => {
        //         expect(res.status).to.be.equal(200);
        //         done();
        //     })
        // })

        it('/teacherInfo/launch', function(done) {
            chai.request(app)
            .get('/teacherInfo/launch')
            .query({
                lastName: 'testlastName',
                firstName: 'testfirstName',
                username: '',
                wechatPhone: '',
                email: '',
                perWebAddr: '',
                researchArea: '',
                researchResults: '',
                lab: ''
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('/teacherInfo/save', function(done) {
            chai.request(app)
            .get('/teacherInfo/save')
            .query({
                lastName: 'testlastName',
                firstName: 'testfirstName',
                username: '',
                wechatPhone: '',
                email: '',
                perWebAddr: '',
                researchArea: '',
                researchResults: '',
                lab: ''
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    })

    after(function() {
        app.close();
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

/*from ZZY
var assert = require('assert');
const chai=require('chai');
const expect=chai.expect;
chai.use(require('chai-http'))
const app=require('../webcastServer/app')

describe('server', function(){
    this.timeout(10000);
    before(()=>{
        app.connectDb();
    })
    it('should return page when accessing /api/users/test', (done)=>{
        chai.request(app).get('/api/users/test').end((err, res)=>{
            expect(res).to.have.status(200);
            done();
        });
    });
    it(`should have status 400 when Posting /api/users/register
             because it is already registered`
        , (done)=>{

            chai.request(app)
                .post('/api/users/register')
                .type('application/x-www-form-urlencoded')
                .send({
                    phone:'123878',
                    name:'ooo',
                    password:'ooo123sasd',
                    identity:'teacher'
                })
                .end((err, res)=>{
                    expect(res).to.have.status(400);
                    done();
                })
    });
    it(`should return token when Posting /api/users/login
             because it is already registered`
        , (done)=>{

            chai.request(app)
                .post('/api/users/login')
                .type('application/x-www-form-urlencoded')
                .send({
                    phone:'123878',
                    password:'ooo123sasd',
                })
                .end((err, res)=>{
                    expect(res).to.have.status(200);
                    done();
                })
    });
    after(()=>{
        app.disconnectDb();
    })
});
*/
