<template>
<!--tab组件 需要传递一个list，list：数组，tab的数据-->
    <div>
        <div class="nav">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item :id='index' @click.native.prevent="isShow(index)" :class="selected==index?'is-selected':' '" v-for="(item, index) in list" :key="item.id">{{item.text}}</mt-tab-item>
                <!-- <mt-tab-item id="2" @click.native.prevent="isShow('2')" :class="selected=='2'?'is-selected':' '">已使用</mt-tab-item>
                <mt-tab-item id="3" @click.native.prevent="isShow('3')" :class="selected=='3'?'is-selected':' '">已过期</mt-tab-item> -->
            </mt-navbar>
            <!-- {{selected}} -->
        </div>
        <div class="seleted">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id='0' >
                    <slot name="iSUse"></slot>
                    <slot></slot>
                </mt-tab-container-item>
                <mt-tab-container-item id="1">
                   <slot name="notUse"></slot>
                   <slot></slot>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                   <slot name="overdue"></slot>
                   <slot></slot>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                   <slot name="casually"></slot>
                   <slot></slot>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { throws } from 'assert';
export default {
    name:'tabContainer',
    components:{
    },
    props:{
        list:{
           required: true,
            type: Array,
            default: () => [] 
        },
        
    },
    data() {
        return {
            selected:'0',
        }
    },
    methods:{
        isShow(index){
            this.selected=index+''
              console.log(this.selected);

        }
    }
}
</script>
<style lang="stylus" scoped>
    .seleted{
        padding 0 10px;
        height 100%;
        width 100%
        margin-top 20px;
    }
</style>
