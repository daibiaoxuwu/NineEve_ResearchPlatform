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

    // describe('register test', () => {
    //     it('register by outside students', (done) => {
    //         agent
    //         .get('/register/getUrl')
    //         .query({
    //             name: 'test student',
    //             university: 'university',
    //             email: 'test@mails.tsinghua.edu.cn',
    //             password: 'password'
    //         })
    //         .end((err, res) => {
    //             expect(res.status).to.be.equal(200);
    //             done();
    //         })
    //     })
    // })

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

        it('should be able to logout', (done) => {
            agent
            .get('/app/logout')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
    });

    describe("assignmentForm test", () => {
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

        it('should be able to get new assignmentForm page', (done) => {
            agent.get('/assignmentForm/get')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.length).to.be.not.equal(0);
                done();
            })
        })

        it('should be able to save temporary info', (done) => {
            agent.get('/assignmentForm/save')
            .query({
                title: 'test',
                background: 'test',
                introduction: 'test',
                keywords: 'test',
                abilities: 'test',
                detailed: 'test',
                number: 5,
                deadline: '2018/11/14'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
        
        it('should be able to get again with previous title', (done) => {
            agent.get('/assignmentForm/get')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.title).equal('test');
                done();
            })
        })
        
        it('should be able to launch after edit', (done) => {
            agent.get('/assignmentForm/launch')
            .query({
                title: 'test',
                background: 'test',
                introduction: 'test',
                keywords: 'test',
                abilities: 'test',
                detailed: 'test',
                number: 5,
                deadline: '2018/11/14'
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

    describe("student register test", () => {
        it('should be able to get register captcha', (done) => {
            agent
            .get('/register/getCaptcha')
            .query({
                email: 'test@edu.cn'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.captcha < 1000000 && res.body.captcha > 100000).to.be.true;
                done();
            })
        })

        it('should be able to save register info as new student', (done) => {
            agent
            .get('/register/getUrl')
            .query({
                name: 'test',
                university: 'test',
                email: 'test@edu.cn',
                password: 'test',
                captcha: 'test'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })
        
        it('can get studentinfopage', (done) => {
            agent
            .get('/studentInfo/get')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('can save temporary info', (done) => {
            agent
            .get('/studentInfo/save')
            .query({
                lastName: 'test',
                firstName: 'test',
                username: 'test',
                wechatPhone: 'test',
                email: 'test@edu.cn',
                perWebAddr: 'test',
                breIntr: 'test',
                grade: 'test',
                selectedKey: [],
                selectedLab: [
                    { name: "Software Laboratory 软件所", state: false },
                    { name: "High Performance Laboratory 高性能", state: false },
                    { name: "Multimedia Laboratory 媒体所", state: false },
                    { name: "Artificial Intelligence Laboratory 智能所", state: false },
                    { name: "Network Laboratory 网络所", state: false }
                ]
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('can launch to main', (done) => {
            agent
            .get('/studentInfo/launch')
            .query({
                lastName: 'test',
                firstName: 'test',
                username: 'test',
                wechatPhone: 'test',
                email: 'test@edu.cn',
                perWebAddr: 'test',
                breIntr: 'test',
                grade: "Junior 大三",
                selectedKey: [],
                selectedLab: [
                    { name: "Software Laboratory 软件所", state: false },
                    { name: "High Performance Laboratory 高性能", state: false },
                    { name: "Multimedia Laboratory 媒体所", state: false },
                    { name: "Artificial Intelligence Laboratory 智能所", state: false },
                    { name: "Network Laboratory 网络所", state: false }
                ]
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

    describe("teacherinfo and teacherview test", () => {
        it('visit /login/byTeacherId', (done) => {
            agent.get('/login/byTeacherId')
            .query({
                teacherId: 'test',
                password: 'test'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.loginSuccess).to.be.true;
                done();
            })
        })

        it('can get teacherinfo', (done) => {
            agent
            .get('/teacherInfo/get')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(Object.keys(res.body).includes('lastname'));
                done();
            })
        })

        it('can save teacherinfo', (done) => {
            agent
            .get('/teacherInfo/save')
            .query({
                lastName: 'test',
                firstName: 'test',
                username: 'test',
                wechatPhone: 'test',
                email: 'test@edu.cn',
                perWebAddr: 'test',
                researchArea: 'test',
                researchResults: 'test',
                lab: 1
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                done();
            })
        })

        it('can launch teacherinfo', (done) => {
            agent
            .get('/teacherInfo/launch')
            .query({
                lastName: 'test',
                firstName: 'test',
                username: 'test',
                wechatPhone: 'test',
                email: 'test@edu.cn',
                perWebAddr: 'test',
                researchArea: 'test',
                researchResults: 'test',
                lab: 1
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

    afterAll(() => {
        app.close();
    })
})
