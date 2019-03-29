<template>
    <div class="box">
        <!-- 反馈页面 -->
        <nav-bar title="反馈记录"></nav-bar>
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
                        <mt-cell title="你好吗" label="2019-10-31" is-link to="/myFeedback"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <mt-cell title="我很好" label="2019-10-31" is-link to="/myFeedback"></mt-cell>
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
    data() {
        return {
            selected:'2',
        }
    },
}
</script>
<style lang="stylus" scoped>
    .box{
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

