<template>
    <div class="box">
        <nav-bar title="我的收藏"></nav-bar>
        <div class="content">
            <div class="nav-top">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">商品</mt-tab-item>
                    <mt-tab-item id="2">经销商</mt-tab-item>
                    <mt-tab-item id="3">资讯</mt-tab-item>
                </mt-navbar>
            </div>
            <div class="nav-bottom">
                <mt-tab-container v-model="selected">
                    <!-- 商品收藏 -->
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
                    <!-- 经销商收藏 -->
                    <mt-tab-container-item id="2">
                        <not-data v-if="dealers==2"></not-data>
                        <div class="list-picture">
                            <div class="items-dealers" v-for="(item ,index) in dealersList">
                                <a href="#">
                                    <div class="left-img">
                                        <img :src="item.store_img" alt="">
                                    </div>
                                    <div class="right-text">
                                        <h3 style="font-size:0.16rem;color:#323232">{{item.store_name}}</h3>
                                        <div class="strength_store">实力商家</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <!-- 资讯 -->
                    <mt-tab-container-item id="3">
                        <not-data v-if="information==3"></not-data>
                        <ul>
                            <mt-cell is-link v-for="(item ,index) in informationList" :key="index" :title="item.title" :label="item.time" ></mt-cell >
                        </ul>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import notData from './member/not-data'
import hotGoods from './common/hot-goods'
import { throws } from 'assert';
export default {
    name:'myFavorites',
    components:{
        navBar,
        notData,
        hotGoods,
    },
    data() {
        return {
            selected:this.$route.params.selected,
            // 判断商品栏无数据图片是否显示的字段
            goods:1,
            // 判断经销商栏无数据图片是否显示的字段
            dealers:2,
            // 判断资讯栏无数据图片是否显示的字段
            information:3,
            // 商品数组
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
            // 商家数组
            dealersList:[
                {
                    store_img:require('../assets/img/06070838811996868.png'),//店铺头像
                    store_name:'深圳市深祥发贸易有限公司'
                },
                {
                    store_img:require('../assets/img/06070838811996868.png'),//店铺头像
                    store_name:'深圳市深祥发贸易有限公司'
                },
            ],
            // 资讯数组
            informationList:[
                {title:'这是一个寂寞的天',time:'1900-00-00 00:00:00'},
                {title:'下着有些伤心的雨',time:'1900-00-00 00:00:00'}
            ],
        }
    },
    created(){
        
    },
    mounted () {
        //修改body的padding
        document.querySelector('body').setAttribute('style','padding:0px')
        //如果商品数组的长度大于0表示有商品，则不显示无商品图片
        if(this.hotGoods.length>0){
            this.goods=2
        }
          //如果商家数组的长度大于0表示有商品，则不显示无商品图片
        if(this.dealersList.length>0){
            this.dealers=3
        }
        //如果资讯数组的长度大于0表示有商品，则不显示无商品图片
        if(this.informationList.length>0){
            this.information=4
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
            position relative
            .nav-bottom{
                margin-top 2px;
                .list-picture{
                    .items-dealers{
                        height 75px;
                        padding 10px;
                        width 100%
                        a{
                            width 100%
                            height 100%
                            display flex;
                            .left-img{
                                width 50px;
                                height 50px;
                                img{
                                    width 100%
                                    height 100%
                                }
                            }
                            .right-text{
                                padding-left 10px;
                                .strength_store{
                                    color:#ff5500;
                                    width 65px;
                                    height 20px;
                                    border-radius:5px;
                                    border 1px solid #f50;
                                    font-size 12px;
                                    text-align center;
                                    line-height 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

