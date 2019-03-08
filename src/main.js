// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import  {store} from './store/store.js' //引入vue.x

//配置axios默认全局请求路径
axios.defaults.baseURL="https://wd6871165328nrhegw.wilddogio.com/" 
//配置Vue原型（任何组件中都可以运行）
Vue.prototype.http=axios
// 配置路由
Vue.use(VueRouter)

//创建一个新的路由实例
const router = new VueRouter({
    routes,
    mode:'history',//让标签没有下划线,
    scrollBehavior(to,from,savedPosition){
      if(savedPosition){
        return savedPosition
      }else{
        return {x:0,y:0}
      }
    }


    
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//挂载路由
  store,//挂载vuex
  components: { App },
  template: '<App/>'
})
