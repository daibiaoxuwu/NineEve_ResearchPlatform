// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import enrollRefused from '../frontend/src/pages/enrollRefused.vue'
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

const wrapper = mount(enrollRefused, {
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

describe('enrollRefused.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('报名信息');
      expect(wrapper.text()).contain('Enroll Information');
    })

    it('should have a button', () => {
      expect(wrapper.html()).contains('b-btn');
    })

    it('should have text 肖朝军 initially', () => {
      const Constructor = Vue.extend(enrollRefused)
      const vmc = new Constructor().$mount()
      expect(vmc.selectedItem.text).to.be.equal('肖朝军');
    })
  })

  it('has a data function', () => {
    expect(typeof enrollRefused.data).to.be.equal('function');
  })
})