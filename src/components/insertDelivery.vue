<template>
<!--新增地址页面-->
    <div class="box">
        <nav-bar title="新增收货地址"></nav-bar>
        <div class="mui-content content">
            <form method="post" name="member-address">
                <ul>
                    <deliveryList itemTitle='收货人姓名' style="height:46px;lineHeight:46px">
                            <input type="text" name="true_name" v-model="name" value="name">
                    </deliveryList>
                    <deliveryList itemTitle='手机号码' style="height:46px;lineHeight:46px">
                            <input type="text" name="iPhone" v-model="iPhone" >
                    </deliveryList>
                    <deliveryList itemTitle='所在区域' style="height:46px;lineHeight:46px">
                            <input type="text" name="address" v-model="address" >
                    </deliveryList>  
                    <deliveryList itemTitle='详细地址' style="height:46px;lineHeight:46px">
                            <input type="text" name="DetailedAddress" v-model="DetailedAddress">
                    </deliveryList>
                    <li class="item">
                        <div class="item-content">
                        <div class="defult item-title">设为默认地址</div>
                        <label class="ui-control">
                                <input type="radio" name="type" checked="checked" @click="defult">
                                <span :class="is_default==1?'ui-radio-x':'ui-radio'"></span>
                                <!-- <span class="ui-radio" v-else></span> -->
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
//引入 联系人信息组件
import deliveryList from './common/delivery-list'
export default {
    name:'insertDelivery',
    components:{
        navBar,
        deliveryList,
    },
    data() {
        return {
            name:'',
            iPhone:'',
            address:'',
            DetailedAddress:'',
            is_default:1,
        }
    },
    methods:{
         defult(){
           if(this.is_default==1){
               this.is_default=0
            //    console.log(this.is_default);
            //    console.log('woshiif');
           }else{ 
               this.is_default=1
                // console.log(this.is_default);
                // console.log('woshielse');
           }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .content{
            margin-top 60px;
            ul{
                 li.item{
                    color: #232323;
                    background-color: #fff;
                    padding 0px 10px;
                    font-size 14px;
                    .item-content{
                        display flex;
                        height 46px;
                        line-height 46px;
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

