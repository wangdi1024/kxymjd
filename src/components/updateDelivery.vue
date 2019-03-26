<template>
    <div class="box">
        <nav-bar title="修改收货地址"></nav-bar>
        <div class="mui-content content">
            <form method="post" name="member-address">
                <ul>
                    <li class="item">
                        <div class="item-content">
                            <div class="name item-title">收货人姓名</div>
                            <input type="text" name="true_name" v-model="name" value="name">
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-content">
                            <div class="iPhone item-title">手机号码</div>
                            <input type="text" name="iPhone" v-model="iPhone" >
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-content">
                            <div class="address item-title">所在区域</div>
                            <input type="text" name="address" v-model="address" >
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-content">
                            <div class="DetailedAddress item-title">详细地址</div>
                            <input type="text" name="DetailedAddress" v-model="DetailedAddress">
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-content">
                           <div class="defult item-title">设为默认地址</div>
                           <label class="ui-control" @click="defult">
                                <input type="radio" name="type" checked="checked">
                                <span class="ui-radio-x" v-if="isDefult"></span>
                                <span class="ui-radio" v-else></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </form>
            <div class="save">
                <mt-button type="primary" size="large" style="border-radius:20px ">保存</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
// 引入导航栏
import navBar from './common/nav-bar'
export default {
    components:{
        navBar,
    },
    data() {
        return {
            name:'',
            iPhone:'',
            address:'',
            DetailedAddress:'',
            isDefult:false,
        }
    },
    mounted(){
        this.name=this.$store.state.ContactAddress.consigneeName
        this.iPhone=this.$store.state.ContactAddress.iPhone
        this.address=this.$store.state.ContactAddress.address
        this.DetailedAddress=this.$store.state.ContactAddress.DetailedAddress
         console.log( this.$store.state);
        //修改body背景颜色
        document.querySelector('body').setAttribute('style','background-color：#F2F2F2')
    },
    methods:{
        defult(){
            this.isDefult=!this.isDefult
        }
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden;
        .content{
            margin-top 60px;
            background-color #F2F2F2
            ul{
                li.item{
                    color: #232323;
                    background-color: #fff;
                    padding 0px 10px;
                    font-size 14px;
                    .item-content{
                        display flex;
                        height 54px;
                        line-height 54px;
                        .item-title{
                            width 120px;
                        }
                        input[type="text"]{
                            flex 1
                            outline none
                            height 100%
                        }
                        .ui-control{
                            transform translateX(210px)
                            span{
                                width 20px
                                height 20px
                                display inline-block
                            }
                            .ui-radio-x{
                                background url('../assets/img/checkbox_active.png')
                                background-size: 100%;
                            }
                            .ui-radio{
                                background url('../assets/img/checkbox.png')
                                background-size: 100%;
                            }
                            input[type="radio"]{
                                opacity: 0;
                                outline: 0;
                                position: absolute;
                                z-index: -1;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                margin: 0;
                            }
                        }
                    }
                }
                li:last-child{
                    margin-top 20px;
                }
            }
            .save{
                width 355px
                margin-top 50px;
                transform translateX(10px)
                .mint-button--primary{
                    background-color:#fc9109;
                    width 100%;
                }
            }

        }
    }
</style>
