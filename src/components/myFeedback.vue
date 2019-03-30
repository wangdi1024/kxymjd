<template>
    <div class="box">
        <mt-header title="我的反馈">
            <div @click="back" slot="left">
                <mt-button icon="back"></mt-button>
            </div>
            <mt-button  slot="right">
                <slot></slot>
            </mt-button>
        </mt-header>
        <div class="mui-content content">
            <form action="" method="post">
                <textarea name="content"cols="30" rows="10" placeholder="亲爱的用户，欢迎您留下宝贵的意见">

                </textarea>
            </form>
            <div class="meaasge">
                <div class="item-left">
                    <div class="head">
                        <img src="../assets/img/home_logo.png" alt="">
                        <span>我</span>
                    </div>
                    <div class="inform-content">哈哈哈</div>
                    <p class="inform-time ">2019-03-30 10:28:00</p>
                </div>
                <div class="item-right">
                    <div class="head">
                        <img src="../assets/img/home_logo.png" alt="">
                        <span>我</span>
                    </div>
                    <div class="inform-content" >哈哈哈</div>
                    <p class="inform-time ">2019-03-30 10:28:00</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
export default {
    name:'myFeedback',
    components:{
        navBar
    },
    mounted() {
        console.log(this.$route.params.selected);
    },
    methods:{
        back(){
            this.$router.push({name:'feedback',params:{selected:this.$route.params.selected}})
            console.log(111);
        }
    },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .mint-header{
        background-color: #fff;
        color: black;
        height: 50px;
        position: fixed;
        width: 100%;
        z-index: 999;
    }
    .content{
        margin-top 60px;
        .meaasge{
            margin-top 10px;
            background-color #fff;
            .item-left,.item-right{
                padding 10px;
            }
            .item-left,.item-right{
                border-bottom 1px solid #f2f2f2
                .head{
                    img{
                        width 31px;
                        height 31px;
                        margin-right 10px;
                    }
                    span{
                        color: #909090;
                        font-size: .14rem;
                    }
                }
                p,.inform-content{
                    padding 10px 0px 5px 0px;
                    font-size: .02rem;
                    color: #b4b4b4;
                }
                .inform-content{
                    font-size 15px;
                    color #323232;
                }
            }
            .item-right{
                text-align right ;
            }
        }
    }
}
</style>

