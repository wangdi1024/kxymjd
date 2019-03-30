<template>
    <div class="box">
        <!-- 反馈页面 -->
        <!-- <nav-bar title="反馈记录"></nav-bar> -->
        <mt-header title="反馈记录">
            <div @click="back" slot="left">
                <mt-button icon="back"></mt-button>
            </div>
            <mt-button  slot="right">
                <slot></slot>
            </mt-button>
        </mt-header>
        <div class="mui-content content">
            <div class="nav-top">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">待回复</mt-tab-item>
                    <mt-tab-item id="2">已回复</mt-tab-item>
                </mt-navbar>
            </div>
            <div class="nav-bottom">
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <mt-cell title="你好吗" label="2019-10-31" is-link to="/myFeedback/1"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <mt-cell title="我很好" label="2019-10-31" is-link to="/myFeedback/2"></mt-cell>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Navbar, TabItem } from 'mint-ui';
export default {
    name:'feedback',
    components: {
        navBar,
    },
    mounted(){
        console.log(this.$route.params.selected);
        this.selected=this.$route.params.selected
    },
    data() {
        return {
            selected:'2',
        }
    },
    methods:{
        back(){
            this.$router.replace('/member')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        .mint-header{
            background-color: #fff;
            color: black;
            height: 50px;
            position: fixed;
            width: 100%;
            z-index: 999;
        }
        overflow hidden
        .content{
            margin-top 50px;
            background-color #fff
            height: calc(92.33vh)
            .nav-bottom{
                margin-top 3px;
            }
        }
    }
</style>

