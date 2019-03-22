<template>
    <div class="box">
        <div class='header'>
            <div class="left" @click="goBack">
                <p class="mintui mintui-back"></p>
            </div>
            <div class="content">
                <router-link to="/memberOrder/merchantsOrder/1" href="#" >商家订单</router-link>
                <router-link to="/memberOrder/memberPointorder" href="#" >积分订单</router-link>
                <router-link to="/memberOrder/memberRefund" href="#">退款订单</router-link>
            </div>
            <div class="right"></div>
        </div> 
        <router-view class="order-active"></router-view>   
    </div>
</template>
<script>

import { Navbar, TabItem } from 'mint-ui';
export default {
    name:"memberOrder",
    components:{
        orderHeader
    },
    data() {
        return {
           
          
        }
    },
    mounted(){
    //    console.log(this.$route.params.id);
    //    this.selected=this.$route.params.id
    },
    methods:{
        goBack(){
            this.$router.replace({name:"member"});
            },
    }
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
        }
    }
   .router-link-active,.myActive{
        background-color:#f2f2f2;
        color:#333;
        font-weight 700;
    }
  
}
</style>

