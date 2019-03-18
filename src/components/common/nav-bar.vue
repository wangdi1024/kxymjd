<template>
        <mt-header :title="title">
        <div @click="back" slot="left">
            <mt-button icon="back"></mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>
<script>
export default {
    name:'newbar',
    props:['title'],
    data() {
        return {

        }
    },
    methods:{
        back(){
            this.$router.go(-1)
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
    }

</style>
