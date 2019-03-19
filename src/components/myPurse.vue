<template>
    <div class="box">
        <nav-bar title="我的钱包" id="money"></nav-bar>
        <div class="has-head  clearfix">
            <div class="wallet-survey">
                <div class="text">
                    <p class="min-font" style="font-size:14px;color:#fff">钱包总金额 （元）</p>
                    <p class="strong-font">0.00</p>
                    <p class="min-font" style="font-size:14px;color:#fff">提现中金额：￥0.00</p>
                </div>
            </div>
            <div class="list-block">
                <ul class="mui-table-view">
                   <li class="mui-table-view-cell">
                        <a class="mui-navigate-right" style="font-size:16px">钱包明细</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right" style="font-size:16px">银行卡<i style="margin-left:220px">0张</i></a>
                    </li>
                </ul>
            </div>
            <div class="btn-list">
                <mt-button type="primary" size="large" style="border-radius:20px ">充值</mt-button>
                <mt-button type="default" size="large" style="border-radius:20px;background-color:#fff">提现</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Button } from 'mint-ui';
export default {
    name:'myPurse',
    components:{
        navBar,
    },
    mounted() {
         document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
    },
}
</script>
<style lang="stylus" scoped>
html,body{
    width 100%
    height 100%
}
    .box {overflow: hidden
    .has-head{
        margin-top 50px;
        // border 1px solid #ff5500
        // overflow hidden
        .wallet-survey{
            width 100%
            height 182px
            background: #ff5500;
            padding-left 25px; 
            padding-top 25px;
            margin-bottom 10px;
            .text{
                width 130px;
                // height 130px;
                p:nth-child(2){
                    font-size 60px
                    color #fff
                    width auto
                    height 100px;
                    // text-align center
                    line-height 100px;
                }
            }       
        }
        .list-book{
            margin-top 10px;
        }
        .btn-list{
            width 300px;
            margin-top 50px;
            height 100px;
            transform translateX(35px)
            .mint-button--primary{
                background-color:#51b435;
                margin-bottom 10px;
            }
        }
    }
    }
</style>
