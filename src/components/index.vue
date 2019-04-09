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
            <div class="mod-title">
                <span class="mod-title-text">附近商家</span>
                <i class="mod-title-icon"></i>
                <span style="color:#656565;font-size:0.12rem;font-weight:300;padding-left:0.2rem;">为您精选优质商家</span>
            </div>
            <!-- 商家导航栏 -->
            <div class="near-bussiness bussiness-bar" style="display: block; top: 0.8rem; z-index: 999999; position: static;">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"  style="width:69.5556px; margin-right:12px;" v-for="(item , index) in bussinessBar1" :key='index' :class="{'selected':selected==index}"  @click="isselected(index)">
                            <p style="color:#656565">{{item}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商家推荐查看更多 -->
            <div class="Businessmen-recommend">
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
                                <a href="#" class="shopName">{{item.name}}</a>
                                <div class="detail">
                                    <p>经营品牌 : {{item.banrd}}</p>
                                    <p>起  售  额 :{{item.count}}</p>
                                </div>
                                <a href="#" class="favourable">{{item.sale}}</a>
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
        <!-- 品牌推荐 -->
        <div class="mod-brand">
            <div class="mod-title" style="margin-left:15px;">
                <i class="mod-title-icon"></i>
                <span class="mod-title-text" style="color:#f77a00">品牌推荐</span>
                <span style="color:#656565;font-size:0.12rem;font-weight:300;padding-left:0.2rem;">为您精选优质品牌</span>
            </div>
           <div class="near-bussiness bussiness-bar" style="display: block; top: 0.8rem; z-index: 999999; position: static;">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"  style="width:69.5556px; margin-right:12px;" v-for="(item , index) in bussinessBar1" :key='index' :class="{'selected':selected2==index}"  @click="isselected2(index)">
                            <p style="color:#656565" v-on:click="show = !show">{{item}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="hot-goods-nav" v-if="show" style="    padding: 0 0.1rem 0.1rem 0.1rem;">
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
            <div class="data_template">
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
            <div class="mod-title">
                <i class="mod-title-icon"></i>
                <span class="mod-title-text">热卖商品</span>
            </div>
            <div class="shop_template">
                <hotGoods :hotGoods='hotGoods' v-for="(item ,index) in hotGoods" :key='index' bgcolor='#ff273b'>
                    <img :src="item.img" alt="" slot="img">
                    <a href="#" class="shopName" slot="shopName">{{item.name}}</a>
                    <p>条码 : {{item.goods_barcode}}</p>
                    <p>{{item.store_name}}</p>
                    <p><del>原价 :{{item.goods_price}}</del></p>
                    <p style="color:#ff273b;font-weight:700">
                        <span class="text-price1" style="font-size:0.16rem">¥{{item.goods_activity_price}}</span><span class="text-price2">/包<span> ¥{{item.goods_price}}/箱</span></span>
                    </p>
                </hotGoods>
            </div>
        </div>
    </div>
</template>
<script>
// 引入Toast弹出框
 import { Toast } from 'mint-ui';
//  引入头部组件
 import navTitle from './common/nav-title.vue'
//  引入热卖商品的li组件
 import hotGoods from './common/hot-goods.vue'
//  引入公告栏组件
 import publicTitle from './common/public-title.vue'
 import Swiper from "swiper"
export default {
    name:'index',
    components:{
        navTitle,
        hotGoods,
        publicTitle,
    },
    data() {
        return {
           bussinessBar1:[
               '精选','上新','奶品水饮','休闲食品','中外名酒','粮油副食','家庭清洁','个人护理','家居家纺','厨房卫浴','母婴用品','办公用品'
           ],
            selected:0,
            // 附近商家的数据
            selected2:0,
            show:true,
            shopDetail:[
                {
                id:1,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                time:"2014-01-13",
                count:300,
                sale:"金额满500元减50元 活动进行中",
                heart:false,
                },
                {
                id:2,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                time:"2014-01-13",
                count:300,
                sale:"金额满500元减50元 活动进行中",
                heart:false,
                },
            ],
            // 热卖商品li组件需要传递的数据
            hotGoods:[
                {
                id:1,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_barcode:6923308815678,
                goods_activity_price:300,
                store_name:'商家 : 深圳市广昌盛贸易有限公司',
                 goods_price:300,
                },
                {
                id:2,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_barcode:6923308815678,
                goods_activity_price:300,
                store_name:'商家 : 深圳市广昌盛贸易有限公司',
                 goods_price:300,
                },
            ],
            // 公告栏数据
            textArr:[
               "我是谁",
               "我是谁",
                "我是谁",
            ],
            textArr1:[
               "我是谁",
               "我是谁",
                "我是谁",
            ],
           
        }
    },
    created () {
        console.log('object');
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        // swiper 的参数
        var mySwiper = new Swiper('.swiper-container', {
         freeMode:true,
         width : 69,
         slideToClickedSlide:true,
         normalizeSlideIndex:false,
         resistance : false,
         resistanceRatio : 0.7,
         iOSEdgeSwipeDetection : true,
         slidesPerView :'auto',
         slidesOffsetAfter : -250,
        })
  },
    methods: {
    // 附近商家下面的一排点击事件和点到排序显示隐藏的li
        active (index) {
            this.ins=index
            //    console.log(index);
            //    console.log(this.sort[index]);
               if(this.sort[index]==this.sort[4]){
                   this.show=!this.show
                //    console.log(111);
                //    console.log(this.show);
               }
        },
        // 隐藏的li的点击显示高亮事件
        serach(index){
            this.num=index
            // console.log(index);
        },
         // 未隐藏的li的点击显示高亮事件
        serachHot(index){
            this.sub=index
            // console.log(index);
        },
         // 收藏事件
        shoreUp(el,index){
            // this.shopDetail.heart=!this.shopDetail.heart
            if(el==true){
                this.shopDetail[index].heart=false;
                Toast({
                    message: '删除成功',
                    duration: 1000
                });
                // console.log(111);
            }else{
                this.shopDetail[index].heart=true;
                //  console.log(this.shopDetail[index].heart);
                Toast({
                    message: '收藏成功',
                    duration: 1000
                });
            }
            
        },
        // 商家精选点击添加类的事件
        isselected(index){
            this.selected=index
        },
        isselected2(index){
            this.selected2=index
        }
    }
}
</script>
<style scoped>
@import url('../../node_modules/swiper/dist/css/swiper.css');
    body{
        background: #f5f4f4 ;
        padding: 0px 0px 50px 0px;;
    }

    .swiper{
        margin-top: 50px;
        width: 100%;
        height: 130px;
    }
    .swiper img{
        width: 100%;
        height: 100%;
    }
    #hudu{
        width: 100%;
        /* background-color: red; */
        position: absolute;
        top: 1.69rem;
        z-index: 2;
    }
    .mod-news{
        /* width: 100%; */
        height: 40px;
        padding:  7px 10px;
        display: flex;
        display: -webkit-flex;
        background-color: #fff;
        align-items: center;
    }
    .mod-news .news-left a{
        width: 0.95rem;
        height: 0.18rem;
        display: inline-block;
        margin-left: 8px
    }
    .mod-news .news-left img{
        width:100%;
        height: 100%;
        margin-right: 5px;
    }
    .mod-news .news-right{
        flex: 1;
        display: flex;
         display: -webkit-flex;
    }
    .news-right .title{
        width: 32px;
        height: 100%;
        margin-left: 10px;
    }
    .news-right .title img{
        width: 100%;
        height: 18px;
    }
    .news-right .hot-text{
        flex: 1;
        height: 16px;
        margin: 0 10px;
    } 
    .news-right .hot-text p{
        margin-bottom: 5px;
        padding: 2px;
        color: #666;
    }
    .nav-bar{
        height: 120px;
        padding-bottom:5px;
        display: flex;
         display: -webkit-flex;
        color: #000;
        font-size: 12px;
        border-top: 2px solid #f8f8f8;
    }
    .nav-bar .now-seckill{
        border-right: 0.02rem solid #f8f8f8;
    }
    .nav-bar .now-seckill,.now-shop{
        flex: 1;
        background-color: #ffffff;
        padding: 8px ;
        border-radius: 5px;
    }
    .nav-bar .now-shop{
        flex: 1;
        background-color: #ffffff;
    }
    .nav-bar .now-seckill-top{
        width: 100%;
        height: 20px;
        margin-bottom: 10px;
    }
    
    .nav-bar .now-seckill-top-logo{
        width: 80px;
        height: 20px;
        /* padding: 5px; */
        margin: 0px 0px 10px 3px;
        display: inline-block;
        line-height: 20px;
        font-weight: 600;
        font-size: 13px;
    }
    .nav-bar .now-seckill-top-logo i.skill-icon{
        background: url('../assets/img/skill_icon.png')  no-repeat left center;
        width: .18rem;
        height: .18rem;
        background-size: 0.18rem;
        display: block;
        float: left;
        margin-right: 3px;
    }
    .nav-bar .now-seckill-top-logo i{
        width: .18rem;
        height: .18rem;
        background-size: 0.18rem;
        display: block;
        float: left;
        margin-right: 3px;
    }
    .nav-bar .now-seckill .end-time{
        color: black;
         margin-right: 3px;
    }
     .now-seckill-img{
         display: flex;
         display: -webkit-flex;
         height: 67px;
     }
    .now-seckill-img a{
        display: block;
        height: 100%;
        width: 67px;
        margin-left: 10px;
    }
    .now-seckill-img .seckill-img img{
        width:100%;
        height: 100%;
    }   
    .nav-bar .now-seckill-top span.point{
        color: black;
    }
    .now-seckill-top-logo.sort-logo i{
        background: url('../assets/img/soreshop.png') no-repeat  center;
        background-size: contain;
    }
    /* 零食酒水 */
    .sore-brand {
        /* padding: 5px; */
        /* background-color: #fff; */
        margin-bottom: 5px;
    }
    .sore-brand ul.clearfix{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        -webkit-flex-wrap:wrap;
    }
    .container{
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
    margin: 0 auto .05rem;;
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
    .mod-hot-stores{
        padding: 7px 10px;
        background-color: #fff;
    }
    .mod-title{
        width: 100%;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        color: #0171fc;
        position: relative;
        font-weight: 700;
    }
     .mod-title i.mod-title-icon{
        width: 2px;
        height: 12px;
        display: block;
        position: absolute;
        left: 75px;
        top: 17px;
        background-color: #a4a4a4;
        /* margin-right: 10px;
        margin-top: 12px; */
     }
    .near-bussiness {
        padding: 0 0.1rem 0.1rem 0.1rem;
        background: #fff;
        width: 100%;
    }
    .near-bussiness .swiper-wrapper .swiper-slide.selected{
        color: #ff9000;
        border-bottom: 0.025rem solid #ff9000;
    }
    .near-bussiness .swiper-wrapper .swiper-slide{
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
    .Businessmen-recommend{
        box-shadow: 0 0 0.05rem 0.06rem #f6f6f6;
    }
    .hot-stores-list li{
         display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
        align-items: center;
        height: 110px;
        position: relative;
    }
    li.com-storelist-item {
        position: relative;
        padding: 7px 10px;
        background-color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .mod-hot-stores .img-show a{
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid #f2f2f2;
        display: block;
    }
    .mod-hot-stores .img-show img {
    /* margin: .4rem 0 0 .025rem; */
    margin: 10px auto;
    max-width:67px;
    max-height:67px;
    }
    .describe-content{
        flex: 1;
        position: relative;
        height: 88px;
        padding: 3px;
    }
    .describe-content a.shopName{
        display: block;
        font-size: 14px;
        padding-bottom: 2px;
        color: #232323;
    }
    .describe-content .detail p{
        padding-bottom: 2px;
        color: #909090 ;
        font-size:12px;
        margin-bottom: 0px;
    }
    .describe-content a.favourable{
            color: #ff273b;
            display: block;
    }
     .describe-content .enterShop{
         position: absolute;
         width: 88px;
        height: 23px;
        display: inline-block;
        right: -11px;
        bottom: 3px;

     }
      .describe-content .enterShop a{
          display: block;
          text-align: center;
          line-height: 23px;
      }
      .describe-content .enterShop a i{
          background: url('../assets/img/goshoping.png') no-repeat left top;
          background-size: 0.65rem 0.2rem;
          width: 65px;
            height: .2rem;
         bottom: .05rem;
         display: block;
      }
      .describe-content .heart{
          width: 18px;
          height: 18px;
          position: absolute;
           right: 10px;
        top: 9px;
      }
      .describe-content .heart i{
         display: inline-block;
         width: 100%;
         height: 100%;
        font-size: 18px;
        color: #ea7806
      }
    .mod-hot-stores .more{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
    }
    .mod-hot-stores .more i{
        background: url('http://www.kuaixiaoapp.com/wap/resource/img/icon-dropup.png');
        display: inline-block;
        width: .15rem;
        height: .15rem;
        background-size: cover;
        transform: rotate(180deg);
        vertical-align: -4.6%;
        margin-left: .03rem;
    }
    .mod-brand{
        background-color: #fff;
        margin-top: 10px;
        /* padding: 7px 10px ; */
    }
    .mod-brand .hot-goods-nav{
        margin-top: 0.05rem;
        width: 100%;
        background: #fff;
    }
    .mod-brand .hot-goods-nav li{
        width: 18%;
        height: 22px;
        line-height: 22px;
        float: left;
        text-align: center;
        margin-right: 0.04rem;
        margin: 0px 4px 8px 0px ;
    }
    .mod-brand .hot-goods-nav li a.active{
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(left,#ff6000,#ff0500);
        color: #fff;
        display: block;
        border-radius: 20px;
    }
    .brand-stores-nav li{
         width: 23.5%;
        height: 26px;
        line-height: 26px;
        background: #eee;
        margin-right: 5px;
        float: left;
        text-align: center;
        margin-bottom: 5px;
    }
    .data_template ul{
        display: flex;
        display:-webkit-flex;
        -webkit-flex-wrap:wrap;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .data_template ul li{
        width: 25%;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        border-bottom: none;
        border-right: none;
        height: 77px;
    }
    .data_template ul li:nth-child(4n){
        border-right: 1px solid #f2f2f2;
    }
    .data_template ul li:nth-child(n+13){
        border-bottom: 1px solid #f2f2f2;
    }
    .data_template ul li a{
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
    .data_template ul li a img{
        max-width: 82px;
        max-height: 27px;
    }
    .data_template ul li:nth-child(16) img{
        
       transform: scale(2.5)
    }
    .mod-hot-goods{
        padding: 7px 10px;
    }
    .shop_template li{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    .com-goodslist-item a{
        display: block;
    }

   .shop_template .img-show[data-v-47323bf2] {
    width: 88px;
    height: 88px;
    text-align: center;
    border: 1px solid #f2f2f2;
}
.shop_template .img-show img{
        margin: 10px auto;
        max-width: 0.67rem;
        max-height:0.67rem;
    }
.mod-hot-goods{
    background-color: #fff;
    margin-top: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
