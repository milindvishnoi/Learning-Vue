import Vue from 'vue'
import App from './App.vue'
import ServerComponent from "./components/ServerComponent.vue";

Vue.component('server-component', ServerComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
