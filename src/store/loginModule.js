/* eslint-disable no-console */
import AxiosCalls from '../utils/index'

export default {
    state: {
      token: null,
      message: null,
      error: null
    },
    getters: {
      GET_ERROR (state) {
          return {...state.error}
      },
      GET_TOKEN (state) {
          return state.token
      },
      message (state) {
          return state.token
      }
    },
    mutations: {
       SET_TOKEN (state, payload) {
           state.token = payload
       }
    },
    actions: {

        async loginUser (userData){
            console.log(userData)
          let response = await AxiosCalls.post('auth/login', userData)
          console.log(response)
        }

    }
}
