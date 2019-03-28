<template>
    <div class="box">
        <nav-bar :title="title"></nav-bar>
        <div class="mui-content"></div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
export default {
    name:'aboutDetail',
    components:{
        navBar
    },
    data() {
        return {
            title:this.$route.params.title,
        }
    },
    mounted(){


    }
}
</script>
<style lang="stylus" scoped>

</style>
