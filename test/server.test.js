const chai=require('chai');
const expect=chai.expect;
chai.use(require('chai-http'))
var request = require('request');
const app = require('../backend_simulator/bs_fake.js');

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
