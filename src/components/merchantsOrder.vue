<template>
<!--商家订单-->
     <div class="mui-content">
            <div class="tab-nav">
                <mt-navbar class="page-part"  v-model="selected">
                    <mt-tab-item id="1">全部</mt-tab-item>
                    <mt-tab-item id="2">待付款</mt-tab-item>
                    <mt-tab-item id="3">待发货</mt-tab-item>
                    <mt-tab-item id="4">待收货</mt-tab-item>
                    <mt-tab-item id="5">待评价</mt-tab-item>
                </mt-navbar>
            </div>
            <div class="tab-body">
                <div class="not-order">
                    <img src="../assets/img/no_data_icon.png" alt="">
                    <p style="font-size:18px;color:black;">您还没有相关的订单</p>
                    <p style="font-size:12px">可以去看看有哪些想买的</p>
                </div>
                <div class="order-list"></div>
            </div>
        </div>
</template>
<script>
// 这是商品订单
export default {
    name:'merchantsOrder',
    data() {
        return {
            selected:"1",
        }
    },
    mounted(){
        console.log(this.$route.params.id);
       this.selected=this.$route.params.id
    },
    methods:{
        
    }
}
</script>
<style lang="stylus" scoped>
  .mui-content{
        margin-top 50px;
        .tab-body{
            // position relative
            .not-order{
                position absolute
                left:50%;
                transform translateX(-50%)
                top:150px;
                text-align center;
                img {
                    width 100px;
                    height 100px;
                }
                p{
                    margin-top 10px;
                }
            }
        }
    }
</style>
