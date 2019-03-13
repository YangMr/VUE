import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import counter from './module/counter'
import * as getters from './getters'
import * as mutations from './mutations'

export const store = new Vuex.Store({
    state : {
        value : 0
    },
    getters : getters,
    mutations : mutations,
    modules : {
        counter : counter
    }
})
