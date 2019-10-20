import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'
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
   }
 ]
})