<template>
    <div class="margin-t">
        <div class="nav-title">
            <a href="#" class="my-order" style="font-size:0.14rem;color:#232323">我的订单</a>
            <router-link to="/memberOrder/merchantsOrder/1" href="#" class="see-all">查看全部</router-link>
        </div>
        <div class="order-nav">
            <div class="item">
                <router-link to="/memberOrder/merchantsOrder/2" href="#">
                    <img src="../../assets/img/order-state-pay.png" alt="待付款">
                    <p>待付款</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/memberOrder/merchantsOrder/3" href="#">
                    <img src="../../assets/img/order-state-send.png" alt="待发货">
                    <p>待发货</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/memberOrder/merchantsOrder/4" href="#">
                    <img src="../../assets/img/order-state-recive.png" alt="待收货">
                    <p>待收货</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/memberOrder/merchantsOrder/5" href="#">
                    <img src="../../assets/img/order-state-eval.png" alt="待评价">
                    <p>待评价</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/memberOrder/memberRefund" href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .margin-t{
        height: 130px;
        margin-top: 15px;
        background-color #fff
        border-radius 13px;
        .nav-title{
            height 46px;
            border-bottom 1px solid #ccc
            padding 0px 10px;
            .my-order,.see-all{
                width :68px;
                height 100%;
                float left
                text-align center;
                line-height 46px;
            }
             .see-all{
                float right 
             }
        }
        .order-nav{
            display flex;
            height 83px;
            .item{
                flex 1;
                height 100%
                a{
                    width 100%
                    height 100%
                    text-align center;
                    display inline-block;
                    width 100%;
                    height 100%
                    img {
                        width 30px
                        height 23px
                        margin 20px;
                    }
                }
            }
        }
    }
</style>

