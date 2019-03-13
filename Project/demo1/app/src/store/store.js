import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    flag : false
  },
  getters : {
    changeFlag : function (state) {
      return state.flag;
    }
  },
  mutations : {
    cFlag : function (state) {
      state.flag = true
    }
  }
})
