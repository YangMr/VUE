import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        counter : 1
    },
    getters : {
        dobuleCounter : function(state){
            return state.counter * 2;
        },
        stringCounter : function(state){
            return state.counter++;
        }
    },
    Mutations : {
        increment : function(state){
            state.counter*=2
        },
        decrement : function(state){
            state.counter/=2;
        }
    }
});
