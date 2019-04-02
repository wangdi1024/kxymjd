<template>
    <div class="box">
        <!-- 商铺页面 -->
        <nav-title placeholder="搜索店铺商品" color='background-color:rgba(119,103,137,0.4)' inputcolor='background-color:rgba(255,255,255,0.6)'>
            <i class="mint-toast-icon mintui mintui-back" slot="img" @click="goBack"></i>
            <i class="fa fa-qrcode" slot="icon"></i>
        </nav-title>
        <div class="mui-content content" style="position:fixed;top:0;left:0;z-index:-9999;width:100%">
            <div class="container1">
                <!-- 店铺广告轮播 -->
                <div class="store-swiper" >
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../assets/img/lunbo1.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/img/lunbo2.jpg" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
                <!-- 店铺介绍 -->
                <div class="shop-recommend" >
                    <div class="mod-businessinfo clearfix" >
                        <div class="logo mui-pull-left">
                            <img src="../assets/img/shop-img.jpg" alt="">
                        </div>
                        <div class="name mui-pull-left">
                            <p style="font-size:0.13rem;color:#ff3b3c;font-weight: bold">深圳市浩渺行贸易有限公司</p>
                            <p>成立时间 : 2016-06-12</p>
                            <p>起  售  额 : 499 元</p>
                            <p>
                                <a href="#" style="display: inline-block;width: 1.8rem;color:#ff273b">秒杀 活动进行中 >></a>
                            </p>
                        </div>
                        <div class="tag mui-pull-left">
                            <p class="licenses"></p>
                            <p class="concerns"></p>
                        </div>
                    </div>
                </div>
                <!-- 店铺tab栏 -->
                <div class="nav-tabs">
                    <van-tabs v-model="active" swipeable>
                        <van-tab title="商品">
                            <goods></goods>
                        </van-tab>
                        <van-tab title="排序">
                        
                        </van-tab>
                        <van-tab title="评价">
                            {{active}}
                        </van-tab>
                        <van-tab title="商家">
                            {{active}}
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navTitle from './common/nav-title'
import goods from './showStore/goods'
import { Swipe, SwipeItem } from 'mint-ui';
import { Tab, Tabs } from 'vant';
export default {
    name:'showStore',
    components:{
        navTitle,
        goods,
    },
    data() {
        return {
            active:'',
            
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
       
    },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden;
    .content{
        margin-top 50px;
        .container1{
            .store-swiper{
                width: 100%;
                height: 120px;
                img{
                    width 100%;
                    height 100%
                }
            }
            .shop-recommend{
                width 100%
                height 92px;
                padding 5px 15px;
                background-color:rgba(119,103,137,0.4)

                .mod-businessinfo{
                    padding 5px 10px;
                    background-color:rgba(255, 255, 255, 0.6)
                    border-radius 10px;
                    .logo{
                        width 52px;
                        height 52px
                        margin-right 5px;
                        img{
                            width 100%
                            height 100%
                            margin-top 5px;
                        }
                    }
                    .name{
                        p{
                            font-size:.1rem;
                            color:#666
                            margin-top 5px;
                        }
                    }
                    .tag{
                        margin-top 25px;
                        margin-left 25px;
                       .licenses,{
                           background url('../assets/img/show_licence.png')
                           background-size: 0.6rem .15rem;
                           width: 0.6rem;height: .15rem;
                           margin-bottom 10px;
                       }
                       .concerns{
                           background url('../assets/img/icon-collect-store.png')
                           background-size: 0.6rem .15rem;
                           width: 0.6rem;height: .15rem;
                       }
                    }
                }
            }
        }
    }
}
</style>
