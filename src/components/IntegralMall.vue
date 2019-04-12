<template>
    <div class="box">
        <nav-bar title="积分商城"><a href="#" style="font-size:12px;color:black">规则说明</a></nav-bar>
        <div class="has-head  mui-content">
            <div class="mod-tmall-banner">
                <div class="has_sign sign" v-if="isSign" @click="sign">
                    <p style="font-size:16px;color:#f26c0d">可用积分</p>
                    <p style="font-size:16px;color:#f26c0d;margin-top:10px;transform:translatex(20px)">7</p>
                </div>
                <div class="sign_in sign" @click="sign" v-else></div>
            </div>
            <!-- 签到日期 -->
            <modGetScore></modGetScore>
            <div class="now_sore">
                <div class="sore_back">
                    <div class="sore_back_top">
                        <p style="color:#fff;">当前积分</p>
                        <p style="font-size:22px;font-weight:700;color:#fff;margin-top:20px">7</p>
                    </div>
                    <div class="detail">
                        <a href="#">积分明细</a>
                    </div>
                    <div class="order">
                        <a href="#">积分订单</a>
                    </div>
                </div>
            </div>
            <div class="integral-exchange">
                <div>
                    <div class="integral-classify" >
                        <div class="integral" v-for="(integral, index) in data" @click="integralSelect(index)" :class="{'active' :active==index}">{{integral.text}}</div>
                    </div>
                     <ul >
                        <li>
                           <div class="items-img">
                                <img src="../assets/img/05998554848278780.jpg" alt="">
                           </div>
                           <div class="items-text">
                               <div class="top clearfix">
                                   <p style="color:black">快销易日历台</p>
                                   <p style="color:#a4a4a4">库存32&nbsp限兑2</p>
                               </div>
                               <div class="bottom clearfix">
                                   <p style="color:#a4a4a4"><i style="color:red;">40</i>积分</p>
                                   <p class='exchange' style="background-color:#ff550">立即兑换</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div class="items-img">
                                <img src="../assets/img/05998554848278780.jpg" alt="">
                           </div>
                           <div class="items-text">
                               <div class="top clearfix">
                                   <p style="color:black;">快销易日历台</p>
                                   <p style="color:#a4a4a4">库存32&nbsp限兑2</p>
                               </div>
                               <div class="bottom clearfix">
                                   <p style="color:#a4a4a4"><i style="color:red;">40</i>积分</p>
                                   <p class='exchange' style="background-color:#ff550">立即兑换</p>
                               </div>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'   
import modGetScore from './common/mod-get-score'
import { Toast } from 'mint-ui';
export default {
    name:'IntegralMall',
    components:{
        navBar,
        modGetScore,
    },
    data () {
        return {
            isShow:true,
            list:[],
            ide:0,//默认选中第一个
            data:[
                {text:'<200份'},
                {text:'<1000分'},
                {text:'<5000分'},
                {text:'<5000分以上'},
            ],
            isSign:false,
            active:0,
        }
    },
    created(){
       
    },
    mounted(){
         var date=new Date()
       this.isSign =localStorage.getItem('isSign')
       var currentDate=date.toLocaleDateString()
       if(currentDate!=localStorage.getItem('sign')){
            this.isSign=false
       }
       document.querySelector('body').setAttribute('style','padding-bottom:0')
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
        },
        //选择积分事件
        integralSelect(index){
            this.active=index
        }
    },
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .success{
            width 30px
            height 30px
        }
        .has-head{
            margin-top 50px;
            .mod-tmall-banner{
                width 100%;
                height 114px;
                background-image url('../../src/assets/img/sign_head.png')
                background-size 100% 100%
                background-color #fff
                .has_sign{
                    padding-top 36px;
                    margin-left 158px
                }
                .sign_in{
                    width 95px;
                    height 95px;
                    background-image url('../assets/img/sign_in.png')
                    background-size 100%;
                    transform translateX(142px)
                }
            }
           
            .now_sore{
                width 100%;
                height 182px;
                background-color #fff;
                margin-top 10px;
                .sore_back{
                    width 100%
                    height 100%
                    background-image url('../assets/img/sign_deatil.png')
                    background-size 100% 100%
                    position relative;
                    .sore_back_top{
                        width 58px;
                        height 58px;
                        position absolute;
                        left 26px;
                        top 31px;
                    }
                    .detail,.order{
                        position absolute;
                        bottom 26px
                        height 60px
                        width 100px
                        a{  
                            display inline-block
                            width 100%
                            height 100%
                            line-height 110px
                            font-size 18px
                            color #fff
                        }
                    }
                    .detail{
                        left 80px
                    }
                    .order{
                        left 257px
                    }
                }
            }
            .integral-exchange{
                .seleted{
                    padding 0px;
                }
                .integral-classify{
                    display flex
                    border-bottom: 1px solid #dbdbdb;
                    // padding-top 10px;
                    .integral{
                        flex 1
                        margin-top 10px;
                        height 50px;
                        text-align center;
                        line-height 50px
                        background-color #fff
                        border-right 1px solid #dbdbdb;
                        font-size 13px;
                        color #a4a4a4
                    }
                    .integral.active{
                        color: #f36c10;
                        background-color #ffecdb
                    }
                    .integral:last-child{
                        border-right 0;
                    }
                }
                ul{
                    display flex;
                    flex-wrap wrap;
                    li{
                        background-color:#fff;
                        width 50%
                        height 220px;
                        border-bottom: 1px solid #dbdbdb;
                        border-right: 1px solid #dbdbdb;
                        box-sizing border-box
                        .items-img{
                            width 166px;
                            height 166px
                            img{
                                width 100%;
                                height 100%;
                            }
                        }
                        .items-text{
                            padding 0px 5px;
                            
                            .top,.bottom{
                                p{
                                    display inline-block
                                    width 50%;
                                    padding 4px;
                                    float left;
                                    font-size 12px;
                                }
                            }
                            .bottom{
                                .exchange{
                                   background-color:#ff5500;
                                   text-align center;
                                   border-radius 10px;
                                   color #fff;
                                }
                            }
                        }
                    }
                    li:nth-child(even){
                        border-right:none;
                    }
                }
            }
        }
    }
</style>
