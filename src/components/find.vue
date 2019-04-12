<template>
    <div class="page-tmall">
        <div class="container">
            <!-- 积分banner展示 -->
            <div class="mod-tmall-banner">
                <div class="sign_in2 sign"  v-if="isSign" @click="sign"><i class="btn-get-score">24</i></div>
                <div class="sign_in sign" v-else  @click="sign"></div>
                <div class="points_detail">
                    <a href="#" class="integral">积分：21</a>
                    <a href="#" class="go-IntegralMall points-position" ><i></i>积分商城</a>
                    <a href="#" class="go-memberPointorder points-position"><i></i>积分订单</a>
                </div>
            </div>
            <!-- 签到获取积分 -->
            <modGetScore></modGetScore>
            <!-- 商户认证 -->
            <div class="store-approve">
                <div class="store-approve-title line">商户认证</div>
                <div class="store-approve-content">
                    <div class="store-approve-icon"></div>
                    <div class="store-approve-word">认证商户即可获得666元订货红包</div>
                    <a href="#" class="store-approve-detail">查看</a>
                </div>
            </div>
            <div class="isolation-zone"></div>
        </div>
    </div>
</template>
<script>
import modGetScore from './common/mod-get-score'
import { Toast } from 'mint-ui';
export default {
    name:'find',
    components:{
        modGetScore
    },
    data() {
        return {
            isSign:false,
        }
    },
    mounted(){
         var date=new Date()
       this.isSign =localStorage.getItem('isSign')
       var currentDate=date.toLocaleDateString()
       if(currentDate!=localStorage.getItem('sign')){
            this.isSign=false
       }
    },
    methods:{
        sign(){
            var date=new Date()
             console.log(date);
            //  var year=date.getYear()
            //  var month=date.getMonth()
            //  var day=date.getDate()
            //获取当前时间
            var currentDate=date.toLocaleDateString()
            console.log(currentDate);
             if(this.isSign==false && localStorage.getItem('sign')==null||currentDate!=localStorage.getItem('sign')){
                 localStorage.setItem('sign',currentDate)
                
                  Toast({
                    message: '签到成功',
                    iconClass: 'fa fa-check fa-5x',
                    duration: 2000
                });
                this.isSign=true
                 localStorage.setItem('isSign',this.isSign)
             }else{
                   Toast({
                    message: '您已经签过到了',
                    duration: 2000
                });
             }
        }
    }
}
</script>
<style lang="stylus" scoped>
.mod-tmall-banner{
    background: url(http://www.kuaixiaoapp.com/wap/resource/img/sign_head.png) no-repeat;
    background-size: 100% 100%;
    border: none;
    width: 100%;
    margin-left: 0;
    height: 1.175rem;
    position relative
    .sign{
        width: 0.9rem;
        height: 0.9rem;
        position: absolute;
        left 50%
        top 10PX
        transform translateX(-50%)
    }
    .sign_in{
        background: url(http://www.kuaixiaoapp.com/wap/resource/img/sign_in.png) no-repeat;
        background-size: 100% 100%;
    }
    .sign_in2{
        background: url(http://www.kuaixiaoapp.com/wap/resource/img/sign_in2.png) no-repeat;
        background-size: 100% 100%;
        i.btn-get-score{
            height: 0.9rem;
            line-height: 0.9rem;
            color: #666;
            font-weight: 700;
            font-size: 0.15rem;
            color: #f26c0d;
            margin-left 37px
        }
    }
    .points_detail{
        float right
        margin-top 15px
        margin-right 20px
        .integral{
            color: #666;\
            padding: 5px 8px 5px 5px;
            display block;
        }
        .go-IntegralMall{
            background: linear-gradient(to right,#ffae1a,#ff6f03);
            margin-bottom: 0.025rem;
            position relative
            i{
                display: inline-block;
                width: 0.15rem;
                height: 0.15rem;
                background: url(http://www.kuaixiaoapp.com/wap/resource/img/member/find-gif.png) no-repeat;
                background-size: 0.15rem;
                position: absolute;
                left: 5px;
                top:2px
            }
        }
        .go-memberPointorder{
            background: linear-gradient(to left,#ff4003,#ff971a);
            position relative
            i{
                display: inline-block;
                width: 0.15rem;
                height: 0.15rem;
                background: url(http://www.kuaixiaoapp.com/wap/resource/img/member/find-scoreorder.png) no-repeat;
                background-size: 0.15rem;
                position: absolute;
                left: 5px;
                top:3px
            }
        }
        .points-position {
            border: 1px solid #fff;
            border-radius: 0.1rem;
            /* background-color: #fc9109; */
            padding: 5px 8px 5px 5px;
            width: .8rem;
            text-align: right;
            font-size: 0.12rem;
            display block;
            color #fff
        }
    }
}
.store-approve{
    width: 100%;
    height 0.88rem
    padding: 0.05rem 0 0 0.05rem;
    .store-approve-title{
        height: 0.25rem;
        width: 100%;
        line-height: 0.25rem;
        font-size: 0.14rem;
        padding-left: 0.15rem;
        color: #666;
    }
    .store-approve-content{
        display flex;
        .store-approve-icon{
            background: url(http://www.kuaixiaoapp.com/wap/resource/img/member/store_approve.png);
            background-size: cover;
            float: left;
            width: 15%;
            height: 0.45rem;
            margin-left: 1%;
        }
        .store-approve-word{
            flex 1
            height: 0.45rem;
            line-height: 0.5rem;
            font-size: 0.14rem;
            color: black;
        }
        .store-approve-detail{
            width: 16%;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            margin: 3% 3% 0 2%;
            color: #fff;
            background-color: #ff4e00;
            border: 1px solid #ff4e00;
            border-radius: 0.05rem;
        }
    }
}
</style>

