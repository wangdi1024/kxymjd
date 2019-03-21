<template>
        <div class='header'>
            <div class="left" @click="goBack">
                <p class="mintui mintui-back"></p>
            </div>
            <div class="content">
                <a href="#" :class="{'active':num==1}" @click="isActive(1)">商家订单</a>
                <a href="#" :class="{'active':num==2}" @click="isActive(2)">积分订单</a>
                <a href="#" :class="{'active':num==3}" @click="isActive(3)">退款订单</a>
            </div>
            <div class="right"></div>
        </div>    
</template>
<script>
export default {
    name:'orderHeader',
    data() {
        return {
             num:1,
             
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
            },
          isActive(num){
            this.num=num
        },

    }
}
</script>
<style lang="stylus" scoped>
        .header{
        width 100%;
        height 50px;
        position: fixed;
        z-index: 999;
        display flex;
        background-color #fff
        align-items center;
        .left, .right{
            width 30px;
            height 100%;
            text-align center
            line-height 50px;
        }
        .content{
            flex 1;
            height 100%;
            text-align center
            display flex;
            align-items center;
            justify-content center;
            a{
                width 66px
                height 30px
                display inline-block;
                line-height 30px;
                font-size 14px;
                border 1px solid #f2f2f2;
                border-radius 5px;
                margin-left 10px;
                color #909090;
            }
            a.active{
                background-color:#f2f2f2;
                color:#333;
                font-weight 700;
            }
        }
    }
</style>
