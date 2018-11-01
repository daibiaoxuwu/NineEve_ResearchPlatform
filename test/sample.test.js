/*
the first one is a basic test to check if the test environment is correct.
*/
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
// const app=require("../")
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

/*
below two tests are example of how a frontend test should be written
and also check if jest configuration is correct that it can understant .vue files
*/

import { mount } from '@vue/test-utils'
import Counter from './counter'
import Vue from 'vue'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).contain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).to.be.equal(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).to.be.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.be.equal(1)
  })
})

import MyComponent from './MyComponent'

describe('MyComponent', () => {
    // 检查原始组件选项
    it('has a created hook', () => {
      expect(typeof MyComponent.created).to.be.equal('function')
    })
  
    // 评估原始组件选项中的函数的结果
    it('sets the correct default data', () => {
      expect(typeof MyComponent.data).to.be.equal('function')
      const defaultData = MyComponent.data()
      expect(defaultData.message).to.be.equal('hello!')
    })
  
    // 检查 mount 中的组件实例
    it('correctly sets the message when created', () => {
      const vm = new Vue(MyComponent).$mount()
      expect(vm.message).to.be.equal('bye!')
    })
  
    // 创建一个实例并检查渲染输出
    it('renders the correct message', () => {
      const Constructor = Vue.extend(MyComponent)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).to.be.equal('bye!')
    })
  })

