// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import App from '../frontend/src/App.vue'
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
import { mount, RouterLinkStub } from '@vue/test-utils'

const wrapper = mount(App, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})
const vm = wrapper.vm

describe("app test", () => {
  
  describe('content test', () => {
    
    it('should contain navbar', () => {
      expect(wrapper.html()).contain('<nav class="navbar');
    })
    
    it('should contain sign in', () => {
      expect(wrapper.text()).contain('Sign in');
    })

  })

  describe('function test', () => {

    it('has data function', () => {
      expect(typeof App.data).to.be.equal('function');
    })

  })
})