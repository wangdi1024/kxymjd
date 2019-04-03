<template>
 <div class="newslist">
  <ul>
   <li v-for="(item,index) in newslist" :key="index">
    <p class="p" ref="liCon">{{item.title}}</p>
    <div class="open" @click="open(item,index)">
        <div v-if="!item.isActive">【展开】</div>
        <div v-else>【收缩】</div>
    </div>
   </li>
  </ul>
 </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'test',
    data() {
    return {
        liConHeight: 50 ,// 两行文字的高度
         newslist:[
                {title:'一次性餐桌用品',isActive:true},
                {title:'烧烤/烘焙用具',isActive:false},
                {title:'杯子/水杯/水壶',isActive:false},
                {title:'厨用小工具/厨房储物',isActive:false},
                {title:'家用五金工具',isActive:false},
                {title:'卫生巾/护垫/成人尿裤',isActive:false},
                {title:'一次性餐桌用品',isActive:false},
                {title:'烧烤/烘焙用具',isActive:false},
                {title:'杯子/水杯/水壶',isActive:false},
                {title:'厨用小工具/厨房储物',isActive:false},
                {title:'家用五金工具',isActive:false},
                {title:'卫生巾/护垫/成人尿裤',isActive:false},
                {title:'一次性餐桌用品',isActive:false},
                {title:'烧烤/烘焙用具',isActive:false},
                {title:'杯子/水杯/水壶',isActive:false},
                {title:'厨用小工具/厨房储物',isActive:false},
                {title:'家用五金工具',isActive:false},
                {title:'卫生巾/护垫/成人尿裤',isActive:false},
                {title:'厨用小工具/厨房储物',isActive:false},
                {title:'家用五金工具',isActive:false},
                {title:'卫生巾/护垫/成人尿裤',isActive:false},
            ],
    }
  },
  methods: {
   open(item, i) {
    const liCon = this.$refs.liCon[i]
    var height = liCon.offsetHeight
    if (height === this.liConHeight) { // 展开
     liCon.style.height = 'auto'
     height = liCon.offsetHeight
     liCon.style.height = this.liConHeight + 'px'
     var f = document.body.offsetHeight // 必加
     liCon.style.height = height + 'px'
    } else { // 收缩
     liCon.style.height = this.liConHeight + 'px'
    }
    // if (!item.openFlag) {
    //  Vue.set(item, 'openFlag', true)
    // } else {
    //  Vue.set(item, 'openFlag', false)
    // }
   }
  }
}
</script>
<style lang="stylus" scoped>
.newslist ul li p {
    font-size: 14px;
    color: #555;
    line-height: 25px;
    height: 50px;
    overflow: hidden;
    transition: height .3s;
}
</style>
