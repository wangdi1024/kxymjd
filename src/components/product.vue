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
                       <i id="click">
                           <img src="../assets/img/icon-dropup.png" alt="">
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
                   <em style="color:#838383;font-size: 0.14rem">箱 &nbsp;&nbsp;&nbsp;规 : </em>
               </div>
               <div class="goods_info">
                   <em style="color:#838383;font-size: 0.14rem">净含量 : </em>
                   <em style="color:black">42g</em>
               </div>
           </div>
           <div class="product-num-business clearfix">
               <div class="business-logo mui-pull-left">
                   <img src="../assets/img/06070838811996868.png" alt="">
               </div>
               <div class="business-title mui-pull-left">
                   <p class="business-name">深圳市聚特佳生物科技有限公司</p>
                   <p class="found_consult">成立时间:  2011-09-30</p>
                   <p class="found_consult">咨询时间:  09:00:00-18:00:00</p>
                   <span>全部商品</span>
                   <span>进店逛逛</span>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
// 引入轮播组件
import {Swipe, SwipeItem} from 'mint-ui';
export default {
  name: 'product',
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
            margin-bottom: 5px;
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
            margin-bottom 5px;
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
                        background url('../assets/img/damage-icon-two.png')
                        width: 0.12rem;
                        height: 0.14rem;
                        margin-left: .13rem;
                        display: inline-block;
                        background-size: cover;
                        vertical-align: sub;
                    }
                    span{
                        background url('../assets/img/pledge-icon-two.png')
                        width: 0.12rem;
                        height: 0.14rem;
                        margin-left: .13rem;
                        display: inline-block;
                        background-size: cover;
                        vertical-align: sub;
                    }
                }
                #click{
                    position absolute
                    left 331px;
                    top 40px
                    transform: rotate(90deg);
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
            padding:10px;
            .business-logo{
                width: 0.5rem;
                height: 0.5rem;
                margin-right: .1rem;
                // margin-top: 0.1rem;
                img {
                    width 100%
                    height 100%
                }
            }
        }
    }
}
</style>
