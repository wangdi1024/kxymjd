<template>
<!--常用功能-->
    <div class="margin-t">
        <div class="nav-title">
            <a href="#" class="my-order">常用功能</a>
        </div>
        <ul class="order-nav">
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/member-nav-addr.png" alt="收货地址">
                    <p>收货地址</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-send.png" alt="待发货">
                    <p>待发货</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-recive.png" alt="待收货">
                    <p>待收货</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-eval.png" alt="待评价">
                    <p>待评价</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
            <li class="item">
                <a href="#">
                    <img src="../../assets/img/order-state-return.png" alt="退款/售后">
                    <p>退款/售后</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .margin-t{
        height: 300px;
        margin-top: 15px;
        background-color #fff
        border-radius 13px;
        .nav-title{
            height 46px;
            border-bottom 1px solid #ccc
            .my-order,{
                width :68px;
                height 100%;
                float left
                text-align center;
                line-height 46px;
            }
        }
        .order-nav{
            display flex;
            flex-wrap wrap;
            height 83px;
            .item{
                flex 25%;
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
                    p{
                        color #666;
                    }
                }
            }
        }
    }
</style>

