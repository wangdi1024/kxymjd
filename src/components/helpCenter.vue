<template>
    <div class="box">
        <nav-bar title="帮助中心"></nav-bar>
        <div class="mui-content content">
            <router-link to="/helpList">
            <deliveryList itemTitle='帮助中心'  style="height:0.46rem;lineHeight:0.46rem;titleWidth:1.2rem"></deliveryList>
            </router-link>
            <deliveryList itemTitle='售后服务'  style="height:0.46rem;lineHeight:0.46rem;titleWidth:1.2rem"></deliveryList>
            <deliveryList itemTitle='客服中心'  style="height:0.46rem;lineHeight:0.46rem;titleWidth:1.2rem"></deliveryList>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import deliveryList from './common/delivery-list'
export default {
    name:'helpCenter',
    components:{
        navBar,
        deliveryList,
    },

}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden;
    .content{
        margin-top 60px;
    }
}

</style>
