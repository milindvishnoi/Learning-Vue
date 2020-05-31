import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// To import the routes you create
import { routes } from './routes';

// Using Routes
Vue.use(VueRouter);

// Specifying the route you created to VueRouter
const router = new VueRouter({
  routes,
  // set mode to history to remove # from the URL
  // this tells the vue that your server is configured
  // to work without # case
})


new Vue({
  el: '#app',
  // Registering routes
  router,
  render: h => h(App)
})
