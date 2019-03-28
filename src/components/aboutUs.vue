<template>
    <!--关于快销易-->
    <div class="box">
        <nav-bar title="关于快销易"></nav-bar>
        <div class="mui-content content">
            <router-link to="/aboutDetail/关于我们" >
                <deliveryList itemTitle='关于我们' style="height:0.46rem;lineHeight:0.46rem"></deliveryList>
            </router-link>
            <router-link to="/aboutDetail/联系我们">
                <deliveryList itemTitle='联系我们' style="height::0.46rem;lineHeight:0.46rem"></deliveryList>
            </router-link>
            <router-link to="/aboutDetail/隐私政策">
                <deliveryList itemTitle='隐私政策' style="height::0.46rem;lineHeight:0.46rem"></deliveryList>
            </router-link>
            <router-link to="/aboutDetail/快销易用户条款">
                <deliveryList itemTitle='快销易用户条款' style="height::0.46rem;lineHeight:0.46rem"></deliveryList>
            </router-link>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import deliveryList from './common/delivery-list'
export default {
    name:'aboutUs',
    components:{
        navBar,
        deliveryList,
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .content{
            margin-top 60px;
        }
    }
</style>

