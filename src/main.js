// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
 import {store} from './store.js'

Vue.use(VueFire)

Vue.use(Vuetify)

Vue.config.productionTip = false

  router.beforeEach((to, from, next) => {
  store.commit('is_loggedin');
  store.commit('fetchPosts',to.name);
  next();
		})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
