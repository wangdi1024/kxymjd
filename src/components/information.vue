<template>
<!--设置页面-->
<div class="box">
    <nav-bar title="设置"></nav-bar>
    <div class="mui-content content">
        <div class="user-icon">
            <div class="user-inner">
                <p>头像</p>
            </div>
            <div class="user-img">
                <img src="../assets/img/home_logo.png" alt=""  class="business-img">
                <input type="file" name="files[]" id="avatar">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
        <div class="business">
            <ul>
                <deliveryList itemTitle='商户门口照片' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <img src="../assets/img/home_logo.png" alt="" class="business-img">
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='商户营业执照' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <img src="../assets/img/home_logo.png" alt="" class="business-img">
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='企业/商户名称' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-img">哈哈</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='统一社会信用代码' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                       <div class="business-img"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='法人' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-img"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='所在地' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">广东深圳宝安区沙井街道</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='商户经营类型' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">学校</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='商户经营范围' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">便利店</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='商户经营属性' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">夫妻店</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='商户经营面积' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">50以下</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
            </ul>
        </div>
        <div class="user-info">
            <ul>
                <deliveryList itemTitle='手机号' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text">1383838338</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='性别' style="height:62px;lineHeight:62px">
                    <div class="item-pic"  @click="actionSheet">
                        <div class="business-text">{{gender}}</div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='地址管理' style="height:62px;lineHeight:62px">
                    <router-link to="/delivery" class="item-pic">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </router-link>
                </deliveryList>
                <deliveryList itemTitle='发票信息管理' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='密码管理' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='帐号绑定' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='注销账户（销户）' style="height:62px;lineHeight:62px" >
                    <div class="item-pic"  @click="loginOut">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
                <deliveryList itemTitle='关于快销易' style="height:62px;lineHeight:62px">
                    <div class="item-pic">
                        <div class="business-text"></div>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </deliveryList>
            </ul>
            <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
            </mt-actionsheet>
        </div>
    </div>
    <div class="footer">
        <a href="#">
            退出登录
        </a>
        <div style="color:#b4b4b4;text-align:center;padding:.2rem">
		    <p style="color:#b4b4b4">Copyright 2017-2019 快销易 All rights reserved<br></p><p style="color:#b4b4b4">粤ICP备16082737号-1</p>
	    </div>
    </div>
</div>
</template>
<script>
import navBar from './common/nav-bar'
//引入 联系人信息组件
import deliveryList from './common/delivery-list'
// 引入下拉框组件
import { Actionsheet } from 'mint-ui';
//引入弹出框组件
import { MessageBox } from 'mint-ui';
export default {
    name:'information',
    components:{
        navBar,
        deliveryList,
    },
    data() {
        return {
            actions:[
                {
                    name:'女',
                    method:this.getCamera	// 调用methods中的函数
                },
                {
                    name:'男',
                    method:this.getLibrary	// 调用methods中的函数
                },
            ],
            sheetVisible: false,
            gender:'女'

        }
    },
    methods:{
        actionSheet: function(){
            // 打开action sheet
        this.sheetVisible = true;
        },
        // 如果性别是女
        getCamera: function(){
            this.gender='女'
        },
         // 如果性别是男
        getLibrary: function(){
             this.gender='男'
        },
        //注销账户
        loginOut(){
            MessageBox({
                title: '确定要注销账户吗',
                message: '销户后将不能登录和注册?',
                showCancelButton: true
            }).then(action=>{
                if(action=='confirm'){
                    console.log('已注销');
                }else{
                    return false;
                }
            })
           
        }

    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .content{
            margin-top :60px
            .user-icon{
                height 62px;
                padding 0 10px
                display flex
                background-color #fff
                margin-bottom 10px;
                .user-inner{
                    flex 1
                    p{
                        width 100%
                        height 100%
                        line-height 62px
                        font-size 16px;
                        color :#232323;
                    }
                }
                .user-img{
                    width 72px;
                    line-height 62px
                    position relative
                    input {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        width: .92rem;
                        height: 1.2rem;
                        opacity: 0;
                    }
                    i{
                        font-size :18px;
                        color #8f8f94
                        position absolute;
                        top:23px;
                        left 56px;
                    }
                }

            }
            .business{
                margin-bottom  10px;
            }
            .user-info{

            }
        }
        .item-pic{
            flex 1
            position relative
            text-align right ;
            i{
                font-size :18px;
                color #8f8f94
                position absolute
                top:23px;
                left:220px;
            }
        }
         .business-img {
            width 47px;
            height 47px;
            margin-right 23px;
            display inline-block
            }
        .business-text{
            width 100%
            padding-right 30px;
        }
        .footer{
            margin-top 20px;
            a{
                border 1px solid #fc9109
                padding 8px 83px;
                width 60%
                transform translateX(33%)  
                height 35px;
                display block;
                line-height 20px
                border-radius 20px;
                color:#fc9109
            }
        }
    }
</style>
