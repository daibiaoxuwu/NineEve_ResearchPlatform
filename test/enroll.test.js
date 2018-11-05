// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import enroll from '../frontend/src/pages/enroll.vue'
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

const wrapper = mount(enroll, {
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

describe('enroll.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('项目信息');
      expect(wrapper.text()).contain('Assignment information');
    })

    it('should have a button', () => {
      expect(wrapper.findAll('button').exists()).to.be.true;
    })
  })

  it('has a data function', () => {
    expect(typeof enroll.data).to.be.equal('function');
  })
})