const chai=require('chai');
const expect=chai.expect;
chai.use(require('chai-http'))
var request = require('request');
const app = require('../backend_simulator/bs_fake.js');

/* old version by HBJ
describe('server test', () => {
    // var url = 'http://localhost:80/';
    // var remoteUrl = 'https://nineeve_researchplatform_nineeve.app.secoder.net';
    describe('login page test', (done) => {
        it('return status 200', (done) => {
            request(remoteUrl, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    describe('login query test', (done) => {
      it('return status 200', (done) => {
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

describe('server test', () => {
    
    describe('page visit test', () => {
        it('should return the home page', (done) => {
            chai.request(app).get('/').end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            });
        })
    })

    describe('login test', () => {
        it('visit /login/byEmail', (done) => {
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

        it('visit /login/byTeacherId', (done) => {
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

        it('visit /login/byStudentId', (done) => {
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

    describe('register test', () => {
        it('register by outside students', (done) => {
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

    describe('teacherInfo page test', () => {
        // it('/teacherInfo/get', (done) => {
        //     chai.request(app)
        //     .get('/teacherInfo/get')
        //     .end((err, res) => {
        //         expect(res.status).to.be.equal(200);
        //         done();
        //     })
        // })

        it('/teacherInfo/launch', (done) => {
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

        it('/teacherInfo/save', (done) => {
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

    afterAll(() => {
        app.close();
    })
})

/*typical hooks
describe('hooks', () => {

  before(() => {
    // runs before all tests in this block
  });

  after(() => {
    // runs after all tests in this block
  });

  beforeEach(() => {
    // runs before each test in this block
  });

  afterEach(() => {
    // runs after each test in this block
  });

  // test cases
});
*/

/*database hook
  beforeEach((done) => {
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

describe('server', () =>{
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
