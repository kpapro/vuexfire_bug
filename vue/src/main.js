import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import App from './App.vue'
import { store } from './store/index'

Vue.config.productionTip = false

let app

const config = {
  apiKey: 'AIzaSyCJ752KMIQ4gNCnD5kRyc3Xcbnhfo4hj5o',
  authDomain: 'vuexfire-bug.firebaseapp.com',
  databaseURL: 'https://vuexfire-bug.firebaseio.com',
  projectId: 'vuexfire-bug',
  storageBucket: 'vuexfire-bug.appspot.com',
  messagingSenderId: '866764616081',
  appId: '1:866764616081:web:df0ecc6295a2f1d326ea30'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
