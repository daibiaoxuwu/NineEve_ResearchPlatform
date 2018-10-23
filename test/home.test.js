// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import home from '../frontend/src/pages/home.vue'
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
import { mount, RouterLinkStub } from '@vue/test-utils'

const wrapper = mount(home, {
  stubs: {
    RouterLink: RouterLinkStub
  }
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

    // it('should have 5 items in one page', () => {
    //   expect(wrapper.vm.list).has.length(5);
    // })
  })

  it('has a data function', () => {
    expect(typeof home.data).to.be.equal('function');
  })
})