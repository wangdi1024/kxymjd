<template>
<!--像积分商城navbar的公共组件-->
    <mt-header :title="title">
        <div @click="back" slot="left">
            <mt-button icon="back"></mt-button>
        </div>
        <mt-button  slot="right">
            <slot></slot>
        </mt-button>
    </mt-header>
</template>
<script>
export default {
    name:'navBar',
    props:['title'],
    data() {
        return {

        }
    },
    methods:{
        back(){
            this.$router.go(-1)
            this.$router.isBack=true
        }
    }
}
</script>
<style scoped>
    .mint-header{
        background-color: #fff;
        color: black;
        height: 50px;
        position: fixed;
        width: 100%;
        z-index: 999;
    }

</style>
