// 导入 Vue.js 和组件，进行测试
// import Vue from 'vue'
import enrollStatus from '../frontend/src/pages/enrollStatus.vue'

const chai=require("chai");
const sinonChai = require("sinon-chai");
const expect=chai.expect;
chai.use(require("chai-http"))
chai.use(sinonChai);

import { mount, createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue();
localVue.use(Vuex);

const wrapper = mount(enrollStatus, {
  localVue,
  stubs: [
    'router-link', 
    'router-view'
  ]
})
const vm = wrapper.vm
const Constructor = Vue.extend(enrollStatus)
const vmc = new Constructor().$mount()

describe('enrollStatus.vue test', () => {
  describe('content test', () => {
    it('should have title', () => {
      expect(wrapper.text()).contain('报名信息');
      expect(wrapper.text()).contain('Enroll Information');
      expect(wrapper.text()).contain('报名队列');
      expect(wrapper.text()).contain('Enroll List');
    })

    it('should have a b-btn', () => {
      expect(wrapper.contains('button')).to.be.true;
    })

    it('should have a table', () => {
      expect(wrapper.findAll('table').length).not.equal(0);
    })
  })

  describe('data funciton and components test', () => {
    it('has a data function', () => {
      expect(typeof enrollStatus.data).to.be.equal('function');
    })

    it('should have list with one component initially', () => {
      expect(vmc.list.length).to.be.equal(1);
    })

    it('should be at currentpage3 = 1', () => {
      expect(vmc.currentPage3).to.be.equal(1);
    })
  })

  describe('dynamic test', () => {
    it('should have click response', () => {
      // const loginMock = jest.fn(() => Promise.resolve());
      // const store = new Vuex.Store({
      //     actions: {
      //         // mock function
      //         handleOk: loginMock
      //     }
      // });
      // const wrapper = mount(enrollStatus, { 
      //   localVue, 
      //   store 
      // });
      wrapper.find('button').trigger('click');
      // expect(loginMock).to.have.been.calledOnce;
    })
  })
  
})