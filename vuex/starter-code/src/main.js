import Vue from 'vue'
import App from './App.vue'

// This is used to import the store const you made in
// the store folder in store file
import {store} from './store/store'

new Vue({
  el: '#app',
  store, // adds to your vue app
  render: h => h(App)
})
