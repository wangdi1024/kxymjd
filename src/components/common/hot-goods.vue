<template>
<!--热门商品加入购物车的组件-->
    <ul class="hot-stores-list">
        <li>
            <a href="#">
                <div class="img-show">
                    <!-- <img :src="item.img" alt=""> -->
                    <slot name="img"></slot>
                </div>
            </a>
            <div class="describe-content">
                <i class="icon-goods-act"></i>
                <!-- <a href="#" class="shopName" slot=""></a> -->
                <slot name="span"></slot>
                <slot name="shopName"></slot>
                <div class="detail">
                    <!-- <p>条码 : {{item.tiaoma}}</p>
                    <p>成立时间 : {{item.banrd}}</p>
                    <p><del>原价 :{{item.count}}</del></p>
                    <p>
                        <span class="text-price1">¥</span><span class="text-price2">13.9<span>/包  ¥166.80/箱</span></span>
                    </p> -->
                    <slot></slot>
                </div>
                <!-- <a href="#" class="favourable">活动热卖价：{{item.sale}}</a> -->
                <div class="enterShop" :style="{backgroundColor:bgcolor}">
                    <a href="#" @click="addCart()">加入购物车</a>
                    <!-- <i class="fa fa-shopping-cart"></i> -->
                    <slot name="icon"></slot>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name:'hotGoods',
    props:['hotGoods','bgcolor'],
    methods:{
        addCart(){
           Toast({
                message: '加入购物车成功',
                duration: 1000
            });
        }
    }
}
</script>
<style>
    .hot-stores-list{
        padding: 0px 5px;
    }
     .hot-stores-list li{
         display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    li.com-storelist-item {
        position: relative;
        padding: 7px 10px;
        background-color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .img-show {
        width: 88px;
        height: 88px;
        text-align: center;
        border: 1px solid #f2f2f2;
    }
    .img-show img {
    /* margin: .4rem 0 0 .025rem; */
    margin: 10px auto;
    max-width:67px;
    max-height:67px;
    }
    .describe-content{
        flex: 1;
        position: relative;
        /* text-align: center; */
        line-height: 16px;
        padding: 3px;
    }
    .describe-content a span{
        background-color: #ff3b3c;
        padding-left: .04rem;
        padding-right: .04rem;
        color: white;
    }
    .describe-content a.shopName{
        display: block;
        font-size: 16px;
        padding-bottom: 5px;
        color: #232323;
        font-size: 14px;
    }
    .describe-content .detail p{
        padding-bottom: 4px;
        color: #909090 ;
        font-size: 12px;
        
    }
    .describe-content a.favourable{
            color: #ff273b;
            display: block;
    }
     .describe-content .enterShop{
         position: absolute;
         width: auto;
        height: 23px;
        display: inline-block;
        right: 0.1rem;
        bottom: 15px;
       /* background: -webkit-linear-gradient(left,#e63f15,#ff273b); */
        border-radius: 10px;
        text-align: center;
        display: flex;
        padding: 0 10px;
     }
      .describe-content .enterShop i{
          text-align: center;
          line-height:23px;
          color: #fff;
      }
      .describe-content .enterShop a{
          display: block;
          color: #f2f2f2;
          text-align: center;
          line-height: 23px;
          width: 100%;
          height: 100%;
          font-size: 10px;
      }
</style>

