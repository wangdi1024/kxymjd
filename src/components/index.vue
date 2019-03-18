<template>
    <div>
        <!-- 头部 -->
        <nav-title></nav-title>
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
        <!-- 活动公告 -->
        <div class="mod-news">
            <div class="news-left">
                <a href="javascript:;">
                    <img src="../assets/img/gonggao.png" alt="">
                </a>
            </div>
            <div class="news-right">
                <div class="title">
                    <img src="../assets/img/icon-hot-article.png" alt="">
                    <img src="../assets/img/icon-new-article.png" alt="">
                </div>
                <div class="hot-text">
                   <publicTitle :textArr='textArr' time="4000"></publicTitle>
                    <publicTitle :textArr='textArr1' time="2000"></publicTitle>
                </div>
            </div>
        </div>
        <!-- 秒杀导航 -->
        <div class="nav-bar">
            <!-- 秒杀活动 -->
            <div class="now-seckill">
                <div class="now-seckill-top">
                    <span class="now-seckill-top-logo">秒杀活动</span>
                    <span class="end-time">敬请期待。。。</span>
                </div>
                <div class="now-seckill-img">
                    <div class="left-img seckill-img">
                        <img src="../assets/img/seckill-img1.png" alt="">
                    </div>
                    <div class="right-img seckill-img">
                        <img src="../assets/img/seckill-img3.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 积分商城 -->
            <div class="now-shop">
                <div class="now-seckill-top">
                    <span class="now-seckill-top-logo sort-logo">积分商城</span>
                    <span style="padding-left:0.25rem;font-size: 0.1rem;color: #aaa;">好礼享不停</span>
                </div>
                <div class="now-seckill-img">
                    <div class="left-img seckill-img">
                        <img src="../assets/img/seckill-img2.png" alt="">
                    </div>
                    <div class="right-img seckill-img">
                        <img src="../assets/img/seckill-img3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 零食酒水 -->
        <div class="sore-brand">
            <div class="container">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;" onclick="show_class(1238)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-food.png" alt="零食酒水">
                            <span>零食酒水</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1263)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-oil.png" alt="粮油副食">
                            <span>粮油副食</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1066)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-tissue.png" alt="个人护理">
                            <span>个人护理</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1065)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-wash.png" alt="居家日用">
                            <span>居家日用</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1209)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-baby.png" alt="母婴儿童">
                            <span>母婴儿童</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1156)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-tool.png" alt="厨房用具">
                            <span>厨房用具</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1143)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-sweep.png" alt="清洁工具">
                            <span>清洁工具</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onclick="show_class(1235)">
                            <img src="http://www.kuaixiaoapp.com/wap/resource/img/sore-brand-towel.png" alt="家具家纺">
                            <span>家具家纺</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 附近商家 -->
        <div class="mod-hot-stores">
            <!-- 标题 -->
            <div class="mod-title">
                <i class="mod-title-icon"></i>
                <span class="mod-title-text">附近商家</span>
            </div>
            <!-- 条件筛选导航 -->
            <div class="mod-hot-stores-nav" >
               <ul class="clearfix">
                    <li v-for="(item, index) in sort" :key="item.id" :class="{'active':index==ins}"  @click="active(index)">
                        <a href="javascript:;" >{{item.name}}</a>
                    </li>
               </ul>
            </div>
            <!-- 条件筛选 隐藏-->
            <transition  class="mod-hot-stores-nav2" v-if="show" name="fade">
                <div class="mod-hot-stores-nav2">
                    <ul class="clearfix">
                        <li v-for="(item,index) in storesNav.nav1" :key="item.id" :class="{'active':index==num}"  @click="serach(index)">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </transition>
            <div class="good-stores-nav">
                <ul class="clearfix">
                    <li v-for="(item,index) in storesNav.nav2" :key="item.id" :class="{'active':index==sub}"  @click="serachHot(index)">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <!-- 下拉加载更多 -->
            <div>
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
                                    <p>成立时间 : {{item.time}}</p>
                                    <p>起  售  额 :{{item.count}}</p>
                                </div>
                                <a href="#" class="favourable">{{item.sale}}</a>
                                <div class="enterShop">
                                    <a href="#">进入店铺 ></a>
                                </div>
                                <div class="heart">
                                    <i class="fa" :class="item.heart==true?'fa-heart':'fa-heart-o'" @click="shoreUp(item.heart,index)"></i>
                                    <!-- <i class="fa fa-heart" v-if="item.heart==true" @click="shoreUp(item.heart,index)"></i>
                                    <i class="fa fa-heart-o" v-else @click="shoreUp(item.heart,index)"></i> -->
                                </div>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <span>查看更多</span>
                    <i class="fa fa-sort-desc"></i>
                </div>
            </div>
        </div>
        <!-- 品牌推荐 -->
        <div class="mod-brand">
            <div class="mod-title">
                <i class="mod-title-icon"></i>
                <span class="mod-title-text">品牌推荐</span>
            </div>
            <div class="brand-stores-nav">
                <ul class="clearfix">
                    <li class="brand-stores-nav-li" v-for="(item) in storesNav.nav2" :key="item.id">
                        <a href="#">{{item.name}}</a>
                    </li>
                </ul>
            </div>
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
                <hotGoods :hotGoods='hotGoods'></hotGoods>
            </div>
        </div>
    </div>
</template>
<script>
 import { Toast } from 'mint-ui';
 import navTitle from './common/nav-title.vue'
 import hotGoods from './common/hot-goods.vue'
 import publicTitle from './common/public-title.vue'
export default {
    name:'index',
    components:{
        navTitle,
        hotGoods,
        publicTitle,
    },
    data() {
        return {
            sort:[
                {id:1,name:'最新'},{id:2,name:'综合排序'},{id:3,name:'哈哈'},{id:4,name:'啦啦'},{id:5,name:'排序'}
            ],
            ins:0,
            num:0,
            sub:0,
            show:false,
            storesNav:{
               nav1:[{id:1,name:'送货最快'},{id:2,name:'口碑好'},{id:3,name:'起订量'},{id:4,name:'满减活动'}],
               nav2:[{id:1,name:'食品饮料'},{id:2,name:'居家日用'},{id:3,name:'个人护理'},{id:4,name:'个人护理'},{id:5,name:'厨房用具'},{id:6,name:'厨房用具'},{id:7,name:'厨房用具'},{id:8,name:'厨房用具'}]
            },
            heart:false,
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
            hotGoods:[
                {
                id:1,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                tiaoma:"222222222",
                count:300,
                sale:"¥333",
                },
                {
                id:2,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                tiaoma:"3333333",
                count:300,
                sale:"¥333",
                },
            ],
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

    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
  },
    methods: {
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
        serach(index){
            this.num=index
            // console.log(index);
        },
        serachHot(index){
            this.sub=index
            // console.log(index);
        },
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
    }
}
</script>
<style scoped>
    body{
        background: #f5f4f4 ;
        padding: 0px 0px 50px 0px;;
    }

    .swiper{
        margin-top: 50px;
        width: 100%;
        height: 166px;
    }
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .mod-news{
        /* width: 100%; */
        height: 55px;
        padding:  7px 10px;
        display: flex;
        display: -webkit-flex;
        background-color: #fff;
       
    }
    .mod-news .news-left img{
        width: 46px;
        height: 41px;
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
    }
    .news-right .title img{
        width: 100%;
        height: 18px;
        margin-bottom: 5px;
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
        height: 113px;
        padding: 5px;
        display: flex;
         display: -webkit-flex;
        color: #fff;
        font-size: 12px;
    }
    .nav-bar .now-seckill,.now-shop{
        flex: 1;
         background-color: #ffffff;
        padding: 7px ;
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
        width: 62px;
        height: 20px;
        background: -webkit-linear-gradient(left,#918eef,#6465f8);
        padding: 5px;
        border-radius: 5px;
        margin-right: 3px;
    }
    .nav-bar .now-seckill .end-time{
        color: black;
         margin-right: 3px;
    }
     .now-seckill-img{
         display: flex;
         display: -webkit-flex;
         height: 65px;
     }
    .now-seckill-img .seckill-img img{
        width: 86%;
        height: 100%;
    }   
    .nav-bar .now-seckill-top span.point{
        color: black;
    }
    .now-seckill-top-logo.sort-logo{
        background: -webkit-linear-gradient(left,#e79a02,#ea7806);
    }
    /* 零食酒水 */
    .sore-brand {
        padding: 5px;
        /* background-color: #fff; */
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
    width: 25%;
    text-align: center;
    height: 114px;
    }
    .sore-brand .container ul li a {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 16px;
    }
    .sore-brand .container ul li a span {
    color: #666;
    font-size: 12px;
    }
    .sore-brand .container ul li a img {
    width: 67px;
    display: block;
    margin: 0 auto 5px;
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
        font-size: 18px;
        line-height: 46px;
    }
     .mod-title i.mod-title-icon{
        width: 5px;
        height: 25px;
        display: block;
        float: left;
        background-color: #e79a02;
        margin-right: 10px;
        margin-top: 12px;
     }
     .mod-hot-stores-nav{
         width: 100%;
         /* margin: 10px; */
     }
      .mod-hot-stores-nav ul{
         width: 100%;
         height: 100%;
     }
     .mod-hot-stores-nav li{
         width: 19%;
        height: 25px;
        line-height: 25px;
        float: left;
        text-align: center;
        /* background-color: #fff; */
     }
    li.active{
        color: #747474;
        background: -webkit-linear-gradient(left,#e79a02,#ea7806);
    }
    transition{
        display: block;
    }
    .mod-hot-stores-nav2{
        width: 100%;
     
        margin-top: 10px;
    }
    .mod-hot-stores-nav2 li,.good-stores-nav ul li{
        float: left;
        width: 23.5%;
        text-align: center;
        height: 26px;
        line-height: 26px;
       background: #eee;
       margin-right: 4px;
    }
     .mod-hot-stores-nav2 li a, .good-stores-nav li a{
          font-size: 12px;
          color: #ff6000;
    }
    .good-stores-nav {
        margin-top: 5px;
    }
    .good-stores-nav ul a{
        
    }
    .good-stores-nav ul li {
       
        margin-bottom: 5px;
    }
    .mod-hot-stores-nav2 .active,.good-stores-nav .active{
        
        background: #ffe59f;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
        right: 0rem;
        bottom: 15px;
       background: -webkit-linear-gradient(left,#e79a02,#ea7806);
        border-radius: 10px;
        /* text-align: center */
     }
      .describe-content .enterShop a{
          display: block;
          color: #f2f2f2;
          text-align: center;
          line-height: 23px;
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
    .mod-brand{
        background-color: #fff;
        margin-top: 10px;
        padding: 7px 10px ;
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
        max-width: 9px;
        max-height:9px;
    }
.mod-hot-goods{
    background-color: #fff;
    margin-top: 10px;
}
</style>
