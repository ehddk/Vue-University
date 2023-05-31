import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import JoinView from '../views/JoinView.vue'
import MypageView from '../views/MypageView.vue'
import SearchId from '../views/SearchId.vue';
import SearchPwd from '../views/SearchPwd.vue';
import SaveView from '../views/SaveView.vue';
import DepartmentView from '../views/DepartmentView.vue'
import CommunityView from '../views/CommunityView.vue'
import WriteView from '../views/board/WriteView.vue'
import DepartContent from '../views/department/DepartContent.vue'
import CompareUniv from '../views/department/CompareUniv.vue'
import CompareDepart from '../views/department/CompareDep.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/join',
    name:'join',
    component:JoinView
  },
  {
    path:'/mypage',
    name:'mypage',
   component:MypageView  
  },
  {
    path:'/searchid',
    name:'searchid',
    component:SearchId
  },
  {
    path:'/searchpwd',
    name:'searchpwd',
    component:SearchPwd
  },
  {
    path:'/save',
    name:'save',
    component:SaveView

  },
  {
    path:'/department',
    name:'department',
    component:DepartmentView
  },
  {
    path:'/community',
    name:'community',
    component:CommunityView
  },
  {
    path:'/board/write',
    name:'write',
    component:WriteView
  },
  {
    path:'/department/departcontent',
    name:'departcontent',
    component:DepartContent
  },
  {
    path:'/department/compareuniv',
    name:'compareuniv',
    component:CompareUniv
  },
  {
    path:'/department/comparedepart',
    name:'comparedapart',
    component:CompareDepart

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
