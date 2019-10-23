import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'
import detail2 from '@/components/detail2'
import main_eng from '@/components/main_eng'
import detail_eng from '@/components/detail_eng'
import detail2_eng from '@/components/detail2_eng'

Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'main',
     component: main
   },
   {
     path: '/:id',
     name: 'detail',
     component: detail
   },
   {
     path: '/:id',
     name: 'detail2',
     component: detail2
   },
   {
    path: '/eng',
    name: 'main_eng',
    component: main_eng
  },
  {
    path: '/eng/:id',
    name: 'detail_eng',
    component: detail_eng
  },
  {
    path: '/eng/:id',
    name: 'detail2_eng',
    component: detail2_eng
  },
 ]
})