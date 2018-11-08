// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import assignmentForm from '../frontend/src/pages/assignmentForm.vue'
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

const wrapper = mount(assignmentForm, {
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

describe('assignmentForm.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('科研任务信息填写');
      expect(wrapper.text()).contain('Assignment information form');
    })

    it('should have information', () => {
     expect(wrapper.text()).contain('Basic Information 基本信息');
    })

    it('should have Introduction', () => {
      expect(wrapper.text()).contain('Introduction 简介');
    })

    it('should have Keywords', () => {
      expect(wrapper.text()).contain('Keywords');
    })
  })

  it('has a data function', () => {
    expect(typeof assignmentForm.data).to.be.equal('function');
  })
})