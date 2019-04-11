<template>
    <div>
        <!-- 头部 -->
        <nav-title placeholder='请输入你要搜索的内容' color="background-color:#f2f2f2">
             <img src="../assets/img/home_logo.png" alt="" slot="img">
              <i class="iconfont icon-lingdang" slot="icon"></i>
              <i class="iconfont icon-tubiaozhizuomoban" slot="icon"></i>
        </nav-title>
        <!-- 轮播 -->
        <div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../assets/img/lunbo1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/img/lunbo2.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <img src="../assets/img/hudu.png" alt="" id="hudu">
        <!-- 零食酒水 -->
        <div class="sore-brand">
            <div class="container">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;" onclick="show_class(1238)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1370.jpg" alt="奶品水饮">
                            <span>奶品水饮</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1263)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1368.jpg" alt="休闲食品">
                            <span>休闲食品</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1066)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1369.jpg" alt="中外名酒">
                            <span>中外名酒</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1065)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1238.jpg" alt="粮油副食">
                            <span>粮油副食</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1209)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1065.jpg" alt="家庭清洁">
                            <span>家庭清洁</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1156)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1066.jpg" alt="个人护理">
                            <span>个人护理</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1143)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1235.jpg" alt="家居家纺">
                            <span>家居家纺</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1235)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-towel.png" alt="厨房卫浴">
                            <span>厨房卫浴</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1235)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1156.jpg" alt="母婴用品">
                            <span>母婴用品</span> 
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1235)">
                            <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1367.jpg" alt="办公用品">
                            <span>办公用品</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
         <!-- 活动公告 -->
        <div class="mod-news">
            <div class="news-left">
                <a href="javascript:;">
                    <img src="../assets/img/tophead.png" alt="">
                </a>
            </div>
            <div class="news-right">
                <div class="title">
                    <img src="../assets/img/hot-page.png" alt="">
                </div>
                <div class="hot-text">
                   <publicTitle :textArr='textArr' time="2000"></publicTitle>
                </div>
            </div>
        </div>
         <!-- 秒杀导航 -->
        <div class="nav-bar clearfix">
            <!-- 秒杀活动 -->
            <div class="now-seckill">
                <div class="now-seckill-top">
                    <span class="now-seckill-top-logo"><i class="skill-icon"></i>特惠精选</span>
                    <span class="end-time">敬请期待。。</span>
                </div>
                <div class="now-seckill-img">
                    <div class="left-img seckill-img">
                        <a href="#">
                            <img src="../assets/img/seckill-img1.png" alt="">
                        </a>
                    </div>
                    <div class="right-img seckill-img">
                        <a href="#">
                            <img src="../assets/img/seckill-img3.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <!-- 积分商城 -->
            <div class="now-shop">
                <div class="now-seckill-top">
                    <span class="now-seckill-top-logo sort-logo"><i class="soreshop"></i>积分商城</span>
                    <span style="font-size: 0.1rem;color: #aaa;">好礼享不停</span>
                </div>
                <div class="now-seckill-img">
                    <div class="left-img seckill-img">
                        <a href="#">
                            <img src="../assets/img/seckill-img2.png" alt="">
                        </a>
                    </div>
                    <div class="right-img seckill-img">
                        <a href="#">
                            <img src="../assets/img/seckill-img3.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 附近商家 -->
        <div class="mod-hot-stores">
            <!-- 标题 -->
            <div class="mod-title" style="line-height: 0.6rem; top: 0px; z-index: 99;padding-left:10px" >
                <span class="mod-title-text">附近商家</span>
                <i class="mod-title-brand-icon"></i>
                <span style="color:#656565;font-size:0.12rem;font-weight:300;margin-left:0.2rem;">为您精选优质商家</span>
            </div>
            <!-- 商家导航栏 -->
            <div class="near-bussiness bussiness-bar" style="display: block; top: 0.5rem;z-index: 999999; position: static;" ref='storesFixed' v-show='brandfixedNone'>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"  style="width:69.5556px; margin-right:12px;" v-for="(item , index) in bussinessBar1" :key='index' :class="{'selected':selected==index}"  @click="isselected(index)">
                            <p>{{item}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商家推荐查看更多 -->
            <div class="Businessmen-recommend" ref="Businessmen">
                <div class="hot-stores-list-box">
                    <ul  class="hot-stores-list">
                        <li v-for="(item, index) in shopDetail" :key="index">
                            <div class="com-storelist-item top-line">
                                <a href="#">
                                    <div class="img-show">
                                        <img :src="item.img" alt="">
                                    </div>
                                </a>
                            </div>
                            <div class="describe-content">
                                    <a href="#" class="shopName nowrap">{{item.name}}</a>
                                    <div class="detail nowrap2">
                                        <p>经营品牌 : {{item.banrd}}</p>
                                        <p>起  售  额 :{{item.count}}</p>
                                    </div>
                                    <a href="#" class="favourable nowrap2">{{item.sale}}</a>
                                    <router-link to="/showStore">
                                        <div class="enterShop">
                                            <a href="#">
                                                <i></i>
                                            </a>
                                        </div>
                                    </router-link>
                                    <div class="heart">
                                        <i class="fa" :class="item.heart==true?'fa-heart':'fa-heart-o'" @click="shoreUp(item.heart,index)"></i>
                                        <!-- <i class="fa fa-heart" v-if="item.heart==true" @click="shoreUp(item.heart,index)"></i>
                                        <i class="fa fa-heart-o" v-else @click="shoreUp(item.heart,index)"></i> -->
                                    </div>
                            </div>
                        </li>
                    </ul>
                    <div class="more">
                        <span>查看更多<i class="icon-more"></i></span>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- 品牌推荐 -->
        <div class="mod-brand">
            <div class="mod-title" style="padding-left:10px;line-height: 0.6rem; top: 0px; z-index: 99">
                <i class="mod-title-brand-icon"></i>
                <span class="mod-title-text" style="color:#f77a00">品牌推荐</span>
                <span style="color:#656565;font-size:0.12rem;font-weight:300;margin-left:0.2rem;">为您精选优质品牌</span>
            </div>
           <div class="near-bussiness bussiness-bar" style="display: block; top: 0.5rem; z-index: 999999; position: static;" ref='brandFixed' v-show='hotGoodsfixedNone'>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"  style="width:69.5556px; margin-right:12px;" v-for="(item , index) in bussinessBar1" :key='index' :class="{'selected':selected2==index}"  @click="isselected2(index)">
                            <p v-on:click="show = !show">{{item}}</p>
                        </div>
                    </div>
                </div>
                <transition name="fade">
                <div class="hot-goods-nav" v-if="show" style="padding: 0 0.1rem 0.1rem 0.1rem; ">
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:void(0);" class="active">全部</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">全部</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">全部</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">全部</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">全部</a>
                        </li>
                    </ul>
                </div>
                </transition>
            </div>
             
            <div class="data_template" ref="dataTemplate">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/brand.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/change-brand.jpg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 热卖商品 -->
        <div class="mod-hot-goods">
            <div class="mod-title" style="line-height: 0.6rem; top: 0px; z-index: 99;padding-left:10px">
                <i class="mod-title-brand-icon"></i>
                <span class="mod-title-text" style="color:#ff0000">热卖商品</span>
                <span style="color:#656565;font-size:0.12rem;font-weight:300;margin-left:0.2rem;">为您精选优质商品</span>
            </div>
            <div class="near-bussiness bussiness-bar" style="display: block; top: 0.5rem; z-index: 999999; position: static;" ref='hotGoodsFixed'>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"  style="width:69.5556px; margin-right:12px;" v-for="(item , index) in bussinessBar1" :key='index' :class="{'selected':selected3==index}"  @click="isselected3(index)">
                            <p  v-on:click="hotShow = !hotShow">{{item}}</p>
                        </div>
                    </div>
                </div>
                  <transition name="fade">
                    <div class="hot-goods-nav" v-if="hotShow" style="padding: 0 0.1rem 0.1rem 0.1rem;">
                        <ul class="clearfix">
                            <li>
                                <a href="javascript:void(0);" class="active">全部</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">全部</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">全部</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">全部</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">全部</a>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div class="shop_template" ref="shopTemplate">
                <ul id="hot-goods-list" class="clearfix pl-20">
                    <li class="hot-goods-list-li">
                        <a class="com-goodslist-item" href="#">
                            <img src="../assets/img/1_06040834850016145_240.png" alt="">
                            <div class="describe-content">
                                <p class="goods-title nowrap2">哈尔滨啤酒冰爽330ml【24罐/箱】</p>
                                <p style="color:#666">条码：256468468498</p>
                                <div class="goods-price">
                                    <span class="text-price1">¥</span>
                                    <span class="text-price2">2.00</span>
                                    <span style="font-size:0.1rem;font-weight:500;">/罐</span>
                                    <span class="total-val">48.00/箱</span>
                                    <div class="text-default-rem before-price">
                                        <del style="font-size:0.1rem;line-height: .17rem;color:#999">原价 : ¥2.30<span style="font-size:0.1rem;font-weight:500;"></span></del>
                                    </div>                            
                                </div>
                            </div>
                        </a>
                         <div class="go-shoppingcart">
                            <a href="#" class="shoppingcart">
                                <img src="http://www.kuaixiaoapp.com/wap/resource/img/shop-car.png" alt="shop-car.png">
                            </a>
                        </div>
                    </li>
                    <li class="hot-goods-list-li">
                        <a class="com-goodslist-item" href="#">
                            <img src="../assets/img/1_06040834850016145_240.png" alt="">
                            <div class="describe-content">
                                <p class="goods-title nowrap2">哈尔滨啤酒冰爽330ml【24罐/箱】</p>
                                <p style="color:#666">条码：256468468498</p>
                                <div class="goods-price">
                                    <span class="text-price1">¥</span>
                                    <span class="text-price2">2.00</span>
                                    <span style="font-size:0.1rem;font-weight:500;">/罐</span>
                                    <span class="total-val">48.00/箱</span>
                                    <div class="text-default-rem before-price">
                                        <del style="font-size:0.1rem;line-height: .17rem;color:#999">原价 : ¥2.30<span style="font-size:0.1rem;font-weight:500;"></span></del>
                                    </div>                            
                                </div>
                            </div>
                        </a>
                         <div class="go-shoppingcart">
                            <a href="#" class="shoppingcart">
                                <img src="http://www.kuaixiaoapp.com/wap/resource/img/shop-car.png" alt="shop-car.png">
                            </a>
                        </div>
                    </li>
                    <li class="hot-goods-list-li">
                        <a class="com-goodslist-item" href="#">
                            <img src="../assets/img/1_06040834850016145_240.png" alt="">
                            <div class="describe-content">
                                <p class="goods-title nowrap2">哈尔滨啤酒冰爽330ml【24罐/箱】</p>
                                <p style="color:#666">条码：256468468498</p>
                                <div class="goods-price">
                                    <span class="text-price1">¥</span>
                                    <span class="text-price2">2.00</span>
                                    <span style="font-size:0.1rem;font-weight:500;">/罐</span>
                                    <span class="total-val">48.00/箱</span>
                                    <div class="text-default-rem before-price">
                                        <del style="font-size:0.1rem;line-height: .17rem;color:#999">原价 : ¥2.30<span style="font-size:0.1rem;font-weight:500;"></span></del>
                                    </div>                            
                                </div>
                            </div>
                        </a>
                         <div class="go-shoppingcart">
                            <a href="#" class="shoppingcart">
                                <img src="http://www.kuaixiaoapp.com/wap/resource/img/shop-car.png" alt="shop-car.png">
                            </a>
                        </div>
                    </li>
                    <li class="hot-goods-list-li">
                        <a class="com-goodslist-item" href="#">
                            <img src="../assets/img/1_06040834850016145_240.png" alt="">
                            <div class="describe-content">
                                <p class="goods-title nowrap2">哈尔滨啤酒冰爽330ml【24罐/箱】</p>
                                <p style="color:#666">条码：256468468498</p>
                                <div class="goods-price">
                                    <span class="text-price1">¥</span>
                                    <span class="text-price2">2.00</span>
                                    <span style="font-size:0.1rem;font-weight:500;">/罐</span>
                                    <span class="total-val">48.00/箱</span>
                                    <div class="text-default-rem before-price">
                                        <del style="font-size:0.1rem;line-height: .17rem;color:#999">原价 : ¥2.30<span style="font-size:0.1rem;font-weight:500;"></span></del>
                                    </div>                            
                                </div>
                            </div>
                        </a>
                         <div class="go-shoppingcart">
                            <a href="#" class="shoppingcart">
                                <img src="http://www.kuaixiaoapp.com/wap/resource/img/shop-car.png" alt="shop-car.png">
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// 引入Toast弹出框
import {Toast} from 'mint-ui';
//  引入头部组件
import navTitle from './common/nav-title.vue';
//  引入热卖商品的li组件
import hotGoods from './common/hot-goods.vue';
//  引入公告栏组件
import publicTitle from './common/public-title.vue';
import Swiper from 'swiper';
export default {
  name: 'index',
  components: {
    navTitle,
    hotGoods,
    publicTitle,
  },
  data() {
    return {
      bussinessBar1: [
        '精选',
        '上新',
        '奶品水饮',
        '休闲食品',
        '中外名酒',
        '粮油副食',
        '家庭清洁',
        '个人护理',
        '家居家纺',
        '厨房卫浴',
        '母婴用品',
        '办公用品',
      ],
        // 附近商家的tab判断添加类的字段
      selected: 0,
       // 品牌推荐的tab判断添加类的字段
      selected2: 0,
      // 热卖商品的tab判断添加类的字段
      selected3: 0,
      show: true,
      hotShow: true,
      shopDetail: [
        {
          id: 1,
          img: require('../assets/img/hot-shop.jpg'),
          name: '深圳市礼尚汇贸易有限公司',
          banrd: '百草味  三只松鼠',
          time: '2014-01-13',
          count: 300,
          sale: '金额满500元减50元 活动进行中',
          heart: false,
        },
        {
          id: 2,
          img: require('../assets/img/hot-shop.jpg'),
          name: '深圳市礼尚汇贸易有限公司',
          banrd: '百草味  三只松鼠',
          time: '2014-01-13',
          count: 300,
          sale: '金额满500元减50元 活动进行中',
          heart: false,
        },
      ],

      // 公告栏数据
      textArr: ['我是谁', '我是谁', '我是谁'],
      textArr1: ['我是谁', '我是谁', '我是谁'],
      //   附近商家的top值
      storesTop: '',
      //    附近商家的自身的高
      storesHeight: '',
      //   判断附近商家的是否需要吸顶的字段
      header: '',
      //   判断品牌推荐的是否需要吸顶的字段
      header2: '',
      //    判断热卖商品的是否需要吸顶的字段
      header3:'',
    //   品牌推荐的top值
      brandTop: '',
      //     品牌推荐的自身的高
      brandHeight: '',
    //   判断附近商家吸顶元素什么时候隐藏的字段
      brandfixedNone: true,
    //   判断热门商品是否需要吸顶的字段
      hotGoodsfixedNone:true,
    //   热卖商品的top值
      hotGoodsTop:'',
    //   热卖商品自身的高
      hotGoodsHeight:'',
    };
  },
  created() {
    console.log('object');
  },
  mounted() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#f8f8f8');
    // swiper 的参数
    var mySwiper = new Swiper('.swiper-container', {
      freeMode: true,
      width: 69,
      slideToClickedSlide: true,
      normalizeSlideIndex: false,
      resistance: false,
      resistanceRatio: 0.7,
      iOSEdgeSwipeDetection: true,
      slidesPerView: 'auto',
      slidesOffsetAfter: -250,
    });
    this.$nextTick(() => {
      // 获取附近商家需要吸顶的元素
      let headerFixed = this.$refs.storesFixed;
      // 获取品牌推荐要吸顶的元素
      let headerFixed2 = this.$refs.brandFixed;
    //   获取热门商品需要吸顶的元素
      let headerFixed3=this.$refs.hotGoodsFixed;
    //   console.log(headerFixed3);
      // 这里要得到top的距离和元素自身的高度
      //  附近商家需要吸顶的元素的top值和自身的高度
      this.storesTop = headerFixed.offsetTop;
      this.storesHeight = headerFixed.offsetHeight;
      //  品牌推荐需要吸顶的元素的top值和自身的高度
      this.brandTop = headerFixed2.offsetTop;
      this.brandHeight = headerFixed2.offsetHeight;
      //  热卖商品需要吸顶的元素的top值和自身的高度
      this.hotGoodsTop = headerFixed3.offsetTop;
      this.hotGoodsHeight = headerFixed3.offsetHeight;

    });
    // 监听页面滚动的回调
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
 },
  methods: {
    // 收藏事件
    shoreUp(el, index) {
      // this.shopDetail.heart=!this.shopDetail.heart
      if (el == true) {
        this.shopDetail[index].heart = false;
        Toast({
          message: '删除成功',
          duration: 1000,
        });
        // console.log(111);
      } else {
        this.shopDetail[index].heart = true;
        //  console.log(this.shopDetail[index].heart);
        Toast({
          message: '收藏成功',
          duration: 1000,
        });
      }
    },
    // 商家精选点击添加类的事件
    isselected(index) {
      this.selected = index;
    },
    // 品牌精选点击添加类的事件
    isselected2(index) {
      this.selected2 = index;
    },
    //热卖商品点击添加类的事件
    isselected3(index) {
      this.selected3 = index;
    },
    handleScroll() {
        // 监听滚动条的高度
      let scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;

      // 获取品牌推荐需要固定元素的高和到顶部的距离
    //   let headerFixed2 = this.$refs.brandFixed;
      // 品牌推荐需要固定元素到顶部的距离
      var brandTop = this.$refs.brandFixed.offsetTop;
      // 品牌推荐需要固定元素的高
      var brandHeight = this.$refs.brandFixed.offsetHeight;
    //   console.log(brandTop - scrollTop, brandHeight);
      //  距离顶部的高度小于200就返回一个false
      this.brandfixedNone = brandTop - scrollTop >= 200;

    // 获取热门商品需要固定元素的高和到顶部的距离
     var hotGoodsTop =  this.$refs.hotGoodsFixed.offsetTop;
     var hotGoodsHeight=this.$refs.hotGoodsFixed.offsetHeight;
      //  距离顶部的高度小于300就返回一个false
      this.hotGoodsfixedNone = hotGoodsTop - scrollTop >= 300;
      // 如果滚动的距离大于等于附近商家吸顶元素距离顶部的距离 返回true 否则返回false
      this.header = scrollTop >= this.storesTop - this.storesHeight;
      // 如果滚动的距离大于等于品牌推荐吸顶元素距离顶部的距离 返回true 否则返回false
      this.header2 =scrollTop >= this.brandTop - this.brandHeight + this.storesHeight;
       // 如果滚动的距离大于等于热卖商品吸顶元素距离顶部的距离 返回true 否则返回false
      this.header3 =scrollTop >= this.hotGoodsTop -( this.hotGoodsHeight+this.brandHeight+this.storesHeight)+this.brandHeight

    //   如果滚动的距离大于等于附近商家吸顶元素距离，则改为固定定位，给后面的元素加个margin
      if (this.header) {
        this.$refs.storesFixed.style.position = 'fixed';
        this.$refs.Businessmen.style.marginTop = 0.45 + 'rem';
      } else {
        this.$refs.storesFixed.style.position = 'static';
        this.$refs.Businessmen.style.marginTop = 0;
      }
    //   如果滚动的距离大于等于品牌推荐吸顶元素距离，则改为固定定位，给后面的元素加个margin
      if (this.header2) {
        this.$refs.brandFixed.style.position = 'fixed';
        this.$refs.dataTemplate.style.marginTop = brandHeight + 'px';
      } else {
        this.$refs.brandFixed.style.position = 'static';
        this.$refs.dataTemplate.style.marginTop = 0;
      }
       //   如果滚动的距离大于等于热卖商品吸顶元素距离，则改为固定定位，给后面的元素加个margin
      if (this.header3) {
        this.$refs.hotGoodsFixed.style.position = 'fixed';
        this.$refs.shopTemplate.style.marginTop = hotGoodsHeight + 'px';
      } else {
        this.$refs.hotGoodsFixed.style.position = 'static';
        this.$refs.shopTemplate.style.marginTop = 0;
      }
    },
  },
};
</script>
<style scoped>
@import url('../../node_modules/swiper/dist/css/swiper.css');
body {
  background: #f5f4f4;
  padding: 0px 0px 50px 0px;
}

.swiper {
  margin-top: 50px;
  width: 100%;
  height: 130px;
}
.swiper img {
  width: 100%;
  height: 100%;
}
#hudu {
  width: 100%;
  /* background-color: red; */
  position: absolute;
  top: 1.69rem;
  z-index: 2;
}
.mod-news {
  /* width: 100%; */
  height: 40px;
  padding: 7px 10px;
  display: flex;
  display: -webkit-flex;
  background-color: #fff;
  align-items: center;
}
.mod-news .news-left a {
  width: 0.95rem;
  height: 0.18rem;
  display: inline-block;
  margin-left: 8px;
}
.mod-news .news-left img {
  width: 100%;
  height: 100%;
  margin-right: 5px;
}
.mod-news .news-right {
  flex: 1;
  display: flex;
  display: -webkit-flex;
}
.news-right .title {
  width: 32px;
  height: 100%;
  margin-left: 10px;
}
.news-right .title img {
  width: 100%;
  height: 18px;
}
.news-right .hot-text {
  flex: 1;
  height: 16px;
  margin: 0 10px;
}
.news-right .hot-text p {
  margin-bottom: 5px;
  padding: 2px;
  color: #666;
}
.nav-bar {
  height: 120px;
  padding-bottom: 5px;
  display: flex;
  display: -webkit-flex;
  color: #000;
  font-size: 12px;
  border-top: 2px solid #f8f8f8;
}
.nav-bar .now-seckill {
  border-right: 0.02rem solid #f8f8f8;
}
.nav-bar .now-seckill,
.now-shop {
  flex: 1;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 5px;
}
.nav-bar .now-shop {
  flex: 1;
  background-color: #ffffff;
}
.nav-bar .now-seckill-top {
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
}

.nav-bar .now-seckill-top-logo {
  width: 80px;
  height: 20px;
  /* padding: 5px; */
  margin: 0px 0px 10px 3px;
  display: inline-block;
  line-height: 20px;
  font-weight: 600;
  font-size: 13px;
}
.nav-bar .now-seckill-top-logo i.skill-icon {
  background: url('../assets/img/skill_icon.png') no-repeat left center;
  width: 0.18rem;
  height: 0.18rem;
  background-size: 0.18rem;
  display: block;
  float: left;
  margin-right: 3px;
}
.nav-bar .now-seckill-top-logo i {
  width: 0.18rem;
  height: 0.18rem;
  background-size: 0.18rem;
  display: block;
  float: left;
  margin-right: 3px;
}
.nav-bar .now-seckill .end-time {
  color: black;
  margin-right: 3px;
}
.now-seckill-img {
  display: flex;
  display: -webkit-flex;
  height: 67px;
}
.now-seckill-img a {
  display: block;
  height: 100%;
  width: 67px;
  margin-left: 10px;
}
.now-seckill-img .seckill-img img {
  width: 100%;
  height: 100%;
}
.nav-bar .now-seckill-top span.point {
  color: black;
}
.now-seckill-top-logo.sort-logo i {
  background: url('../assets/img/soreshop.png') no-repeat center;
  background-size: contain;
}
/* 零食酒水 */
.sore-brand {
  /* padding: 5px; */
  /* background-color: #fff; */
  margin-bottom: 5px;
}
.sore-brand ul.clearfix {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
.container {
  border-radius: 5px;
  background-color: #fff;
}
.sore-brand .container ul li {
  float: left;
  width: 20%;
  text-align: center;
  height: 96px;
}
.sore-brand .container ul li a {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 13px;
  padding: 10px 0px;
}
.sore-brand .container ul li a span {
  color: #666;
  font-size: 12px;
}
.sore-brand .container ul li a img {
  width: 50px;
  display: block;
  margin: 0 auto 0.05rem;
  border-radius: 50%;
}
.sore-brand .container ul li a {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
  display: block;
  font-size: 12px;
}
.mod-hot-stores {
  background-color: #fff;
}
.mod-title {
  width: 100%;
  height: 0.46rem;
  font-size: 0.16rem;
  /* line-height: 0.46rem; */
  color: #0171fc;
  position: relative;
  font-weight: 700;
}
.mod-title i.mod-title-icon {
  width: 2px;
  height: 12px;
  display: block;
  position: absolute;
  left: 75px;
  top: 25px;
  background-color: #a4a4a4;
  /* margin-right: 10px;
        margin-top: 12px; */
}
.near-bussiness {
  padding: 0 0.1rem 0.1rem 0.1rem;
  background: #fff;
  width: 100%;
}
.near-bussiness .swiper-wrapper .swiper-slide.selected {
  color: #ff9000;
  border-bottom: 0.025rem solid #ff9000;
}
.near-bussiness .swiper-wrapper .swiper-slide {
  text-align: center;
  font-size: 0.13rem;
  height: 0.35rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  cursor: pointer;
  color: #656565;
  font-weight: 600;
  /* width: 1.4rem !important; */
}
.Businessmen-recommend {
  padding: 0px 10px;
}
.hot-stores-list-box {
  box-shadow: 0 0 0.05rem 0.06rem #f6f6f6;
}
.hot-stores-list li {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  align-items: center;
  height: 110px;
  position: relative;
}
li .com-storelist-item {
  position: relative;
  background-color: #fff;
  width: 88px;
  height: 88px;
}
.mod-hot-stores {
  /* width: 88px;
    height: 88px; */
}
.mod-hot-stores a .img-show {
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #f2f2f2;
  display: block;
}
.mod-hot-stores .img-show img {
  /* margin: .4rem 0 0 .025rem; */
  margin: 10px auto;
  max-width: 67px;
  max-height: 67px;
}
.hot-stores-list .describe-content {
  flex: 1;
  position: relative;
  height: 100%;
  padding: 5px 0px 0px 7px;
}
.hot-stores-list .describe-content a.shopName {
  display: block;
  font-size: 14px;
  padding-bottom: 2px;
  color: #232323;
  height: 25px;
}
.hot-stores-list .describe-content .detail p {
  padding-bottom: 2px;
  color: #909090;
  font-size: 12px;
  margin-bottom: 0px;
  height: 15px;
}
.hot-stores-list .describe-content a.favourable {
  color: #ff273b;
  display: block;
  margin-top: 10px;
}
.hot-stores-list .describe-content .enterShop {
  position: absolute;
  width: 50px;
  height: 23px;
  display: inline-block;
  right: 5px;
  bottom: 3px;
}
.hot-stores-list .describe-content .enterShop a {
  display: block;
  text-align: center;
  line-height: 23px;
}
.hot-stores-list .describe-content .enterShop a i {
  background: url('../assets/img/goshoping.png') no-repeat left top;
  background-size: 0.5rem 0.2rem;
  width: 50px;
  height: 0.2rem;
  bottom: 0.05rem;
  display: block;
}
.hot-stores-list .describe-content .heart {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 10px;
  top: 9px;
}
.hot-stores-list .describe-content .heart i {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #ea7806;
}
.mod-hot-stores .more {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
}
.mod-hot-stores .more i {
  background: url('http://www.kuaixiaoapp.com/wap/resource/img/icon-dropup.png');
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  background-size: cover;
  transform: rotate(180deg);
  vertical-align: -4.6%;
  margin-left: 0.03rem;
}
.mod-brand {
  background-color: #fff;
  margin-top: 10px;
  /* padding: 7px 10px ; */
  /* position: relative; */
}
.mod-title-brand-icon {
  width: 0.02rem;
  height: 0.12rem;
  display: block;
  position: absolute;
  left: 0.85rem;
  top: 0.25rem;
  background-color: #a4a4a4;
}
/* 品牌推荐与热卖商品公共使用的样式 */
.hot-goods-nav {
  margin-top: 0.05rem;
  width: 100%;
  background: #fff;
}
.hot-goods-nav li {
  width: 18%;
  height: 22px;
  line-height: 22px;
  float: left;
  text-align: center;
  margin-right: 0.04rem;
  margin: 0px 4px 8px 0px;
}
.hot-goods-nav li a.active {
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(left, #ff6000, #ff0500);
  color: #fff;
  display: block;
  border-radius: 20px;
}
.brand-stores-nav li {
  width: 23.5%;
  height: 26px;
  line-height: 26px;
  background: #eee;
  margin-right: 5px;
  float: left;
  text-align: center;
  margin-bottom: 5px;
}
.data_template ul {
  display: flex;
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.data_template ul li {
  width: 25%;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
  border-bottom: none;
  border-right: none;
  height: 93px;
}
.data_template ul li:nth-child(4n) {
  border-right: 1px solid #f2f2f2;
}
.data_template ul li:nth-child(n + 13) {
  border-bottom: 1px solid #f2f2f2;
}
.data_template ul li a {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.data_template ul li a img {
  max-width: 82px;
  max-height: 27px;
}
.data_template ul li:nth-child(16) img {
  transform: scale(2.5);
}

.mod-hot-goods {
  background-color: #fff;
  margin-top: 10px;
}
#hot-goods-list {
  background: #f2f2f2;
  min-height: 80vh;
}
#hot-goods-list .hot-goods-list-li {
  width: 50%;
  float: left;
  padding-right: 0.1rem;
  margin: 0.1rem 0 0.16rem 0;
  position: relative;
}
#hot-goods-list .hot-goods-list-li .go-shoppingcart{
    width: 26px;
    height: 26px;
    position: absolute;
    top: 239px;
    left: 135px;
}
#hot-goods-list .hot-goods-list-li .go-shoppingcart a{
    display: block;
    width: 100%;
    height: 100%;
}
#hot-goods-list .hot-goods-list-li .go-shoppingcart img{
     width: 100%;
    height: 100%;
}
.hot-goods-list-li a.com-goodslist-item {
  display: block;
  padding: 0;
  border-radius: 0.1rem;
  background-color: #fff;
}
.hot-goods-list-li .com-goodslist-item img {
  margin: 0.1rem 0.1rem;
  max-width: 1.5rem;
  max-height: 1.5rem;
}
.hot-goods-list-li .com-goodslist-item .describe-content {
  padding: 0.1rem;
}
.hot-goods-list-li .com-goodslist-item .describe-content .goods-title {
  font-size: 0.14rem;
  font-weight: 700;
  color: #232323;
  height: 0.3rem;
  line-height: 0.15rem;
  margin-bottom: 7px;
}
.hot-goods-list-li .com-goodslist-item .goods-price {
  margin-top: 0.05rem;
  color: #333;
  font-size: 0.15rem;
}
.hot-goods-list-li .com-goodslist-item .goods-price .total-val {
  line-height: 0.16rem;
  height: 0.16rem;
  margin-left: 0.05rem;
  display: inline-block;
  font-size: 0.1rem;
  color: #fff;
  padding: 0 0 0.025rem;
  background: -webkit-linear-gradient(left, #fe8901, #f01a13);
  border-radius: 0.04rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
