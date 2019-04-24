<template>
    <div class="box">
        <!-- 头部 -->
       <mt-header title="购物车" >
        <mt-button slot="right" @click="iseditor($event)" ref="editor">编辑</mt-button>
       </mt-header>
       <!-- 主体部分 -->
       <div class="container has-head-foot">
           <div class="cart-list" id="cart-list">
               <!-- 每一个li是一个商铺 .items是商品  -->
               <ul>
                   <li class="shops">
                       <div class="shop-title">
                           <label for="" class="ui-control pr-40">
                               <input type="checkbox" name="businessname" id="businessname" value="pass"  v-model="allChecked" >
                               <span class=" span-checkbox" :class="allChecked==true?'ui-checkbox-x':'ui-checkbox'"></span>
                           </label>
                           <a href="#" class="text-info">深圳市剑门贸易有限公司<i class="iconfont icon-tubiao_jiyao-xiangyou" style="color:#cccccc"></i></a>
                       </div>
                       <div class="product-list" id="ul">
                           <div class="mansong-id" v-for="(item ,index) in goodsDetail" :key="index" id="li">
                               <div class="items" >
                                   <div class="item-control plr-20">
                                       <label for="" class="ui-control">
                                           <input type="checkbox" name="businessname" id="businessname" class="selBtn"    v-model="item.checked" >
                                           <span class="span-checkbox"  :class="item.checked==true?'ui-checkbox-x':'ui-checkbox'"></span>
                                       </label>
                                   </div>
                                   <a href="#" class="go-goodsDetail">
                                        <div class="product-img">
                                                <div href="#" class="touchArea">
                                                    <img :src="item.goosImg" alt="">
                                                </div>
                                        </div>
                                        <div class="item-inner ">
                                            <div href="#" class="item-title touchArea">
                                                <span class="font-red">热卖爆款</span>
                                                <span class="goodsName">{{item.goodsTitle}}</span>
                                                <p  class="text-warp">条码 : {{item.tiaoma}}</p>
                                                <p class="text-warp ">限购6000</p>
                                            </div>
                                        </div>
                                   </a>
                                   <div class="text-warning">
                                       <span style="color:#ff273b;font-size:0.15rem"><em style="font-size:0.1rem">￥</em>{{item.price}}<span style="font-size:0.1rem;color:#ff273b;">/包</span></span>
                                   </div>
                                   <numBox @changeNum='changeNum' ref="numbox"></numBox>
                               </div>
                           </div>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
       <div class="mod-total">
           <div id="chooseAll" class="chooseAll">
               <label for="" class="ui-control">
                   <input type="checkbox" name="type" id="allcheck" value="pass">
				    <span class="ui-checkbox span-checkbox"></span>
               </label>
               <label class="text-all" for="allcheck">全选</label>
           </div>
           <div class="pay-money">
               <div class="inner-text" v-if="collect">
                   <span>总计 : </span>
                   <span class="" style="color:#ff273b;font-size:.16rem">¥</span>
                   <span class="" style="color:#ff273b;font-size:.16rem">1510.20</span>
               </div>
               <div class="pay-order" style="margin-right:5px" v-else>移入收藏夹</div>
               <div  class="pay-order "  :class="{'active':collect==false}">结算</div>
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
            collect:true,
           goodsDetail:[
               {goodsTitle:'亿家馨泡鸭翅（香辣味）【28包/箱】',tiaoma:'6971062710036',price:'3.5',id:0,goosImg:require('../assets/img/1_06041668029991398_240.png'),checked:true},
               {goodsTitle:'亿家馨泡鸭翅（香辣味）【28包/箱】',tiaoma:'6971062710036',price:'3.5',id:1,goosImg:require('../assets/img/1_06035642721320215_240.png'),checked:true},
               {goodsTitle:'亿家馨泡鸭翅（香辣味）【28包/箱】',tiaoma:'6971062710036',price:'3.5',id:2,goosImg:require('../assets/img/1_06040105865781148_240.png'),checked:true},
               {goodsTitle:'亿家馨泡鸭翅（香辣味）【28包/箱】',tiaoma:'6971062710036',price:'3.5',id:3,goosImg:require('../assets/img/1_06041668029991398_240.png'),checked:true},
           ],
        }
    },
    created(){
        this.$nextTick(()=>{
            console.log(this.$children);
            console.log(1);
        })
    },
    methods:{
        iseditor(e){
            this.collect =!this.collect
            if(e.target.innerText=='编辑'){
                 e.target.innerText='完成'
                 
            }else{
                 e.target.innerText='编辑'
            }
        },
        // 接受子组件传递过来的值
        changeNum(data){
            console.log(data);
            // 可访问子组件的方法
           this.$refs.numbox[0].test()
        },
        
    },
    computed:{
        allChecked:{
            get:function(){
                return this.checkedCount == this.goodsDetail.length;
            },
            set: function(value){
                this.goodsDetail.forEach(function(item){
                    item.checked = value
                })
                return value;
            }
        },
        checkedCount: {
            get: function(){
                var i = 0;
                this.goodsDetail.forEach(function(item){
                    if(item.checked == true) i++;
                })
                return i;
            }
        }
    }
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
        margin-bottom 100px
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
                width 19px
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
    .mod-total{
        position fixed
        bottom: .48rem;
        width 100%
        display flex
        min-width: 3.4rem;
        height: 0.5rem;
        background-color: #fff;
        // transform: translateX(-50%);
        box-shadow: 0 3px 16px 4px rgba(0, 0, 0, 0.06);
        z-index: 96;
        .chooseAll{
            padding-left: .1rem;
            display flex
            .ui-control{
                position: relative;
               .span-checkbox{
                    width: .19rem;
                    height: .19rem;
                    transition: all .1s;
                    display inline-block
                    margin-top 15px
               }

               #allcheck{
                    opacity 0
                    z-index -1
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
               }
               .ui-checkbox{
                    background url('../assets/img/radio.png')
                    background-size: 100%;
               }
            }
            .text-all{
                padding-left: .05rem;
                font-size: .14rem;
                line-height 50px;
            }
        }
        .pay-money{
            flex 1
            display flex
            justify-content: flex-end;
            .inner-text{
                text-align: right
                line-height 50px
                margin-right 20px
            }
            .pay-order{
                display: block;
                width: 1rem;
                height: 100%;
                line-height: 0.5rem;
                font-size: .16rem;
                text-align: center;
                color: white;
                border: 0;
                background-color: #fc9109;
            }
            .pay-order.active{
                background-color red
            }
        }
    }
}
</style>
