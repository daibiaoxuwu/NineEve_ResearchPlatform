// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import assignmentView from '../frontend/src/pages/assignmentView.vue'
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

const wrapper = mount(assignmentView, {
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

describe('assignmentView.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('项目列表');
      expect(wrapper.text()).contain('Assignment List');
    })

    it('should be null before created', () => {
      expect(vm.currentPage).to.be.equal(1);
      expect(vm.num).to.be.equal(1);
      expect(vm.avaList.length).to.be.equal(0);
    })
  })

  it('has a data function', () => {
    expect(typeof assignmentView.data).to.be.equal('function');
  })
})