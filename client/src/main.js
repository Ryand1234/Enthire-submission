import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Callback from './components/Callback.vue'
import './../node_modules/bulma/css/bulma.css';
import Router from './router'
Vue.config.productionTip = false

const routes = {
  '/': App,
  '/home': Home,
  '/auth/google/callback': Callback
}

new Vue({
	Router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
