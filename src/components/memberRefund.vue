<template>
<!--退款订单-->
    <div class="content mui-content">
        <notData v-if="isshow"></notData>
    </div>
</template>
<script>
import notData from './member/not-data'
export default {
    name:'memberRefund',
    components:{
        notData,
    },
    data() {
        return {
            isshow:true
        }
    },
    created(){
        console.log(this.$route);
    },
}
</script>
<style lang="stylus" scoped>
    .content{
       
    }
</style>

