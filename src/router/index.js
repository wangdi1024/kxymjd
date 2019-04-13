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
//引入更改地址页面
import updateDelivery from '@/components/updateDelivery.vue'
// 引入新增地址页面
import insertDelivery from '@/components/insertDelivery.vue'
// 引入设置页面
import information from '@/components/information.vue'
//引入关于我们页面
import aboutUs from '@/components/aboutUs.vue'
//引入关于我们详情页面
import aboutDetail from '@/components/aboutDetail.vue'
//引入商品收藏页面
import myFavorites from '../components/myFavorites.vue'
//引入我的足迹页面
import goodsBrowse from '../components/goodsBrowse.vue'
// 引人帮助中心页面
import helpCenter from '../components/helpCenter.vue'
// 引入常见问题页面
import helpList from '../components/helpList.vue'
// 引入我要投诉页面
import myComplaint from '../components/myComplaint.vue'
//引入反馈记录页面
import feedback from '../components/feedback.vue'
//引入反馈详情页面
import myFeedback from '../components/myFeedback.vue'
// 引入商户认证页面
import merchantRegister from '../components/merchantRegister'
// 引入商铺页面
import showStore from '../components/showStore'
import test from '../components/test'
// 引入商品详情页面
import productDetail from '../components/productDetail'
// 引入商品详情的子路由商品页面
import product from '../components/product'
// 引入商品详情的子路由详情页面
import goodsDetail from '../components/goodsDetail'
// 引入商品详情的子路由评价页面
import evaluate from '../components/evaluate'
import find from '../components/find'

Vue.use(Router)
Router.prototype.isBack=false

const router = new Router({
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
      path:'/find',
      name:'find',
      component:find,
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
    {
      path:'/updateDelivery',
      name:'updateDelivery',
      component:updateDelivery,
    },
    {
      path:'/insertDelivery',
      name:'insertDelivery',
      component:insertDelivery,
    },
    {
      path:'/information',
      name:'information',
      component:information,
    },
    {
      path:'/aboutUs',
      name:'aboutUs',
      component:aboutUs,
    },
    {
      path:'/aboutDetail/:title',
      name:'aboutDetail',
      component:aboutDetail,
    },
    {
      path:'/myFavorites/:selected',
      name:'/myFavorites',
      component:myFavorites,
    },
    {
      path:'/goodsBrowse/:selected',
      name:'/goodsBrowse',
      component:goodsBrowse,
    },
    {
      path:'/helpCenter',
      name:'helpCenter',
      component:helpCenter,
    },
    {
      path:'/helpList',
      name:'helpList',
      component:helpList,
    },
    {
      path:'/myComplaint',
      name:'myComplaint',
      component:myComplaint,
    },
    {
      path:'/feedback',
      name:'feedback',
      component:feedback,
    },
    {
      path:'/myFeedback/:selected',
      name:'myFeedback',
      component:myFeedback,
      meta: { navShow: true}
    },
    {
      path:'/merchantRegister',
      name:'merchantRegister',
      component:merchantRegister,
    },
    {
      path:'/showStore',
      name:'showStore',
      component:showStore,
    },
    {
      path:'/test',
      name:'test',
      component:test,
    },
    {
      path:'/productDetail',
      name:'productDetail',
      component:productDetail,
      children:[
        {
          path:'/',
          redirect: 'product'
        },
        {
          path:'product',
          name:'product',
          component:product,
        },
        {
          path:'goodsDetail',
          name:'goodsDetail',
          component:goodsDetail,
        },
        {
          path:'evaluate',
          name:'evaluate',
          component:evaluate,
        },
      ],
      linkActiveClass:'productActive'
    }, 
  ]
})
router.beforeEach((from,to,next)=>{
  // console.log(from);
  next()
})
export default router;