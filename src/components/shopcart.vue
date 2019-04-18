<template>
    <div class="box">
        <!-- 头部 -->
       <mt-header title="购物车" >
        <mt-button slot="right">编辑</mt-button>
       </mt-header>
       <!-- 主体部分 -->
       <div class="container has-head-foot">
           <div class="cart-list" id="cart-list">
               <!-- 每一个li是一个商铺 .items是商品  -->
               <ul>
                   <li class="shops">
                       <div class="shop-title">
                           <label for="" class="ui-control pr-40">
                               <input type="checkbox" name="businessname" id="businessname" value="pass" @click="selectAllBtn($event)" v-model="item" >
                               <span class=" span-checkbox" :class="item==true?'ui-checkbox-x':'ui-checkbox'"></span>
                           </label>
                           <a href="#" class="text-info">深圳市剑门贸易有限公司<i class="iconfont icon-tubiao_jiyao-xiangyou" style="color:#cccccc"></i></a>
                       </div>
                       <div class="product-list" id="ul">
                           <div class="mansong-id">
                               <div class="items" id="li">
                                   <div class="item-control plr-20">
                                       <label for="" class="ui-control">
                                           <input type="checkbox" name="businessname" id="businessname" value="114382|30" class="selBtn"   >
                                           <span class=" span-checkbox" :class="item==true?'ui-checkbox-x':'ui-checkbox'" @click="selectBtn(1)"></span>
                                       </label>
                                   </div>
                                   <a href="#" class="go-goodsDetail">
                                        <div class="product-img">
                                                <div href="#" class="touchArea">
                                                    <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/goods/1/1_06035642721320215_240.png" alt="">
                                                </div>
                                        </div>
                                        <div class="item-inner ">
                                            <div href="#" class="item-title touchArea">
                                                <span class="font-red">热卖爆款</span>
                                                <span class="goodsName">亿家馨泡鸭翅（香辣味）【28包/箱】</span>
                                                <p  class="text-warp">条码 : 6971062710036</p>
                                                <p class="text-warp ">限购6000</p>
                                            </div>
                                        </div>
                                   </a>
                                   <div class="text-warning">
                                       <span style="color:#ff273b;font-size:0.15rem"><em style="font-size:0.1rem">￥</em>2.7<span style="font-size:0.1rem;color:#ff273b;">/包</span></span>
                                   </div>
                                   <numBox></numBox>
                               </div>
                           </div>
                           <div class="mansong-id">
                               <div class="items" id="li">
                                   <div class="item-control plr-20">
                                       <label for="" class="ui-control">
                                           <input type="checkbox" name="businessname" id="businessname" value="114382|30" class="selBtn" @click="selectBtn(2)">
                                           <span class="span-checkbox" :class="item==true||selectIndex==2?'ui-checkbox-x':'ui-checkbox'" ></span>
                                       </label>
                                   </div>
                                   <a href="#" class="go-goodsDetail">
                                        <div class="product-img">
                                                <div href="#" class="touchArea">
                                                    <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/goods/1/1_06035642721320215_240.png" alt="">
                                                </div>
                                        </div>
                                        <div class="item-inner ">
                                            <div href="#" class="item-title touchArea">
                                                <span class="font-red">热卖爆款</span>
                                                <span class="goodsName">亿家馨泡鸭翅（香辣味）【28包/箱】</span>
                                                <p  class="text-warp">条码 : 6971062710036</p>
                                                <p class="text-warp ">限购6000</p>
                                            </div>
                                        </div>
                                   </a>
                                   <div class="text-warning">
                                       <span style="color:#ff273b;font-size:0.15rem"><em style="font-size:0.1rem">￥</em>2.7<span style="font-size:0.1rem;color:#ff273b;">/包</span></span>
                                   </div>
                                   <numBox></numBox>
                               </div>
                           </div>
                           <div class="mansong-id">
                               <div class="items" id="li">
                                   <div class="item-control plr-20">
                                       <label for="" class="ui-control">
                                           <input type="checkbox" name="businessname" id="businessname" value="114382|30" class="selBtn">
                                           <span class="span-checkbox" :class="item==true?'ui-checkbox-x':'ui-checkbox'" @click="selectBtn(3)"></span>
                                       </label>
                                   </div>
                                   <a href="#" class="go-goodsDetail">
                                        <div class="product-img">
                                                <div href="#" class="touchArea">
                                                    <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/goods/1/1_06035642721320215_240.png" alt="">
                                                </div>
                                        </div>
                                        <div class="item-inner ">
                                            <div href="#" class="item-title touchArea">
                                                <span class="font-red">热卖爆款</span>
                                                <span class="goodsName">亿家馨泡鸭翅（香辣味）【28包/箱】</span>
                                                <p  class="text-warp">条码 : 6971062710036</p>
                                                <p class="text-warp ">限购6000</p>
                                            </div>
                                        </div>
                                   </a>
                                   <div class="text-warning">
                                       <span style="color:#ff273b;font-size:0.15rem"><em style="font-size:0.1rem">￥</em>2.7<span style="font-size:0.1rem;color:#ff273b;">/包</span></span>
                                   </div>
                                   <numBox></numBox>
                               </div>
                           </div>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
// 导入数量框组件
import numBox from './common/num-box'
export default {
    name:'shopcart',
    components:{
        numBox,
    },
    data() {
        return {
           item:true,
           selectIndex:'',
        }
    },
    methods:{
       selectAllBtn(e){
           console.log(this.item);
           let checked=e.target.checked
           let checkedDom=document.getElementsByClassName('selBtn')
        //    console.log(checkedDom);
           let idArray=[]
           if(checked){
               for(var i=0;i<=checkedDom.length-1;i++){
                   checkedDom[i].checked=true
                //    console.log(1);
               }
           }else{
               for(var i=0;i<=checkedDom.length-1;i++){
                   checkedDom[i].checked=false
                //    console.log(2);
               }
           }
       },
       selectBtn(index){
        
           console.log(666);
           if(this.selectIndex=index){
               this.selectIndex=!index
           }else{
               this.selectIndex=index
           }
       }
    },
}
</script>
<style lang="stylus" scoped>
.box{
    .mint-header{
        background-color: #fff;
        color: black;
        height: 50px;
        position: fixed;
        width: 100%;
        z-index: 999;
        border-bottom 1px solid #ccc
    }
    .has-head-foot{
        margin-top 50px
        margin-bottom 50px
        overflow scroll
        .cart-list{
            .shops{
                margin-bottom: .1rem;
                background-color: white;
                .shop-title{
                    height: .4rem;
                    padding: 0 .1rem;
                    font-size: .13  rem;
                    color: #666;
                    display flex
                    align-items center
                    a.text-info{
                        display block
                        color #323232 
                    }
                }
                .product-list{
                    // padding: 10px;
                    border-top:1px solid #f2f2f2
                    .mansong-id{
                        padding: 10px;
                        border-bottom:1px solid #f2f2f2
                        .items{
                            overflow: hidden;
                            display flex
                            position relative
                            height 110px
                            .go-goodsDetail{
                                display flex
                                .product-img{
                                    width 88px
                                    height 88px
                                    .touchArea{
                                        width 100%
                                        height 100%
                                        img{
                                            width 100%
                                            height 100%
                                        }
                                    }
                                }
                                .item-inner{
                                    padding: 0 .1rem 0 .05rem;
                                    .font-red{
                                        background-color #ff3b3c
                                        color #fff
                                        padding: .03rem;
                                        display inline-block
                                    }
                                    .goodsName{
                                        font-size 13px
                                        color #323232
                                        line-height 20px
                                    }
                                    .text-warp{
                                        margin-bottom: 5px;
                                        font-size: 0.11rem;
                                        color: #8f8f94; 
                                    }
                                }
                            }
                            .text-warning{
                                position absolute
                                bottom 15px
                                left 100px   
                            }
                        }
                    }
                }
            }
        }
        .ui-control {
            white-space: nowrap;
            cursor: pointer;
            outline: 0;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            input[type=checkbox]{
                opacity: 0;
                outline: 0;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
            }
            span.span-checkbox{
                display: inline-block;
                width: .19rem;
                height: .19rem;
                transition: all .1s;
            }
            .ui-checkbox{
                background url('../assets/img/radio.png')
                background-size: 100%;
            }
            .ui-checkbox-x{
                background url('../assets/img/radio_active.png')
                background-size: 100%;
            }
        }
    }
}
</style>
