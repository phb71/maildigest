import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
  state () {
    return {
      isSignedIn: false
    }
  },
  mutations: {
    signedIn (state, payload) {
      state.isSignedIn = payload
    }
  }
})

const app = createApp(App)

app.use(store)

app.use(router).mount('#app')
