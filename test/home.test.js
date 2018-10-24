// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../frontend/src/pages/home.vue'
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

// const $route = {
//   path: '../frontend/src/router.js'
// }

const wrapper = mount(home, {
  localVue,
  router,
  stubs: [
    'router-link', 
    'router-view',
    'b-pagination-nav'
  ]
  // ,
  // mocks: {
  //   $route
  // }
})
const vm = wrapper.vm

describe('home.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
       wrapper.attributes('form')
      expect(wrapper.text()).contain('科研实习平台');
    })

    it('should be at page 1 initially', () => {
      expect(wrapper.vm.currentPage).to.be.equal(1);
    })
    
    console.log(vm.list.length);
    
    // it('should have 5 items in one page', () => {
    //   expect(wrapper.vm.list).has.length(5);
    // })
  })

  it('has a data function', () => {
    expect(typeof home.data).to.be.equal('function');
  })
})