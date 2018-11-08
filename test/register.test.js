// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../frontend/src/pages/register.vue'
var assert = require('assert');
const chai=require("chai");
const spies=require('chai-spies')
chai.use(spies)
const expect=chai.expect;
const should=chai.should();
chai.use(require("chai-http"))
import { mount, createLocalVue } from '@vue/test-utils'

// const $route = {
//   path: '../frontend/src/router.js'
// }
// const spy = chai.spy();

const wrapper = mount(register, {
  stubs: [
    'router-link', 
    'router-view',
    'b-pagination-nav'
  ]
  // propsData: {
  //   registerFunction: spy
  // }
  // ,
  // mocks: {
  //   $route
  // }
})
const vm = wrapper.vm

describe('register.vue test', () => {
  describe('content test', () => {
    it('should have tite 校外学生注册', () => {
      expect(wrapper.text()).contain('校外学生注册');
    }) 
  })

  // describe('button test', () => {
  //   it('should call onRegister', () =>{
  //     const Constructor = Vue.extend(register);
  //     const ListComponent = new Constructor().$mount();
  //     ListComponent.registerName = 'student name';
  //     const spy = chai.spy(ListComponent.onRegister);
  //     const button = ListComponent.$el.querySelector('button');
  //     const clickEvent = new window.Event('click');
  //     button.dispatchEvent(clickEvent);
  //     ListComponent._watcher.run();
  //     spy.should.have.been.called.once;
  //   })
  // })
  it('should have a button', () => {
    expect(wrapper.contains('button')).to.be.true;
  })
  describe('form test', () => {
    it('should have form', () => {
      expect(wrapper.findAll('div').exists()).to.be.true;
    })
  })
})