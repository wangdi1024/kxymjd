<template>
    <div class="box" ref="router">
        <!-- 商品详情的父路由 -->
        <div class='header'>
            <div class="left" @click="goBack">
                <p class="mintui mintui-back"></p>
            </div>
            <div class="content">
                <router-link :to="{ path: '/productDetail/product', query: { goodsId: 3 }}" href="" class="items"  :class="{'active':active==1}">商品</router-link>
                <router-link :to="{ path: '/productDetail/goodsDetail', query: { goodsId: 4 }}" class="items" :class="{'active':active==2}">详情</router-link>
                <router-link :to="{ path: '/productDetail/evaluate', query: { goodsId: 4 }}" href="#" class="items" :class="{'active':active==3}">评价</router-link>
            </div>
            <div class="right" @click="isshow=!isshow"></div>
        </div>
        <div class="hide-nav flex-block" id="top-hide-nav" :class="{'active':isshow==true}">
            <router-link to="/index" class="items-more">
                <i class="iconfont icon-shouye1"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/category" href="#" class="items-more">
                <i class="iconfont icon-sousuo"></i>
                <p>搜索</p>
            </router-link>
            <a href="#" class="items-more">
                <i class="iconfont icon-tubiao313"></i>
                <p>消息</p>
            </a>
        </div> 
        <router-view class="product-active"  style="margin-top:50px"></router-view>
        <div class="detail-box flex-block">
            <div class="more-option">
                <a href="#">
                    <i class="iconfont icon-dianpu"></i>
                    <p>店铺</p>
                </a>
                <a href="#">
                    <i class="iconfont icon-gouwuchekong"></i>
                    <p >购物车</p>
                </a>
            </div>
            <div class="add-btn">
                 <mt-button type="default" size="large" style="border-radius:20px;background-color:#fff">加入购物车</mt-button>
            </div>
        </div>   
    </div>
    </div>
</template>
<script>
export default {
    name:"productDetail",
    data() {
        return {
            // 判断title添加下划线的字段
            active:1,
            // 判断头部下拉框是否显示的字段
            isshow:false
        }
    },
    methods:{
        goBack(){
            
        }
    },
    created(){
        // console.log(this.$route.path);
    },
    mounted(){
         this.$refs.router.style.position='static'
    },
    beforeRouteUpdate(to,from,next){
        // console.log(to);
        if(to.path=='/productDetail/product'){
            this.active=1
        }else if(to.path=='/productDetail/goodsDetail'){
            this.active=2
        }else{
            this.active=3
        }
        next()
    },
    watch:{
      '$route'(to,from){
          console.log(from);
      }
  },
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .header{
        width 100%;
        height 50px;
        position: fixed;
        z-index: 999;
        display flex;
        background-color #fff
        align-items center;
        .left, .right{
            width 45px;
            height 100%;
            text-align center
            line-height 50px;
        }
        .right{
            background url('../assets/img/icon-more.png') no-repeat center
            background-size: .34rem .21rem;
        }
        .content{
            flex 1;
            height 100%;
            text-align center
            display flex;
            align-items center;
            justify-content center;
            a{
                width 33.3%
                height 30px
                display inline-block;
                line-height 30px;
                font-size 15px;
                border-right 1px solid #f2f2f2;
                color #000;
                position relative
            }
            a:last-child{
               border-right 0px
            }
            .items.active::after{
                content: "";
                position: absolute;
                left: 50%;
                bottom: -0.1rem;
                display: block;
                width: 40%;
                height: .02rem;
                background-color: #ff5500;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }
    }
    .hide-nav{
        position: fixed;
        display flex
        top: 50px;
        left: 0;
        width: 100%;
        height: .8rem;
        background-color: white;
        z-index: 9;
        opacity: 0;
        -webkit-transform: translate3d(0, -150%, 0);
        transform: translate3d(0, -150%, 0);
        -webkit-transition: all .3s ease .3s;
        transition: all .3s ease .3s;
        -webkit-box-shadow: 0 5px 8px 0 rgba(6, 0, 1, 0.14);
        box-shadow: 0 5px 8px 0 rgba(6, 0, 1, 0.14);  
        .items-more{
            flex 1
            text-align center;
            display flex
            flex-direction column;
            align-items center
            justify-content center;
            i{
                color #fc9109
                font-size 22px;
                margin-bottom 10px
            }
        }
    }
    .hide-nav.active {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        box-shadow: 0 5px 8px 0 rgba(6, 0, 1, 0.14);  
    }
    .detail-box {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: .45rem;
        background-color: white;
        z-index: 99999;
        display flex
        .more-option{
            height 100%
            width 104px
            a{
                height 100%
                width 50%
                float left
                text-align center
                display flex
                align-items: center;
                -webkit-box-align: center;
                flex-direction:column
                justify-content center;
                font-size 12px;
                i{
                    display block
                    width 20px;
                    height 20px;
                    color:#fc9109
                }
                p{
                    color:#646464;
                }
            }
        }
        .add-btn{
            flex 1
            .mint-button--default{
                    width 97%
                    height .37rem
                    margin-top 5px;
                    background: -webkit-linear-gradient(left,#fc9109,#ff5500);
                    color #fff
                }
            }
        }
}
</style>
