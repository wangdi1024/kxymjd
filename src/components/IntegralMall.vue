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
            <div class="mod-get-score">
                <div class="sign_datenum">
                    <p>已连续签到</p>
                    <p>3天</p>
                </div>
                <div class="date">
                    <div class="line-frame"></div>
                    <ul class="clearfix">
                        <li class="data-item" v-for="(item,index) in list" :key="item.index">
                            <p style="font-size:12px">{{item}}</p>
                            <div v-if="isShow">
                                <img src="../assets/img/sign_sore.png" alt="">
                            </div>
                            <div v-else>
                                +<span>5</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
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
                <tabContainer :list='data'>
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
                </tabContainer>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'   
import tabContainer from './common/tab-container'
import { Toast } from 'mint-ui';
export default {
    name:'IntegralMall',
    components:{
        navBar,
        tabContainer
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
        }
    },
    created(){
        var dateobj={}
        for (var i = 0; i < 7; i++) {
           dateobj=this.getFormatDate(i)
            this.list.push(dateobj)
        }
    },
    mounted(){
       this.isSign =localStorage.getItem('isSign')
    },
    methods:{
        getFormatDate(n){
           var ss=24*60*60*1000 //一天的毫秒数
           var timestamp=new Date().getTime()//获取当前的时间戳
           var date1 = new Date(ss * n + timestamp) //加上n天的国际标准日期
            var newTime = date1.toLocaleString();
            var arr = newTime.split(" "); //把2018/6/4提取出来
            var arr2 = arr[0].split('/'); //把年月日数字单独提出来
            return  arr2[1] + '.' + arr2[2] ;
        },
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
            .mod-get-score{
                width 100%;
                height 62px;
                background: -webkit-linear-gradient(left,#fc8a17,#ffa200);
                padding-top 10px;
                display flex;
                .sign_datenum{
                    width 70px;
                    height 57px;
                    transform translateX(5px)
                    padding-top 5px;
                    border-right 1px solid #fff;
                    p{
                        font-size 12px;
                        color #fff
                        text-align center;
                        padding-bottom 10px;
                    }
                }
                .date{
                    flex 1;
                    position relative
                    ul {
                        margin-left 10px;
                        z-index 2
                        position absolute
                        .data-item{
                            width 37px;
                            height 46px
                            margin-left 5px;
                            text-align center;
                            float left
                            p{
                                width 100%
                                padding 5px 0px;
                                text-align center;
                                color #fff;
                            }
                            div{
                                width 100%;
                                height 25px;
                                text-align center;
                                img {
                                    width 25px;
                                    height 100%;
                                }
                            }
                        }
                    }
                    .line-frame{
                        width 260px;
                        border-bottom 2px solid #fff
                        position absolute
                        left 24px;
                        top 33px;
                        z-index 1;
                    }
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
