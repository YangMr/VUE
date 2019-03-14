import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    show : false,
    name : "首页"
  },
  getters : {
    show : function (state) {
      return state.show;
    },
    getName : function (state) {
      return state.name;
    }
  },
  mutations : {
    changeShow : function (state) {
      state.show = true;
    },
    backShow : function (state) {
      state.show = false;
    },
    changeName : function(state,name){
      state.name = name;
    }
  }
})
