// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import enrollForm from '../frontend/src/pages/enrollForm.vue'
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
import { mount, createLocalVue } from '@vue/test-utils'
var mock = require('./mock.js')

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

// const $route = {
//   path: '../frontend/src/router.js'
// }

const wrapper = mount(enrollForm, {
  localVue,
  router,
  mock,
  stubs: [
    'router-link', 
    'router-view',
    'b-pagination-nav',
    'b-dropdown',
    'b-button',
    'b-btn',
    'b-form-textarea',
    'b-modal'
  ]
  // ,
  // mocks: {
  //   $route
  // }
})
const vm = wrapper.vm

describe('enrollForm.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('报名信息填写');
      expect(wrapper.text()).contain('Enroll information form');
    })

    it('should have information', () => {
     expect(wrapper.text()).contain('Basic Information 基本信息');
    })

    it('should have username', () => {
      expect(wrapper.text()).contain('Username 用户名');
    })

    it('should have Enroll Information 报名理由', () => {
      expect(wrapper.text()).contain('Enroll Information 报名理由');
    })
  })

  it('has a data function', () => {
    expect(typeof enrollForm.data).to.be.equal('function');
  })
})