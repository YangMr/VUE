
const state = {
    counter : 0
}
const getters = {
    dobuleCounter : function(state){
        return state.counter * 2;
    },
    stringCounter : function(state){
        return state.counter + "Clicks"
    }
}
const mutations = {
    increment : function(state){
        state.counter++;
    },
    decrement : function(state){
        state.counter--;
    }
}
const actions = {
    increment : function({commit}){
        setTimeout(function(){
            commit("increment")
        },3000)

    },
    decrement : function({commit}){
        setTimeout(function(){
            commit("decrement")
        },3000)

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
