<template>
    <div class="evaluate mui-content clearfix">
        <!-- 商品详情的子路由商品评价页面 -->
        <div class="mod-goods-score clearfix">
            <div class="score mui-pull-left">
                <p class="score-info">
                    <span style="font-size:0.39rem;font-weight:700">5</span>分
                </p>
                <p class="evaluate-title">整体评分</p>
            </div>
            <div class="star pull-left">
                <span>整体评价</span>
                <span  id="star" title="gorgeous" style="width: 100px;">
                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/icon-star-yes.png" alt="1" title="gorgeous" v-for="n in 5">&nbsp;
                </span>
            </div>
        </div>
        <div class="tab mod-idea-title clearfix">
            <ul>
                <li class="evaluate-items" :class="{'active' :active==1}" @click="active=1">全部</li>
                <li class="evaluate-items" :class="{'active' :active==2}" @click="active=2">好评</li>
                <li class="evaluate-items" :class="{'active' :active==3}" @click="active=3">中评</li>
                <li class="evaluate-items" :class="{'active' :active==4}" @click="active=4">差评</li>
            </ul>
            <div class="evaluate-data">
                <noData></noData>
            </div>
        </div>
    </div>
</template>
<script>
import noData from '../member/not-data'
export default {
    name:'evaluate',
    components:{
        noData,
    },
    data () {
        return {
            active:1
        }
    }
}
</script>
<style lang="stylus" scoped>
.evaluate{
    .mod-goods-score{
        height 80px;
        .score{
            width 37%
            margin-top 10px;
            .score-info{
                color: #fc9109;
                text-align: center;
                font-size: .14rem;
                height 54px
                line-height 54px
            }
            .evaluate-title{
                text-align: center;
                color: #666;
                font-size: .11rem;
            }
        }
        .star{
            font-size: .14rem;
            color: #666;
            width: 63%;
            height: .28rem;
            line-height: .28rem;
            border-left: .01rem solid #dcdcdc;
            text-align: center;
            margin-top: .25rem;
            vertical-align: middle;
            #star{
                img{
                    width: .142rem;
                    height .142rem
                    margin-right 3px
                }
            }
        }
    }
    .mod-idea-title{
        width: 100%;
        // height: 5rem;
        margin-top: .25rem;
        background-color: #fff;
        ul{
            height: .3rem;
            display: -webkit-flex;
            display: flex;
            border 1px solid #fc9109
            .evaluate-items{
                flex 1
                text-align center;
                line-height .3rem
                border-right 1px solid #fc9109
                color #666
            }
            .evaluate-items.active{
                background-color #fc9109
                color #fff
            }
            .evaluate-items:last-of-type{
                border-right 0;
            }
        }
    }
}
</style>
