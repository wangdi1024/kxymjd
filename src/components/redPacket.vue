<template>
    <div class="box">
        <nav-bar title="红包"></nav-bar>
        <div class="has-head">
            <div class="mod-tab-nav">
                <tabContainer></tabContainer>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import tabContainer from './common/tab-container'
export default {
    name:'redPacket',
    components:{
        navBar,
        tabContainer,
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .has-head{
            margin-top 50px;
        }
    }
</style>
