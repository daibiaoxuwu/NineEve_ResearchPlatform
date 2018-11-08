// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import studentInfo from '../frontend/src/pages/studentInfo.vue'
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

const wrapper = mount(studentInfo, {
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
    'b-modal',
    'b-dropdown-item-button'
  ]
  // ,
  // mocks: {
  //   $route
  // }
})
const vm = wrapper.vm

describe('studentInfo.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('学生信息填写');
      expect(wrapper.text()).contain('student\'s information form');
    })

    it('should have other information', () => {
      expect(wrapper.text()).contain('基本信息');
      expect(wrapper.text()).contain('姓');
      expect(wrapper.text()).contain('名');
      expect(wrapper.text()).contain('用户名');
      expect(wrapper.text()).contain('年级');      
    })

    it('should have a button', () => {
      expect(wrapper.findAll('button').exists()).to.be.true;
    })

    // it('should have a dropdownlist', () => {
    //   expect(wrapper.findAll('b-dropdown').exists()).to.be.true;
    // })
  })

  it('has a data function', () => {
    expect(typeof studentInfo.data).to.be.equal('function');
  })
})