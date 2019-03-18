import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index.vue'
import category from '@/components/category.vue'
import member from '@/components/member.vue'
import myPurse from '@/components/myPurse.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: 'index'
    },
    {
      path:'/index',
      name:'index',
      component:index,
    },
    {
      path:'/category',
      name:'category',
      component:category,
    },
    {
      path:'/member',
      name:'member',
      component:member,
    },
    {
      path:'/myPurse',
      name:'myPurse',
      component:myPurse,
    },
  ]
})
