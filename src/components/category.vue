<template>
    <div>
        <nav-title></nav-title>
        <div class="main clearfix mui-content">
            <left-list :list='list'></left-list>
            <div class="right">
                <div class="mui-scroll-wrapper"  style="top: 0px; bottom: 0.5rem">
                    <div class="mui-scroll">
                <!-- content goes here -->
                        <div class="top">
                            <ul class="clearfix" style="min-height:100%;touch-action: none;">
                                <item-title title='推荐分类'></item-title>
                                <li v-for="(item) in rightlist" :key="item.id" class="show-item">
                                    <a href="">
                                        <img src="http://www.kuaixiaoapp.com/data/upload/shop/common/category-pic-1068.jpg" alt="">
                                        <p>{{item.title}}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="bottom">
                            <item-title title="品牌推荐"></item-title>
                            <ul class="clearfix">
                                <li v-for="(item) in bottomList" :key="item.id">
                                    <a href="#">
                                        <img :src="item.img" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navTitle from './common/nav-title'
import itemTitle from './common/item-title'
import leftList from './common/left-list'

// document.addEventListener('touchmove', (e) => {
//   e.preventDefault();
// }, { passive: false });
export default {
    name:'category',
    components:{
        navTitle,
        itemTitle,
        leftList,
    },
    data() {
        return {
            list:[
                    {id:1,title:"推荐分类",isActive:true},
                    {id:2,title:"零食",isActive:false},
                    {id:3,title:"粮油米面",isActive:false},
                    {id:4,title:"酒类",isActive:false},
                    {id:5,title:"咖啡/麦片/冲饮",isActive:false},
                    {id:6,title:"腌制品/熟食",isActive:false},
                    {id:7,title:"腌制品/熟食",isActive:false},
                    {id:8,title:"腌制品/熟食",isActive:false},
                    {id:9,title:"腌制品/熟食",isActive:false},
                    {id:11,title:"腌制品/熟食",isActive:false},
                    {id:12,title:"腌制品/熟食",isActive:false},
                    {id:13,title:"腌制品/熟食",isActive:false},
                    {id:14,title:"腌制品/熟食",isActive:false},
                    {id:15,title:"腌制品/熟食",isActive:false},
                    {id:16,title:"腌制品/熟食",isActive:false},
                ],
                rightlist:[
                     {id:1,title:"蚊香"},
                    {id:2,title:"哈哈"},
                    {id:3,title:"哈哈"},
                    {id:4,title:"哈哈"},
                    {id:5,title:"哈哈"},
                    {id:6,title:"哈哈"},
                    {id:7,title:"哈哈"},
                    {id:8,title:"哈哈"},
                    {id:9,title:"哈哈"},
            ],
            bottomList:[
                {img:require('../assets/img/brand.png'),id:1},
                {img:require('../assets/img/brand.png'),id:2},
                {img:require('../assets/img/brand.png'),id:3},
                {img:require('../assets/img/brand.png'),id:4},
                {img:require('../assets/img/brand.png'),id:5},
                {img:require('../assets/img/brand.png'),id:6},
                {img:require('../assets/img/brand.png'),id:7},
                {img:require('../assets/img/brand.png'),id:8},
                {img:require('../assets/img/brand.png'),id:9},
                {img:require('../assets/img/brand.png'),id:10},
                {img:require('../assets/img/brand.png'),id:11},
            ],
        }
     },
    methods:{
        
    },
    mounted(){
        this.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            indicators:false,
            scrollY: true,
        });
         document.querySelector('body').setAttribute('style', 'backgroundColor:#fff')
    },
}
</script>
<style scoped>
html,
body {
    height: 100%;
    background-color: #fff !important;
}
.main{
     display: flex;
     display: -webkit-flex;
     margin-top: 0.5rem;
     height: 5.65rem;
     width: 100%;
     
}
 .right{
     flex: 1;
     height:100%;
     position: relative;
     background-color: #fff;
}
.mui-scroll-wrapper{
    height: 100%;
    
}
/* .mui-scroll{
    height: 101%;
} */
 .right ul{
     padding: 0.1rem;
}
 .right .top li.show-item{
     width: 0.88rem;
     height: 1.04rem;
     margin-top: 0.1rem;
    /* background-color: red;
     */
     float: left;
     text-align: center;
}
 .right .top .show-item a{
     display: inline-block;
}
 .right .top .show-item img{
     width: 0.72rem;
     height: 0.72rem;
}
 .right .top .show-item a p{
     margin-top: 0.1rem;
}
 .right .bottom ul li{
     width: 50%;
     float: left;
     height: 0.77rem;
     padding-top: 0.1rem;
     border: 1px solid #f2f2f2;
     box-sizing: border-box;
}
 .right .bottom ul li a{
     display: inline-block;
     width: 100%;
     height: 100%;
     text-align: center;
     line-height: 0.67rem;
}
 .right .bottom li a img{
     max-width: 1rem;
     max-height: 0.34rem 
}
 
</style>
