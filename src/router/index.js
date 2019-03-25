import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入首页
import index from '@/components/index.vue'
//引入分类页面
import category from '@/components/category.vue'
// 引入我的页面
import member from '@/components/member.vue'
// 引入钱包页面
import myPurse from '@/components/myPurse.vue'
// 引入红包页面
import redPacket from '@/components/redPacket.vue'
// 引入优惠页面
import coupons from '@/components/coupons.vue'
// 引入积分商城页面
import IntegralMall from '@/components/IntegralMall.vue'
// 引入商家订单页面
import memberOrder from '@/components/memberOrder.vue'
// 引入积分订单页面
import memberPointorder from '@/components/memberPointorder.vue'
// 引入商家订单页面
import merchantsOrder from '@/components/merchantsOrder.vue'
// 引入退款订单页面
import memberRefund from '@/components/memberRefund.vue'
// 引入分类的二级页面
import categoryIndex from '@/components/categoryIndex.vue'
//引入收货地址页面
import delivery from '@/components/delivery.vue'
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
    {
      path:'/coupons',
      name:'coupons',
      component:coupons,
    },
    {
      path:'/IntegralMall',
      name:'IntegralMall',
      component:IntegralMall,
    },
    {
      path:'/memberOrder',
      name:'memberOrder',
      component:memberOrder,
      children:[
          {
            path:'/',
            redirect: 'merchantsOrder'
          },
          {
            path:'memberPointorder',
            name:'memberPointorder',
            component:memberPointorder,
          },
          {
            path:'merchantsOrder/:id',
            name:'merchantsOrder',
            component:merchantsOrder,
          },
          {
            path:'memberRefund',
            name:'memberRefund',
            component:memberRefund,
          },
      ],
      linkActiveClass:'myActive'
    },
    {
      path:'/categoryIndex',
      name:'categoryIndex',
      component:categoryIndex,
    },
    {
      path:'/delivery',
      name:'delivery',
      component:delivery,
    },
  ]
})
