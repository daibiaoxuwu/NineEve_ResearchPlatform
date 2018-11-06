import Vue from 'vue'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex';

global.$ = global.jQuery = $;
global.Vue = Vue;
global.Vuex = Vuex;
global.BootstrapVue = BootstrapVue;
Vue.use(BootstrapVue);