import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 1000,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  randomUsers:[],
  randomUser: {
    name: {
      first: ''
    }
  },
  filters: {
    search: ''
  }
  },
  mutations: {
    DATA_RANDOM_USERS(state, data){
      state.randomUsers = data
    },
    DATA_RANDOM_USER(state, data){
      state.randomUser = data
    }
  },
  actions: {
    getRandomUsers({commit}){
      if(!this.state.randomUsers.length > 0) {
        const randomUsers = instance.get('?results=20')
        randomUsers.then(res => {
          commit('DATA_RANDOM_USERS', res.data.results)
        })
      }
    },
    getRandomUser({commit}, id ){
        const randomUsers = instance.get(`?id=${id}`)
        randomUsers.then(res => {
          commit('DATA_RANDOM_USER', res.data.results[0])
        })
    },
  },
  getters: {
    filteredUsers(state) {
      let users = state.randomUsers
      let filteredUsers = []
      let filtersActive = false

      if (state.filters.search.length > 1) {
        filtersActive = true
        filteredUsers = users.filter(user => {
          let userName = `${user.name.first} ${user.name.last}`.toLowerCase()
          let inputText = state.filters.search.toLowerCase()
          return userName.includes(inputText)
        })
      }
      if (filtersActive) { return filteredUsers }
      else { return users }
    }
  },
  modules: {
  }
})
