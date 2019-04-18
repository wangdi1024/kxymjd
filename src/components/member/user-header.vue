<template>
     <div class="user-head">
        <div class="user-icon"><img src="../../assets/img/default_user_portrait.gif" alt=""></div>  
        <p class="user-name">我是谁</p>
        <div class="user-approve">商户未认证</div>
        <router-link to="/memberMessage" class="message"><i class="fa fa-envelope"></i></router-link>
        <div class="user-sign" @click="sign">
            <i class="fa fa-pencil-square-o"></i>
            <span>签到</span>
        </div>
    </div>
</template>
<script>
 import { Toast } from 'mint-ui';
export default {
    name:'user-header',
    data () {
        return {
            isSign:false,
        }
    },
    methods:{
        sign(){
            if(this.isSign==false){
                Toast({
                message: '签到成功',
                duration: 1000
             });
             this.isSign=true;
            }else{
                Toast({
                message: '您已经签过到了哦',
                duration: 1000
             }); 
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .user-head{
        position: relative;
        width: 100%;
        height 187px;
        background-image url('../../assets/img/user_head_bg.png') ;
        background-size: 100%;
        .user-icon{
            width 77px;
            height 77px;
            position absolute;
            left 15px;
            top 70px;
            img {
                width 100%;
                height 100%
                border-radius 50%;
            }
        }
        .user-name{
            font-size 18px;
            position absolute
            left 100px;
            bottom  80px;
            height 24px;
            color #fff;
        }
        .user-approve{
            font-size 14px;
            width 126px;
            height 24px;
            position absolute;
            left 100px
            bottom 60px;
            text-align center;
            line-height 20px;
            border-radius 10px;
            border 2px solid #ffd200;
            color #fff;
        }
        .message{
            position absolute;
            right 23px
            top 34px;
            font-size 20px;
            color #fff;
        }
        .user-sign{
            position absolute;
            right -8px;
            bottom 35px;
            height 27px;
            width 65px;
            display inline-block;
            font-size 13px;
            color red;
            background-color #fff
            text-align center;
            line-height 27px;
            border-radius 13px;
        }
    }
</style>
