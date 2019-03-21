<template>
    <div class="box">
        <nav-bar title="红包"></nav-bar>
        <div class="has-head">
            <div class="mod-tab-nav">
                <tabContainer :list='list'>
                    <red-list slot="iSUse" Use='false' text='已使用' ></red-list>
                    <red-list slot="notUse" text='未使用' Use='true'></red-list>
                    <red-list  slot="overdue" text='已过期'></red-list>
                </tabContainer>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import redList from './common/red-list'
import tabContainer from './common/tab-container'
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
                {text:'已使用',slot:'iSUse'},
                {text:'未使用',slot:'notUse'},
                {text:'已过期',slot:'overdue'},
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
