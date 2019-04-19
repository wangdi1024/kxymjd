<template>
    <form onsubmit="return false"  id="form1" class="m-send"    enctype="multipart/form-data" method="post">
        <div class="text-box">
            <input type="text" id="send" name="content" placeholder="请输入咨询内容" v-model="inputText" @keyup='theInput'>
            <div class="talk-send clearfix" :class="isKeyup?'active':' '">
                <i class="icon icon-talk-img">
                    <input type="file" name="files[]" id="talk-img">
                </i>
                <i class="icon icon-send" id="send-msg" ref="sendMsg" :class="isKeyup?'active':' '" @click="sendMsg"></i>
            </div>
        </div>
        {{inputText}}
    </form>
</template>
<script>
export default {
    name:'textBox',
    props: ['value'],
    model:{
        prop:'value',
        event:'sendMsg'
    },
    data() {
        return {
            isKeyup:false,
            inputText:this.value,
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
        // 将要发的内容传递给父组件
        sendMsg(){
            this.$emit("sendMsg", this.inputText)
        }
    },
}
</script>
<style lang="stylus" scoped>
.text-box{
    display flex
    width 100%
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
</style>
