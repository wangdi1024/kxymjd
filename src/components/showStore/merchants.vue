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
                    <form onsubmit="return false" onkeydown="if(event.keyCode==13) return send_msg();" id="form1" class="m-send"    enctype="multipart/form-data" method="post">
                        <div class="text-box">
                            <input type="text" id="send" name="content" placeholder="请输入咨询内容" v-model="inputText" @keyup='theInput'>
                            <div class="talk-send clearfix" :class="isKeyup?'active':' '">
                                <i class="icon icon-talk-img">
                                    <input type="file" name="files[]" id="talk-img">
                                </i>
                                <i class="icon icon-send" id="send-msg" ref="sendMsg" :class="isKeyup?'active':' '"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'merchants',
    data() {
        return {
            isKeyup:false,
            inputText:'',
        }
    },
    methods:{
        theInput(){
             var sendMsg=this.$refs.sendMsg
            if(this.inputText!==''){
                this.isKeyup=true
                sendMsg.style.opacity=1
               
            }else{
                this.isKeyup=false
                 sendMsg.style.opacity=0
            }
        },
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
                .text-box{
                    display flex
                    #send{
                        flex :1
                        height: .37rem !important;
                        padding: .1rem;
                        border: 0;
                        font-size: .14rem;
                        border 1px solid #f2f2f2  !important;
                    }
                    .talk-send.active{
                        width 0.9rem
                    }
                    .talk-send{
                        position: relative;
                        -webkit-box-flex: initial;
                        -webkit-flex: initial;
                        flex: initial;
                        -webkit-box-pack: center;
                        -webkit-justify-content: center;
                        justify-content: center;
                        padding: 0 .1rem;
                        width: 0.5rem;
                        transition: all .5s ease-in-out;
                        -webkit-transition: all .5s ease-in-out;
                        .icon-talk-img{
                            background url('../../assets/img/icon-setImg.png')
                            position: absolute;
                            top: 50%;
                            -webkit-transform: translate(0%, -50%) rotate(0);
                            background-size: contain;
                            width: .3rem;
                            height: .3rem;
                            input[type="file"]{
                                width: .3rem;
                                height: .3rem;
                                opacity: 0;
                            }
                        }
                        .icon-send{
                            background url('../../assets/img/icon-send.png')
                            background-size: contain;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-55%);
                            left: 8px;
                            // margin-left: .1rem;
                            opacity: 0;
                            width: .3rem;
                            height: .3rem;
                            transform: translate(140%, -50%) rotate(0);
                            transition: all .5s ease-in-out;
                            -webkit-transition: all .5s ease-in-out;
                        }
                        .icon-send.active{
                            transform:translate(130%, -50%) rotate(-360deg);;
                            transition: all .5s;
                        }
                    }
                }
            }
        }
    }
}
</style>

