<template>
    <div class="goods">
         <!-- 品牌选择 -->
        <div class="sort-warp-new">
            <div class="sort-check" ref="sortCheck" style="height: 0.37rem; overflow-y: hidden;">
                <span class="brand_more" @click="brandMore">更多<i class="fa fa-sort-amount-desc"></i></span>
                <ul>
                    <li ref="sortUl">
                        <a href="javascript:;" v-for="(item ,index) in brandList" :key="index">{{item.brand}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mod-goods-list">
            <!-- 左侧分类导航栏 -->
             <leftList :list='leftList'></leftList>
              <div class="rightList">
                <div class="mui-scroll-wrapper">
	                <div class="mui-scroll">
                        <hotGoods :hotGoods='hotGoods'  v-for="(item ,index) in hotGoods" :key='index' bgcolor='#ff273b'>
                            <img :src="item.img" alt="" slot="img">
                            <a href="#" class="shopName" slot="shopName">{{item.name}}</a>
                            <p>条码 : {{item.id}}</p>
                            <p>{{item.store_name}}}</p>
                            <p><del>原价 :{{item.goods_price}}</del></p>
                            <p style="color:#ff273b;font-weight:700">
                                <span class="text-price1" style="font-size:0.16rem">¥{{item.goods_activity_price}}</span><span class="text-price2">/包<span> ¥{{item.goods_price}}/箱</span></span>
                            </p>
                        </hotGoods>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
import leftList from '../common/left-list'
import hotGoods from '../common/hot-goods'

export default {
    name:'goods',
    components:{
        leftList,
        hotGoods,
    },
    data() {
        return {
             // 判断品牌显示或者隐藏的字段
            isShow:false,
            brandList:[
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                {brand:'维达'},
                {brand:'全部分类'},
                {brand:'榄菊'},
                {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
                // {brand:'全部分类'},
                // {brand:'榄菊'},
                // {brand:'云南白药'},
                // {brand:'维达'},
            ],
            height:'',
            leftList:[
                {title:'一次性餐桌用品',isActive:true,class2:[
                    {title:'一次性餐桌用品'},
                    {title:'烧烤/烘焙用具'},
                ]},
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

            hotGoods:[
                {
                id:1,
                img:require('../../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_barcode:6923308815678,
                goods_activity_price:300,
                store_name:'商家 : 深圳市广昌盛贸易有限公司',
                 goods_price:300,
                },
                {
                id:2,
                img:require('../../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_barcode:6923308815678,
                goods_activity_price:300,
                store_name:'商家 : 深圳市广昌盛贸易有限公司',
                 goods_price:300,
                },
            ],
        }
    },
    mounted(){
        
    },
    methods:{
         brandMore(){
            this.$nextTick(()=>{
                this.isShow=!this.isShow
                 if(this.isShow==true){
                //  console.log(111);
                // console.log(this.$refs.sortCheck.style.overflowY);
                    this.height= this.$refs.sortUl.offsetHeight
                   
                    // this.$refs.sortCheck.style.overflowY='auto'
                    this.$refs.sortCheck.style.height=0.82+'rem'
                    //   alert( this.$refs.sortCheck.style.height);
                    
                }else{
                    this.$refs.sortCheck.style.overflowY='hidden'
                    this.$refs.sortCheck.style.height=0.37+'rem'
                    // alert(this.$refs.sortCheck.style.height);
                }
            })
        }
    },
}
</script>
<style lang="stylus" scoped>
.goods{
    .sort-warp-new{
        background: #fff;
        padding: 0 .1rem;
        z-index: 999;
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
    .mod-goods-list{
        display: flex;
        display: -webkit-flex;
        height: 460px;
        width: 100%;
        position relative
        z-index 1
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
</style>

