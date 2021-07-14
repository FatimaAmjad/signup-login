import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/login'
import Signup from './components/signup'
import Fpwd from './components/fpwd'
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes=[
  {path: '/' , component: Login},
  {path: '/Signup', component: Signup},
  {path: '/Fpwd', component:Fpwd}
  
]
const router= new VueRouter({routes})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
