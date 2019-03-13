import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        msg : 111
    },
    getters : {
        va : function(state){
            return state.msg;
        }
    },
    mutations : {
        ce : function(state){
            state.msg++;
        }
    }
})
