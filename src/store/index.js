import Vue from 'vue'
import Vuex from 'vuex'
import stand from './modules/stand'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stand
  }
})

export default store
