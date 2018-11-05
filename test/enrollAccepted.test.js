// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import enrollAccepted from '../frontend/src/pages/enrollAccepted.vue'
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

const wrapper = mount(enrollAccepted, {
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

describe('enrollAccepted.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('报名信息');
      expect(wrapper.text()).contain('Enroll Information');
    })

    // it('should have detail', () => {
    //   console.log(vm.detail);
    // })
  })

  it('has a data function', () => {
    expect(typeof enrollAccepted.data).to.be.equal('function');
  })

  it('has a created function', () => {
    expect(typeof enrollAccepted.created).to.be.equal('function');
  })
})