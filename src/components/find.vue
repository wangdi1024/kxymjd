<template>
    <div class="box" ref="router">
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
                <div class="get-discount line">我要优惠</div>
                <!-- 红包 -->
                <div class="kxycoupon">
                    <ul>
                        <!-- <li class="kxycoupon-in-li over" >
                            <div class="kxycoupon-money-left">
                                <div class="kxycoupon-money-img">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/outdate_order_coupon.png" alt="" class="kxycouponimgin">
                                </div>
                                <div class="kxycoupon-money-text kxycoupon-random-text">
                                    <p>418快销狂欢节全员狂欢券</p>
                                    <p>快销易通用 (可跨店使用)</p>
                                    <p>说明：认证商户可领</p>
                                </div>
                                 <div class="kxycoupon-money-qiang">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/get_over.png" alt="">
                                    <div class="kxynoreceive">
                                        <a href="#">查红包 ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-line"></div>
                        </li> -->
                        <li class="kxycoupon-in-li " :class="{'over' : isQiang==0}">
                            <div class="kxycoupon-money-left">
                                <div class="kxycoupon-money-img">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/outdate_order_coupon.png" alt="" class="kxycouponimgin" v-if="isQiang==0">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/order_coupon.png" alt="" class="kxycouponimgin" v-else>
                                </div>
                                <div class="kxycoupon-money-text " :class="{'kxycoupon-random-text' : isQiang==0}">
                                    <p>418快销狂欢节全员狂欢券</p>
                                    <p>快销易通用 (可跨店使用)</p>
                                    <p>说明：认证商户可领</p>
                                </div>
                                <div class="kxycoupon-money-qiang">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/get_over.png" alt="已售完" v-if="isQiang==0">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/get_order_coupon.png" alt="抢红包" v-else  @click="qiangRedpacket(0)">
                                    <div class="kxynoreceive" v-show=" isQiang==0">
                                        <a href="#">查红包 ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-line"></div>
                        </li>
                        <li class="kxycoupon-in-li " :class="{'over' : isQiang==1}">
                            <div class="kxycoupon-money-left">
                                <div class="kxycoupon-money-img">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/outdate_order_coupon.png" alt="" class="kxycouponimgin" v-if="isQiang==1">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/order_coupon.png" alt="" class="kxycouponimgin" v-else>
                                </div>
                                <div class="kxycoupon-money-text " :class="{'kxycoupon-random-text' : isQiang==1}">
                                    <p>418快销狂欢节全员狂欢券</p>
                                    <p>快销易通用 (可跨店使用)</p>
                                    <p>说明：认证商户可领</p>
                                </div>
                                <div class="kxycoupon-money-qiang">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/get_over.png" alt="已售完" v-if="isQiang==1">
                                    <img src="http://www.kuaixiaoapp.com/wap/resource/img/member/get_order_coupon.png" alt="抢红包" v-else  @click="qiangRedpacket(1)">
                                    <div class="kxynoreceive" v-show=" isQiang==1">
                                        <a href="#">查红包 ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-line"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 引入签到获取积分组件
import modGetScore from './common/mod-get-score'
// 引入弹窗
import { Dialog } from 'vant';
export default {
    name:'find',
    components:{
        modGetScore
    },
    data() {
        return {
            // 判断是否签到的字段
            isSign:false,
            // 领取红包的字段，后期后台返回数据后可以不要
            isQiang:'',
        }
    },
    created(){
     
    },
    mounted(){
        var date=new Date()
        // 获取签到存的localStorage对比当前时间，如果已经签到则返回false
       this.isSign =localStorage.getItem('isSign')
       var currentDate=date.toLocaleDateString()
       if(currentDate!=localStorage.getItem('sign')){
            this.isSign=false
       }
    },
    methods:{
        // 签到
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
                   Dialog.alert({
                    message: '签到成功',
                    
                });
                this.isSign=true
                 localStorage.setItem('isSign',this.isSign)
             }else{
                   Dialog.alert({
                    message: '您已经签过到了',
                });
             }
        },
        // 抢红包 需要判断用户是否是认证会员和红包是否是所有用户可以领取和是否领取 字段需要后台数据
        qiangRedpacket(index){
            Dialog.alert({
            message: '领取成功'
            }).then(() => {
                this.isQiang=index
               
            });
        }
    }
}
</script>
<style lang="stylus" scoped>
// 积分banner展示
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
// 商户认证
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
// 我要优惠
.get-discount {
    color: red;
    font-size: 0.16rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
    height: 0.35rem;
    line-height: 0.35rem;
    position relative
}
// 红包
.kxycoupon{
    background: #fff;
    padding: 0rem 0.1rem 0.5rem 0.1rem;
    margin: 0 0.1rem;
    border-radius: 0.1rem;
    ul{
        li.kxycoupon-in-li.over{
            background: #aaa;
            .kxycoupon-money-text.kxycoupon-random-text{
                p{
                    color #fff
                }
            }
        }
        .kxycoupon-in-li{
            position relative
            height: 0.93rem;
            margin-top 10px
            margin-bottom: 0.2rem;
            border-radius: 0.2rem;
            background: #fff3e0;
            .kxycoupon-money-left {
                width: 100%;
                border: none;
                display flex
                padding: 0.15rem 0 0 0.1rem;
                // border-right: 1px dashed #ff8151;
                border-radius: 0.2rem;
                .kxycoupon-money-img {
                    width: 0.45rem;
                    height: 0.6rem;
                    border-radius: 0.075rem;
                    img{
                        width 100%
                        height 100%
                    }
                }
                .kxycoupon-money-text{
                    padding: 0 0 0 0.1rem;
                    flex 1
                    p:nth-child(1){
                        font-size: 0.16rem;
                        color: #ff5101;
                        font-weight: 700;
                        line-height 30px
                        height: 0.3rem;
                    }
                    p:nth-child(2){
                        font-weight: 700;
                        font-size: 0.11rem;
                        
                    }
                    p:nth-child(3){
                        font-size: 0.11rem;
                        color: #ccc;
                        width: 2rem;
                        margin-top 3px
                    }
                }
                .kxycoupon-money-qiang{
                    // width 52px
                    // height 52px
                    margin-right 10px
                    img{
                        width 52px
                        height 52px
                    }
                    .kxynoreceive{
                        background-color #fff
                        width: 0.6rem;
                        height: 0.15rem;
                        line-height: 0.15rem;
                        border-radius: 0.35rem;
                        margin-top 5px
                        a{
                            height 100%
                            width 100%
                            padding-left 7px
                        }
                    }
                }
            }
        }
    }
}
</style>

