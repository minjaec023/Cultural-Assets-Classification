import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'
import detail2 from '@/components/detail2'

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
   }
 ]
})