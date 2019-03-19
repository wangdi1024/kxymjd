<template>
    <div class="member-tab">
        <div class="item">
            <a href="#">
                <p>积分</p>
                <p>2</p>
            </a>
            <div class="line"></div>
        </div>
        <div class="item">
            <router-link to="/myPurse" href="#">
                <p>余额</p>
                <p>￥0.00</p>
            </router-link>
            <div class="line"></div>
        </div>
        <div  class="item">
            <router-link to="/redPacket" href="#">
                <p>红包</p>
                <p>2</p>
            </router-link>
            <div class="line"></div>
        </div>
        <div class="item">
            <a href="#">
                <p>优惠券</p>
                <p>2</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'member-tab',

}
</script>
<style lang="stylus" scoped>
    .member-tab{
        display flex;
        height 57px;
        background-color #fff
        border-radius 13px;
        .item {
            flex 1;
            position relative;
            a{
                display inline-block;
                width 100%;
                height 100%;
                text-align center;
                color #aaa;
                p{
                    margin-top 10px;
                    font-size 16px;
                    color #666;
                }
                p:nth-child(2){
                    color #fc9109;
                }
            }
            .line{
                width 1px;
                height 33px;
                background-color #ccc;
                position absolute;
                left 88px;
                top 10px;
            }
        }
    }
</style>
