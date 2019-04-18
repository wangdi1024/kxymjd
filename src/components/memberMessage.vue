<template>
    <div class="box bgwhite">
        <!-- 我的消息页面 头部 -->
        <navBar title="我的消息"></navBar>
        <!-- 主体内容部分 -->
        <div class="content container">
            <van-tabs v-model="active"  color='#ff5500' title-active-color='#ff5500' :line-height=2>
                <van-tab title="商家消息">
                    <ul class="merchant">
                        <li class="merchant-msg" @touchstart="touchStart(1)" @touchmove="touchEnd(1)"  :class="{'move':candelete.id==1}">
                            <router-link to="/businessMsg">
                                <div class="merchant-img ">
                                    <img src="http://www.kuaixiaoapp.com/data/upload/shop/store/default_logo.png" alt="商家头像">
                                </div>
                                <div class="merchant-text">
                                    <h3>深圳市聚特佳生物科技有限公司</h3>
                                    <p>2019-04-04 17:46:13</p>
                                </div>
                            </router-link>
                            <div class="del" @click="deleteItem()" ref="del">删除</div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="系统消息">
                    <ul>
                        <li></li>
                    </ul>
                    <div>
                        <notData></notData>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Tab, Tabs } from 'vant';
import notData from './member/not-data'
export default {
    name:'memberMessage',
    components:{
        navBar,
        notData,
    },
    created(){
        
    },
    mounted(){
      
    },
    methods:{
        // 指头按上去的时候触发
       touchStart(item){
           let startX=event.targetTouches[0]
           // 记录开始滑动的鼠标位置
           this.clientNum.x1 = startX.pageX;
          
       },
    //    拖动结束的时候触发
       touchEnd(item){
           let nowX=event.targetTouches[0]
           this.clientNum.x2 = nowX.pageX;
            this.candelete = {};
           // 记录结束滑动的鼠标位置
            if(Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50){
                 event.preventDefault();
                 this.candelete.id = item;
                 console.log(1);
                //  this.$refs.del.style.transform='translateX(0.6rem)'
            
            }else if(Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 30){
                 event.preventDefault();
                  this.candelete = {};
                 console.log(2);
              
            }
       },
    //    删除商家消息li的事件
       deleteItem(){
           console.log('del');
       }
    },
    data() {
        return {
            active:'',
            clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
            candelete:{},//记录要删除的id
        }
    },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    background-color #fff
    .content {
        margin-top 49px;
        .merchant{
            overflow-x: hidden;
            .merchant-msg{
                padding: .1rem;
                position relative
                transform: translateX(0);
                transition: all .3s;
                a{
                    display block
                    width 100%
                    height 100%
                    display flex;
                    .merchant-img{
                        width: 50px;
                        height: 50px;
                        img{
                            width 100%
                            height 100%
                        }
                    }
                    .merchant-text{
                        flex 1
                        padding-left 10px
                        h3{
                            padding-top: .03rem;
                            padding-bottom: .05rem;
                            font-weight: normal;
                            font-size: .15rem;
                            color: #323232;
                        }
                    }
                }
                div.del{
                    position: absolute;
                    top: 0;
                    right: -1px;
                    z-index: 3;
                    width: 100px;
                    height: 100%;
                    line-height 70px
                    text-align: center;
                    color: #fff;
                    background-color: #ff3636;
                    transition: all .3s;
                    transform: translateX(100px); 
                    font-size 16px;
                }
            }
            li.move{
                transform: translateX(-100px); 
            }
        }
    }
}
</style>
