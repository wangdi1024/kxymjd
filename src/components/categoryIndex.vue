<template>
    <div class="box">
        <!-- 分类二级页面 -->
        <!-- 头部 -->
        <navTitle placeholder='搜索商品'>
        <i class="mint-toast-icon mintui mintui-back" slot="img" @click="goBack"></i>
         <i class="fa fa-qrcode" slot="icon"></i> -->
        </navTitle>
        <!-- 内容 -->
        <div class="mui-content content">
            <!-- 分类选择 -->
            <div class="com-top">
                <ul class="mui-row">
                    <li class="mui-col-xs-3">
                        <a href="javascript:;" @click="choiceStatus(1)" :class="{'active':index==1}">综合</a>
                    </li>
                    <li  class="mui-col-xs-3" >
                        <a href="javascript:;"  @click="choiceStatus(2)" :class="{'active':index==2}">最新</a>
                    </li>
                    <li class="mui-col-xs-3" >
                        <a href="javascript:;"  @click="choiceStatus(3)" :class="{'active':index==3}">热销度<i class="fa fa-sort" style="margin-left:3px"></i></a>
                    </li>
                    <li class="mui-col-xs-3" >
                        <a href="javascript:;"  @click="choiceStatus(4)" :class="{'active':index==4}">价格<i class="fa fa-sort" style="margin-left:3px"></i></a>
                    </li>
                </ul>
            </div>
            <!-- 品牌选择 -->
            <div class="sort-warp-new">
                <div class="sort-check" ref="sortCheck" style="height: 37px; overflow-y: hidden;">
                    <span class="brand_more" @click="brandMore">更多<i class="fa fa-sort-amount-desc"></i></span>
                    <ul>
                        <li ref="sortUl">
                            <a href="javascript:;" v-for="(item ,index) in brandList" :key="index">{{item.brand}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="mod-goods-list">
                <!-- 左侧分类导航栏 -->
                <leftList :list='leftList'></leftList>
                <div class="rightList">
                    <div class="mui-scroll-wrapper">
	                    <div class="mui-scroll">
                            <hotGoods :hotGoods='rightList'></hotGoods>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
// 引入头部组件
import navTitle from './common/nav-title'
//引入左侧分类组件
import leftList from './common/left-list'
import hotGoods from './common/hot-goods'
import { throws } from 'assert';
export default {
    components:{
        navTitle,
        leftList,
        hotGoods
    },
    data() {
        return {
            //判断点击com-top的li高亮的字段
            index:1,//默认为全部
            // 品牌数据
            brandList:[
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
            ],
            // 判断品牌显示或者隐藏的字段
            isShow:false,
            //左侧分类数据
            leftList:[
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
            rightList:[
                 {
                    id:1,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:2,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:3,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:4,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:5,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:6,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:7,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:8,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:9,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
                 {
                    id:10,
                    img:require('../assets/img/hot-shop.jpg'),
                    name:"深圳市礼尚汇贸易有限公司",
                    banrd:'百草味  三只松鼠',
                    tiaoma:"222222222",
                    count:300,
                    sale:"¥333",
                },
            ],
        }
    },
    mounted(){
          document.querySelector('body').setAttribute('style', 'overflow-y: hidden;position: fixed;width:100%')
    },
    methods: {
        // 头部返回事件
        goBack(){
            this.$router.go(-1)
        },
        //判断点击com-top的li高亮的事件
        choiceStatus(index){
            this.index=index
        },
        //更多品牌事件
        brandMore(){
            this.isShow=!this.isShow
            var height= this.$refs.sortUl.offsetHeight
            console.log(height);
            if(this.isShow==true){
                //  console.log(111);
                // console.log(this.$refs.sortCheck.style.overflowY);
                this.$refs.sortCheck.style.overflowY='scroll'
                this.$refs.sortCheck.style.height=height+'px'
            }else{
                this.$refs.sortCheck.style.overflowY='hidden'
                this.$refs.sortCheck.style.height=37+'px'
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .content{
        margin-top 50px;
        // 分类选择样式
        height calc(100vh-0.86rem)
        .com-top {
            background-color #fff
            position: relative;
            
            ul{
                width 100%
                height 36px;
                li{
                    height 100%
                    a{
                        display inline-block;
                        font-size 14px;
                        color: #909090;
                        width 100%
                        height 100%
                        text-align center;
                        line-height 36px;
                    }
                    a::after{
                            content: '';
                            position: absolute;
                            top: 50%;
                            right: 0;
                            width: 1px;
                            height: 50%;
                            background-color: #f2f2f2;
                            display: block;
                            z-index: 2;
                            -webkit-transform-origin: 50% 100%;
                            transform-origin: 50% 100%;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    }
                    a.active{
                        color #fc9109;
                    }
                }
            }
        }
        // 品牌选择样式
        .sort-warp-new{
            background: #fff;
            padding: 0 .1rem;
            position: fixed;
            z-index: 999;
            width: 100%;
            .sort-check{
                position relative;
                display: flex;
                -webkit-transition: height 0.5s;
                transition: height 0.5s;
                .brand_more{
                    position absolute
                    top:7px;
                    right 2px
                    display inline-block;
                    height 100%;
                    text-align center;
                    line-height 26px;
                }
                ul{
                    display flex;
                    flex-wrap wrap;
                    li{
                        a{
                           width 64px;
                            height 26px;
                            margin 5px 0px 5px 14px;
                            display inline-block;
                            text-align center;
                            line-height 26px;
                            background: #f2f2f2;
                            border-radius: 10px;
                            border: 1px solid #f2f2f2;
                        }
                    }
                }
            }
        }
        //分类商品样式
        .mod-goods-list{
            display: flex;
            display: -webkit-flex;
            margin-top: 0.37rem;
            height: 560px;
            width: 100%;
            .left{
                width 75px;
            }
            .rightList{
                flex:1;
                position relative;
                padding 0px 5px;
                background-color #fff
            }
        }
    }
}
</style>
