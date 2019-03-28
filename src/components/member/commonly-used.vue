<template>
<!--常用功能-->
    <div class="margin-t">
        <div class="nav-title">
            <a href="#" class="my-order">常用功能</a>
        </div>
        <ul class="order-nav">
            <li class="item">
                <router-link to="/delivery">
                    <img src="../../assets/img/member-nav-addr.png" alt="收货地址">
                    <p>收货地址</p>
                </router-link>
            </li>
            <li class="item">
                <router-link to="/information" >
                    <img src="../../assets/img/member-nav-setting.png" alt="设置">
                    <p>设置</p>
                </router-link>
            </li>
            <li class="item">
                <router-link to="/myFavorites/1">
                    <img src="../../assets/img/member-nav-collectgoods.png" alt="商品收藏">
                    <p>商品收藏</p>
                </router-link>
            </li>
            <li class="item">
                <router-link to="/myFavorites/2" href="#">
                    <img src="../../assets/img/member-nav-collectstore.png" alt="经销商收藏">
                    <p>经销商收藏</p>
                </router-link>
            </li>
            <li class="item">
                <router-link to="/goodsBrowse/1" href="#">
                    <img src="../../assets/img/goodsbrowse.png" alt="我的足迹">
                    <p>我的足迹</p>
                </router-link>
            </li>
            <li class="item">
                <router-link to="/goodsBrowse/2" href="#">
                    <img src="../../assets/img/often_goods.png" alt="退款/售后">
                    <p>常购清单</p>
                </router-link>
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

