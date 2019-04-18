<template>
    <div class="clearfix box">
        <approve></approve>
        <div class="mui-content has-foot">
           <user-header></user-header>
           <div class="container">
               <member-tab></member-tab>
               <my-order></my-order>
               <commonly-used></commonly-used>
           </div>
        </div>
    </div>
</template>
<script>
import approve from './member/approve'
import userHeader from './member/user-header'
import memberTab from './member/member-tab'
import myOrder from './member/my-order'
import commonlyUsed from './member/commonly-used'
export default {
    name:'member',
    components:{
        approve,
        userHeader,
        memberTab,
        myOrder,
        commonlyUsed
    },
    data() {
        return {
            
        }
    },
    mounted(){
        // document.querySelector('body').setAttribute('style','padding-bottom:50px')
    }
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .has-foot{
        margin-top 109px;
        overflow: hidden;
        position: relative;
        .container{
            margin 0 10px;
            position: relative
            left 0;
            top -25px;
        }
    }
}
</style>
