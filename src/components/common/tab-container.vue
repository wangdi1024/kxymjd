<template>
    <div>
        <div class="nav">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="1" @click.native.prevent="isShow('1')" :class="selected=='1'?'is-selected':' '">未使用</mt-tab-item>
                <mt-tab-item id="2" @click.native.prevent="isShow('2')" :class="selected=='2'?'is-selected':' '">已使用</mt-tab-item>
                <mt-tab-item id="3" @click.native.prevent="isShow('3')" :class="selected=='3'?'is-selected':' '">已过期</mt-tab-item>
            </mt-navbar>
            <!-- {{selected}} -->
        </div>
        <div class="seleted">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <red-list Use='false'></red-list>
                    <red-list Use='false'></red-list>
                    <red-list></red-list>
                    <red-list></red-list>
                    <red-list></red-list>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :key='n' :title="'测试 ' + n"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6" :key='n' :title="'选项 ' + n"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import redList from './red-list'
import { throws } from 'assert';
export default {
    name:'tabContainer',
    components:{
        redList
    },
    data() {
        return {
            selected:'1',
        }
    },
    methods:{
        isShow(id){
            console.log(id);
            this.selected=id

        }
    }
}
</script>
<style lang="stylus" scoped>
    .seleted{
        padding 0 15px;
        height 100%;
        width 100%
        margin-top 20px;
    }
</style>
