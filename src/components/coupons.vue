<template>
    <div class="box">
        <nav-bar title="优惠券"></nav-bar>
        <div class="has-head">
            <div class="mod-tab-nav">
                <tabContainer :list='list'>
                    <red-list slot="iSUse" Use='false' text='未使用' ></red-list>
                    <red-list slot="notUse" text='已使用' Use='true'></red-list>
                    <red-list  slot="overdue" text='已过期' :list='list'></red-list>
                </tabContainer>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import tabContainer from './common/tab-container'
import redList from './common/red-list'
export default {
    name:'redPacket',
    components:{
        navBar,
        tabContainer,
        redList
    },
    data() {
        return {
             list:[
                 {text:'已使用',slot:'notUse'},
                {text:'未使用',slot:'notUse'},
                {text:'已过期',slot:'notUse'},
            ],
        }
    },
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
