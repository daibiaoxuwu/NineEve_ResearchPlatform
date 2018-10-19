// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import home from '../frontend/src/pages/home.vue'
var assert = require('assert');
const chai=require("chai");
const expect=chai.expect;
chai.use(require("chai-http"))
// import Component from '../frontend/src/Component'

// describe('Component', () => {
//   // 检查原始组件选项
//   it('has a created hook', () => {
//     expect(typeof Component.created).to.be.equal('function')
//   })

//   // 评估原始组件选项中的函数的结果
//   it('sets the correct default data', () => {
//     expect(typeof Component.data).to.be.equal('function')
//     const defaultData = Component.data()
//     expect(defaultData.message).to.be.equal('hello!')
//   })

//   // 检查 mount 中的组件实例
//   it('correctly sets the message when created', () => {
//     const vm = new Vue(Component).$mount()
//     expect(vm.message).to.be.equal('bye!')
//   })

//   // 创建一个实例并检查渲染输出
//   it('renders the correct message', () => {
//     const Constructor = Vue.extend(Component)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.textContent).to.be.equal('bye!')
//   })
// })

describe('home.vue test', () => {
  it('has a data function', () => {
    expect(typeof home.data).to.be.equal('function');
  })
})