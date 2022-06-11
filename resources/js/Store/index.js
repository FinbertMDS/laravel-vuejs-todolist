import Vue from 'vue';
import Vuex from 'vuex';
import { account } from './account.module';
import { alert } from './alert.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {},
  modules: {
    alert,
    account,
  }
})

export default store;
