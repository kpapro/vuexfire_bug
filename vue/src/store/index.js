import { vuexfireMutations } from 'vuexfire'
import 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'

import members from './members'
import user from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    members,
    user
  },
  mutations: {
    ...vuexfireMutations
  },
  strict: true
})
