import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About/About'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/About/contactLink'
import Delivery from './components/About/deliveryLink'
import History from './components/About/historyLink'
import Ordering from './components/About/orderingLink'

   export const routes =[
    {path:"/",name:"homeLink",components:{
      //设置主页的默认显示 router-view的复用
        default:Home,
       'ordering':Ordering,
       'history':History,
       'delivery':Delivery
    }},
    {path:"/menu",name:"menuLink",component:Menu},
    {path:"/admin",name:"adminLink",component:Admin},
    {path:"/login",name:"loginLink",component:Login},
    {path:"/register",name:"registerLink",component:Register},
    {path:"*",redirect:'/'},
    //设置二级路由，并默认展示历史订单组件
    {path:"/about",name:"aboutLink",redirect:'/about/history', component:About,children:[
      {path:"/about/contact",name:"contactLink",component:Contact},
      {path:"/about/delivery",name:"deliveryLink",component:Delivery},
      {path:"/about/history",name:"historyLink",component:History},
      {path:"/about/ordering",name:"orderingLink",component:Ordering},
    ]},
  ]