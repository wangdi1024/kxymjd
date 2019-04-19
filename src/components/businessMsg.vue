<template>
    <div class="box">
        <navBar title="咨询商家">
            <span style="font-size:14px">刷新</span>
        </navBar>
        <div class="container has-head-foot bggray">
            <div class="chat-warp">
                <ul>
                    <li class="chat-item">
                        <span>5644445455</span>
                        <img src="" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-box">
            <div class="sendMsg-box">
                <textBox  @sendMsg='sendMsg' v-model="name"></textBox>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import textBox from './common/text-box'
export default {
    name:'businessMsg',
    components:{
        navBar,
        textBox
    },
    data() {
        return {
            name:'nick'
        }
    },
    methods:{
        sendMsg(data){
            console.log(data);
        }
    }
}
</script>
<style lang="stylus" scoped>
 .box{
     .has-head-foot{
         padding: 50px 0 50px;
     }
     .footer-box{
         width 100%
         height 50px
         padding-top 6px
         background-color #fff
         position fixed
         bottom 0
         z-index 999
        .sendMsg-box{
         width 355px
         padding 0px 15px
        }
     }
 }
</style>
