<template>
    <div class="box">
        <nav-bar :title="title"></nav-bar>
        <div class="content">
            <div class="nav-top">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">我的足迹</mt-tab-item>
                    <mt-tab-item id="2">常购清单</mt-tab-item>
                </mt-navbar>
            </div>
            <div class="nav-bottom">
                <mt-tab-container v-model="selected">
                    <!-- 我的足迹 -->
                    <mt-tab-container-item id="1">
                        <not-data v-if="goods==1"></not-data>
                        <hot-goods :hotGoods='hotGoods'  v-else v-for="(item ,index) in hotGoods" :key="index" bgcolor='#ff5500'>
                            <p>条码 : {{item.goods_barcode}}</p>
                            <p><del>原价 :{{item.goods_price}}</del></p>
                            <p style="color:#ff5500">
                                <span class="text-price1" style="font-size:0.16rem">¥{{item.goods_activity_price}}</span><span class="text-price2">/包<span> ¥{{item.goods_price}}/箱</span></span>
                            </p>
                             <i class="fa fa-shopping-cart" slot="icon"></i>
                        </hot-goods>
                    </mt-tab-container-item>
                    <!-- 常购清单 -->
                    <mt-tab-container-item id="2">
                        <not-data v-if="OftenBuy==2"></not-data>
                        <hot-goods :hotGoods='OftenBuyList'  v-else v-for="(item ,index) in OftenBuyList" :key="index" bgcolor='#ff5500'>
                            <p>条码 : {{item.goods_barcode}}</p>
                            <p><del>原价 :{{item.goods_price}}</del></p>
                            <p style="color:#ff5500">
                                <span class="text-price1" style="font-size:0.16rem">¥{{item.goods_activity_price}}</span><span class="text-price2">/包<span> ¥{{item.goods_price}}/箱</span></span>
                            </p>
                            <i class="fa fa-shopping-cart" slot="icon"></i>
                        </hot-goods>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import notData from './member/not-data'
import hotGoods from './common/hot-goods'
export default {
    name:'goodsBrowse',
    components:{
        navBar,
        notData,
        hotGoods,
    },
    data() {
        return {
            title:'',
            selected:this.$route.params.selected,
             // 判断商品栏无数据图片是否显示的字段
            goods:1,
            // 判断经销商栏无数据图片是否显示的字段
            OftenBuy:2,
            hotGoods:[
                {
                id:1,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_activity_price:69,
                goods_price:300,
                goods_barcode:6923308815678
                },
                {
                id:2,
                img:require('../assets/img/hot-shop.jpg'),
                name:"深圳市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_activity_price:69,
                goods_price:300,
                goods_barcode:6923308815678
                },
            ],
            OftenBuyList:[
                {
                id:1,
                img:require('../assets/img/hot-shop.jpg'),
                name:"北京市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_activity_price:69,
                goods_price:300,
                goods_barcode:6923308815678
                },
                {
                id:2,
                img:require('../assets/img/hot-shop.jpg'),
                name:"北京市礼尚汇贸易有限公司",
                banrd:'百草味  三只松鼠',
                goods_activity_price:69,
                goods_price:300,
                goods_barcode:6923308815678
                },
            ],

        }
    },
    mounted(){
        document.querySelector('body').setAttribute('style','padding:0px')
        if(this.selected==1){
            this.title='浏览足迹'
        }else{
            this.title='常购清单'
        }
         if(this.hotGoods.length>0){
            this.goods=2
        }
          //如果商家数组的长度大于0表示有商品，则不显示无商品图片
        if(this.OftenBuyList.length>0){
            this.OftenBuy=3
        }
    }
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .content{
            margin-top 50px;
            background-color #fff
            height: calc(92.33vh)
            .nav-bottom{
                margin-top 3px;
            }
        }
    }
</style>
