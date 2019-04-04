<template>
    <div class="box">
        <!-- 商品详情的父路由 -->
        <div class='header'>
            <div class="left" @click="goBack">
                <p class="mintui mintui-back"></p>
            </div>
            <div class="content">
                <router-link to="/productDetail/product" href="" class="items active">商品</router-link>
                <a href="" class="items">详情</a>
                <a href="" class="items">评价</a>
            </div>
            <div class="right"></div>
        </div> 
        <router-view class="product-active"  style="margin-top:50px"></router-view>   
    </div>
    </div>
</template>
<script>
export default {
    name:"productDetail",
    data() {
        return {
            active:'',
        }
    },
    methods:{
        goBack(){}
    },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .header{
        width 100%;
        height 50px;
        position: fixed;
        z-index: 999;
        display flex;
        background-color #fff
        align-items center;
        .left, .right{
            width 45px;
            height 100%;
            text-align center
            line-height 50px;
        }
        .right{
            background url('../assets/img/icon-more.png') no-repeat center
            background-size: .34rem .21rem;
        }
        .content{
            flex 1;
            height 100%;
            text-align center
            display flex;
            align-items center;
            justify-content center;
            a{
                width 33.3%
                height 30px
                display inline-block;
                line-height 30px;
                font-size 15px;
                border-right 1px solid #f2f2f2;
                color #000;
                position relative
            }
            a:last-child{
               border-right 0px
            }
            .items.active::after{
                content: "";
                position: absolute;
                left: 50%;
                bottom: -0.1rem;
                display: block;
                width: 40%;
                height: .02rem;
                background-color: #ff5500;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }
    }
   
}
</style>
