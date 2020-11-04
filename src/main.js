import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Employee from './views/Employee'
import Medicine from './views/Medicine'
import Patient from './views/Patient'

Vue.use(Router);

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/employee', component: Employee},
  { path: '/medicine', component: Medicine},
  { path: '/patient', component: Patient}
];

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
