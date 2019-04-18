<template>
    <div class="product mui-content">
        <!-- 轮播图及下面的消息 -->
        <div class="com-goods">
            <div class="product-swiper" >
               <mt-swipe :auto="4000">
                   <mt-swipe-item>
                       <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/goods/1/1_06076202748060527_800.png" alt="">
                   </mt-swipe-item>
                   <mt-swipe-item>
                       <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/goods/1/1_06076202723604650_800.png" alt="">
                   </mt-swipe-item>
               </mt-swipe>
           </div>
           <div class="product-info">
               <div class="score-kucun clearfix">
                   <p style=" color: #ff5500;">¥<span style="font-size:0.3rem;">3.8</span>/盒<span style="font-size: 0.1rem;" class="trade_price">活动价</span></p>
                   <p style="margin-left: 0.1rem;margin-top: 0.1rem;color:#666;padding:0"><del>原价：¥4.00</del></p>
               </div>
               <div class="title-book clearfix">
                   <p class="title-p mui-pull-left">达口乐山楂片42g【36盒/箱】</p>
                   <p class="mui-pull-right heart-p"><i class="fa fa-heart-o" style="color: #ff5500;font-size:18px;margin-right:5px"></i>收藏</p>
               </div>
           </div>
           <div class="product-num-hanle">
               <div class="distance sales">
                   	<em class="word_css_one">促销</em>
					<em class=""></em>
					<em class="word_css_two identification_css">积分</em><em class="word_css_three">购买可获得积分</em>
				    <em style="float:right;font-size: 0.28rem;font-weight: 700;"><i id="click"></i></em>
               </div>
               <div class="distance">
                   <em class="word_css_one">活动</em>
                   <em class="word_css_two">快销易精选</em>
                   <em class="word_css_three">本商品参加"精选商品"</em>
               </div>
               <div class="distance">
                   <em class="word_css_one">服务</em>
                   <em class="word_css_three">
                       <i></i>
                       &nbsp;破损包退
                    </em>
                   <em class="word_css_three"><span class="pledge"></span>&nbsp;正品保证</em>
                   <em style="float:right;font-size: 0.28rem;font-weight: 700;">
                       <i id="click" class="check-detail" @click="show=!show">
                           <img src="../../assets/img/icon-dropup.png" alt="">
                       </i>
                   </em>
               </div>
           </div>
           <div class="product-num-hanle format clearfix">
               <div class="goods_info">
                   <em style="color:#838383;font-size: 0.14rem">条形码 : </em>
                   <em style="color:black">4897088400220</em>
               </div>
               <div class="goods_info">
                   <em style="color:#838383;font-size: 0.14rem">箱 &nbsp;&nbsp;&nbsp;规 :</em>
                   <em style="color:black">10</em>
               </div>
               <div class="goods_info">
                   <em style="color:#838383;font-size: 0.14rem">净含量 : </em>
                   <em style="color:black">42g</em>
               </div>
               <div class="goods_info">
                   <em style="color:#838383;font-size: 0.14rem">箱体积 : </em>
                   <em style="color:black">mmm</em>
               </div>
           </div>
           <div class="product-num-business clearfix">
               <div class="business-logo mui-pull-left">
                   <img src="../../assets/img/06070838811996868.png" alt="">
               </div>
               <div class="business-title mui-pull-left">
                   <p class="business-name">深圳市聚特佳生物科技有限公司</p>
                   <p class="found_consult">成立时间:  2011-09-30</p>
                   <p class="found_consult">咨询时间:  09:00:00-18:00:00</p>
                   <a class="to-shop to-goods">全部商品</a>
                   <a class="to-shop to-go">进店逛逛</a>
               </div>
           </div>
           <div class="mod-dropup">
               <i id="click" class="check-more">
                   <img src="../../assets/img/icon-dropup.png" alt="">
               </i>
               点击查看图文详情
           </div>
           
        </div>
        <!-- 弹出的优惠框 -->
        <van-actionsheet v-model="show" title="优惠" class="favorable-detail">
            <div class="sales-detail">
                <div class="sales-text">
                    <p>
                        <span class="sort">积分</span>
                        <span style="color:#000">购满1000元可得20积分</span>
                    </p>
                </div>
                <div class="sales-btn">
                    <mt-button type="default" size="large" style="border-radius:20px;background-color:#fff" @click="show=!show">完成</mt-button>
                </div>
            </div>
        </van-actionsheet>
    </div>
</template>
<script>
// 引入轮播组件
import {Swipe, SwipeItem} from 'mint-ui';
//引入下拉菜单组件
import { Actionsheet } from 'vant';
import { Button } from 'mint-ui';
export default {
  name: 'product',
  data() {
      return {
          show:false
      }
  },
  created(){
      console.log(this.$route.query.goodsId);//接受传递过来的商品id   
  },


};
</script>
<style lang="stylus" scoped>
.product {
    .com-goods {
        .product-swiper {
            width: 100%;
            height: 375px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .product-info {
            margin-bottom: 2px;
            background-color: #fff;
            .score-kucun {
                p {
                    padding: 0.1rem 0.1rem 0;

                    .trade_price {
                        padding: 3px 10px;
                        background-color: #eaba9e;
                        margin-left: 10px;
                        border-radius: 20px;
                    }
                }
            }

            .title-book {
                font-size: 0.16rem;
                color: #232323;
                height: 0.42rem;
                margin-top: 10px;

                .title-p {
                    width: 2.6rem;
                    padding: 0.05rem 0.1rem 0;
                    font-size: 0.14 rem;
                    font-weight: 600;
                    height: 20px;
                    color: #232323;
                }

                .heart-p {
                    width: 70px;
                    height: 30px;
                    padding-left: 10px;
                    line-height: 30px;
                    text-align: center;
                    background-color: #f4f4f4;
                    border-radius: 0.5rem 0 0 0.5rem;
                }
            }
        }

        .product-num-hanle {
            background-color: #fff;
            padding: 0.12rem 0.1rem;
            width: 100%;
            position relative
            margin-bottom 2px;
            .distance {
                margin-top: 0.05rem;
                .word_css_one {
                    font-size: 0.15rem;
                    color: #666;
                }

                .word_css_two {
                    font-size: 0.1rem;
                    margin-left: 0.15rem;
                    color: #fc5b08;
                }
                .word_css_three{
                    font-size: 0.1rem;
                    margin-left: 0.05rem;
                    color: black;
                    i{
                        background url('../../assets/img/damage-icon-two.png')
                        width: 0.12rem;
                        height: 0.14rem;
                        margin-left: .13rem;
                        display: inline-block;
                        background-size: cover;
                        vertical-align: sub;
                    }
                    span{
                        background url('../../assets/img/pledge-icon-two.png')
                        width: 0.12rem;
                        height: 0.14rem;
                        margin-left: .13rem;
                        display: inline-block;
                        background-size: cover;
                        vertical-align: sub;
                    }
                }
                .check-detail{
                    left 350px;
                    top 40px
                    position absolute
                    transform: rotate(90deg);
                    width 15px
                    height 15px
                    img{
                        width 100%
                        height 100%
                    }
                }
            }
        }
        .format{
            .goods_info {
                float: left;
                width: 50%;
                height: 0.25rem;
                line-height: 0.25rem;
            }
        }
        .product-num-business{
            background-color #fff
            padding:15px 10px 10px 10px;
            margin-bottom 2px;
            .business-logo{
                width: 0.52rem;
                height: 0.52rem;
                margin-right: .1rem;
                margin-top 5px
                img {
                    width 100%
                    height 100%
                }
            }
            .business-title{
                position relative
                .business-name{
                    font-size: .13rem;
                    color: black;
                    margin: .1rem 0;
                   
                }
                .found_consult{
                    font-size: 0.1rem;
                    color: #ff5500;
                    height: 0.15rem;
                }
                .to-shop{
                    position absolute
                    width: 0.65rem;
                    height: 0.2rem;
                    text-align: center;
                    line-height: 0.2rem;
                    color: #fc9109;
                    border: 1px solid #fc9109;
                    border-radius: 0.5rem;
                    margin-left: 160px;
                    margin-top: -0.28rem;
                    
                }
                .to-go{
                    margin-left: 230px;
                    background: -webkit-linear-gradient(left,#fc9109,#ff5500);
                    color #fff
                }
            }
        }
        .mod-dropup{
            text-align center;
            height 0.4rem;
            line-height 0.4rem
            font-size 13px
            color #838383
            background-color #fff
            i{
                width 12.5px
                height 12.5px
                img{
                     width 12.5px
                    height 12.5px
                }
            }
        }
    }
    .favorable-detail{
        border-radius: 0.1rem 0.1rem 0 0;
        width 100%
        .sales-detail{
            height 5.5rem;
            .sales-text{
                padding 10px
                p{
                    margin 20px 0px;
                    color: #aeaeae;
                    font-size: 0.15rem;
                    margin-bottom: 0.15rem;
                    .sort {
                        display: inline-block;
                        font-size: 0.11rem;
                        background: #fef3ec;
                        color: #fd5b04;
                        padding: 0.025rem 0.05rem;
                        margin-right: 0.15rem;
                    }
                }
            }
            .sales-btn{
                width 330px;
                margin-top 20px;
                height 100px;
                transform translateX(20px)
                .mint-button--default{
                    margin-bottom 10px;
                    background: -webkit-linear-gradient(left,#fc9109,#ff5500);
                    color #fff
                }
            }
        }
    }
}
</style>
