// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../frontend/src/pages/main.vue'
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

const wrapper = mount(main, {
  localVue,
  router,
  mock,
  stubs: [
    'router-link', 
    'router-view',
    'b-pagination-nav',
    'b-dropdown',
    'b-button',
    'b-btn'
  ]
  // ,
  // mocks: {
  //   $route
  // }
})
const vm = wrapper.vm

describe('main.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('科研实习平台');
    })

    it('should have messages', () => {
     expect(wrapper.text()).contain('MESSAGES');
    })

    it('should have projects', () => {
      expect(wrapper.text()).contain('MY PROJECTS');
    })

    it('should have available', () => {
      expect(wrapper.text()).contain('AVAILABLE PROJECTS');
    })
  })

  it('has a data function', () => {
    expect(typeof main.data).to.be.equal('function');
  })
})