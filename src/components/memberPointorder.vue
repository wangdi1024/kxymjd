<template>
    <!--积分订单-->
    <div class="mui-content">
        <div class="tab-nav">
             <mt-navbar class="page-part"  v-model="selected">
                <mt-tab-item id="1">全部</mt-tab-item>
                <mt-tab-item id="2">待处理</mt-tab-item>
                <mt-tab-item id="3">已完成</mt-tab-item>
                <mt-tab-item id="4">已取消</mt-tab-item>
            </mt-navbar>
        </div>
    </div>
</template>
<script>
export default {
    name:'memberPointorder',
    data() {
        return {
            selected:'1',
        }
    },
}
</script>
<style lang="stylus" scoped>
    .mui-content{
        margin-top 50px;
    }
</style>
