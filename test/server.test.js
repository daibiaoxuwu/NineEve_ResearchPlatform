const chai=require('chai');
const expect=chai.expect;
chai.use(require('chai-http'))
var request = require('request');
const app = require('../backend_simulator/bs_1.js');

describe('server test', () => {
    var agent = chai.request.agent(app);

    describe('page visit test', () => {
        it('should return the home page', (done) => {
            agent.get('/').end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            });
        })
    })

    describe('login test', () => {
        it('visit /login/byEmail', (done) => {
            agent
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
            agent
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
            agent
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
        
        it('should be able to logout', (done) => {
            agent
            .get('/app/logout')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    })

    describe('register test', () => {
        it('register by outside students', (done) => {
            agent
            .get('/register/getUrl')
            .query({
                name: 'test student',
                university: 'university',
                email: 'test@mails.tsinghua.edu.cn',
                password: 'password'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    })

    // describe('teacherInfo page test', () => {
    //     it('/teacherInfo/get', (done) => {
    //         console.log("call");
            
    //         agent
    //         .get('/teacherInfo/get')
    //         .end((err, res) => {
    //             expect(res.status).to.be.equal(200);
    //             done();
    //         })
    //     })

    //     it('/teacherInfo/launch', (done) => {
    //         agent
    //         .get('/teacherInfo/launch')
    //         .query({
    //             lastName: 'testlastName',
    //             firstName: 'testfirstName',
    //             username: '1',
    //             wechatPhone: '1',
    //             email: '1',
    //             perWebAddr: '1',
    //             researchArea: '1',
    //             researchResults: '1',
    //             lab: '1'
    //         })
    //         .end((err, res) => {
    //             expect(res.status).to.be.equal(200);
    //             done();
    //         })
    //     })

    //     it('/teacherInfo/save', (done) => {
    //         agent
    //         .get('/teacherInfo/save')
    //         .query({
    //             lastName: 'testlastName',
    //             firstName: 'testfirstName',
    //             username: '1',
    //             wechatPhone: '1',
    //             email: 'teacher@mail.tsinghua.edu.cn',
    //             perWebAddr: '1',
    //             researchArea: '1',
    //             researchResults: '1',
    //             lab: '1'
    //         })
    //         .end((err, res) => {
    //             expect(res.status).to.be.equal(200);
    //             done();
    //         })
    //     })
    // })

    describe('main test', () => {
        it('visit /login/byTeacherId', (done) => {
            agent.get('/login/byTeacherId')
            .query({
                teacherId: '1',
                password: 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.loginSuccess).to.be.true;
                done();
            })
        })

        it('test main get', (done) => {
            agent.get('/main/get')
            .query({
                currentPage1: 1,
                currentPage2: 1,
                currentPage3: 1,
                currentPageint: 1
            })
            .end((err, res) => {
                // console.log(res);
                expect(res.status).to.be.equal(200);
                // expect(res.body.loginSuccess).to.be.true;
                // expect(res.body.msgList.length).not.equal(0);
                done();
            })
        })

        it('test main search', (done) => {
            agent.get('/main/search')
            .query({
                search: '清华'
            })
            .end((err, res) => {
                // console.log(res);
                expect(res.status).to.be.equal(200);
                // expect(res.body.loginSuccess).to.be.true;
                // expect(res.body.msgList.length).not.equal(0);
                // console.log(res.body);
                // expect(res.body)
                done();
            })
        })

        agent
        .get('/app/logout')
        .end((err, res) => {})
    });



    afterAll(() => {
        app.close();
    })
})
