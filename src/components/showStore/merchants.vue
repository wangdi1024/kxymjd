<template>
    <div class="merchants">
        <div class="merchants-container">
            <!-- 商家详情 -->
            <div class="store-info">
                <div class="store-name">
                    <i class="fa fa-map-marker" style="color:#fc9109"></i>
                    <span>公司地址 : </span>
                    <p style="font-size:.11rem;position:relative;top:-0.48rem;left:1.02rem;height:0.5rem;width:2.5rem;line-height:.15rem;display: flex;justify-content: space-around;flex-direction: column;color:black">横岗社区力嘉路103号B栋一楼</p>
                </div>
                <div class="store-shipping top-line">
                    <i class="fa fa-clock-o"></i>
			        <span>服务时间 : 09:00:00-20:00:00</span>
                </div>
                <div class="store-about top-line">工商执照 ></div>
                <div class="store-about top-line">简介 : 专营进口休闲食品、进口奶类、饮料。</div>
            </div>
            <!-- 联系商家 -->
            <div class="sms-talk">
                <div class="talk-title bottom-line">
                    <span>&nbsp;咨询商家</span>
		        </div>
                <!-- 显示聊天区域 -->
                <div class="talk">
                    <div class="chat-warp" style="background:#fcfcfc"></div>
                    <!-- 底部聊天框 -->
                    <textBox @sendMsg='sendMsg'></textBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import textBox from '../common/text-box'
export default {
    name:'merchants',
    components:{
        textBox,
    },
    data() {
        return {
           
        }
    },
    methods:{
        // 接受父组件传递过来的值
        sendMsg(data){
            console.log(data);
        }
    }
}
</script>
<style lang="stylus" scoped>
.merchants{
    background-color #fff
    height 6rem
    .merchants-container{
        .store-info{
            .store-name{
                height: .5rem;
                line-height: .5rem;
                margin: 0 .1rem;
                font-size 14px;
            }
            .store-shipping{
                height: .5rem;
                line-height: .5rem;
                margin: 0 .1rem;
                font-size 14px;
            }
            i.fa{
                width: .14rem;
                height: .14rem;
                margin: 0 .05rem 0 .1rem;
                display inline-block
                font-size 16px;
                color #ccc
            }
            .store-about{
                padding: .1rem .2rem;
                color: #111;
                font-size: .13rem;
                line-height: .2rem;
            }
        }
        .sms-talk{
            padding: 0rem .25rem .25rem .25rem;
            margin-top: .1rem;
            overflow-x: hidden;
            overflow-y: auto;
            .talk-title{
                    font-size: .15rem;
                    color: red;
                    margin: 0;
                    line-height 50px
                    height 50px;
                    width 100%
                }
            .talk{
                .chat-warp{
                    padding: .05rem .05rem;
                    min-height: 1rem;
                    background-color red
                    margin-bottom 20px;
                }
            }
        }
    }
}
</style>

