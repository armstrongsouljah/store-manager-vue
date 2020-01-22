import Vuex from 'vuex'
import Vue from 'vue'
import loginStore from './loginModule'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{},
    getters: {},
    mutations: {},
    actions: {},
    modules:{
        loginStore
    }
    
})

export default store
