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
                <!-- <div class="store-swiper" >
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../assets/img/lunbo1.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/img/lunbo2.jpg" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div> -->
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
                        <van-tab title="商品" style="position:relative">
                            <div class="sort" @click="sort" style="color:red">排序<i :class="isSort==true?'fa-sort-up':'fa-sort-desc'" class="fa" style="margin-left:5px;"></i></div>
                             <div class="com-top" ref="comtop" style="overflow:hidden">
                                <ul class="mui-row" >
                                    <li class="mui-col-xs-3">
                                        <a href="javascript:;" @click="choiceStatus(1)" :class="{'active':index==1}">综合</a>
                                    </li>
                                    <li  class="mui-col-xs-3" >
                                        <a href="javascript:;"  @click="choiceStatus(2)" :class="{'active':index==2}">最新</a>
                                    </li>
                                    <li class="mui-col-xs-3" >
                                        <a href="javascript:;"  @click="choiceStatus(3)" :class="{'active':index==3}">热销度<i class="fa fa-sort" style="margin-left:0.15rem"></i></a>
                                    </li>
                                    <li class="mui-col-xs-3" >
                                        <a href="javascript:;"  @click="choiceStatus(4)" :class="{'active':index==4}">价格<i class="fa fa-sort" style="margin-left:0.15rem"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <goods></goods>
                        </van-tab>
                        <van-tab title="评价">
                            <evaluate></evaluate>
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
import evaluate from './showStore/evaluate'
import { Swipe, SwipeItem } from 'mint-ui';
import { Tab, Tabs } from 'vant';
export default {
    name:'showStore',
    components:{
        navTitle,
        goods,
        evaluate,
    },
    data() {
        return {
            active:'',
            index:1,
            isSort:false,
        }
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'padding:0')
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
       sort(){
           console.log(1);
           var comtop=this.$refs.comtop
           var comtopHeight=comtop.offsetHeight
           console.log(comtopHeight);
           this.isSort=!this.isSort
            if(this.isSort==false){
                comtop.style.height='0px'
            }else{
                comtop.style.height=36+'px'
            }
       },
       choiceStatus(index){
            this.index=index
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
            .nav-tabs{
                .sort{
                    position absolute
                    top -33px;
                    left:90px;
                    z-index 999
                    font-size 14px;
                    padding 5px
                }
                .com-top {
                    background-color #fff
                    position: relative;
                     transition: height 0.5s;
                    ul{
                        width 100%
                        height 36px;
                        li{
                            height 100%
                            a{
                                display inline-block;
                                font-size 14px;
                                color: #909090;
                                width 100%
                                height 100%
                                text-align center;
                                line-height 36px;
                            }
                            a::after{
                                    content: '';
                                    position: absolute;
                                    top: 50%;
                                    right: 0;
                                    width: 1px;
                                    height: 50%;
                                    background-color: #f2f2f2;
                                    display: block;
                                    z-index: 2;
                                    -webkit-transform-origin: 50% 100%;
                                    transform-origin: 50% 100%;
                                    -webkit-transform: translateY(-50%);
                                    transform: translateY(-50%);
                            }
                            a.active{
                                color #fc9109;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
