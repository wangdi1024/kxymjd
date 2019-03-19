import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index.vue'
import category from '@/components/category.vue'
import member from '@/components/member.vue'
import myPurse from '@/components/myPurse.vue'
import redPacket from '@/components/redPacket.vue'
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
      meta: { navShow: true}
    },
    {
      path:'/category',
      name:'category',
      component:category,
      meta: { navShow: true}
    },
    {
      path:'/member',
      name:'member',
      component:member,
      meta: { navShow: true}
    },
    {
      path:'/myPurse',
      name:'myPurse',
      component:myPurse,
    },
    {
      path:'/redPacket',
      name:'redPacket',
      component:redPacket,
    },
  ]
})
