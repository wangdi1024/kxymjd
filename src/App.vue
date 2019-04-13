<template>
  <div id="app clearfix">
    <transition :name="transitionName">
      <router-view class="router" />
    </transition>
    <!-- <mt-tabbar v-model="selected" v-if="$route.meta.navShow">
      <mt-tab-item id="index" >
        <i class="iconfont icon-shouye1" aria-hidden="true"></i>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="category" >
        <i class="iconfont icon-fenleixuanzhong" aria-hidden="true"></i>
        <p>分类</p>
      </mt-tab-item>
      <mt-tab-item id="find" >
        <i class="fa fa-list" aria-hidden="true"></i>
        <p>发现</p>
      </mt-tab-item>
      <mt-tab-item id="发现" >
        <i class="iconfont icon-gouwucheman" aria-hidden="true"></i>
          <p>购物车</p>
      </mt-tab-item>
      <mt-tab-item id="member" > 
        <i class="iconfont icon-wodedangxuan" aria-hidden="true"></i>
          <p>我的</p>
      </mt-tab-item>
    </mt-tabbar> -->
    <div class="com-footer"  v-if="$route.meta.navShow">
      <ul>
        <li class="index" >
          <router-link to="/index" :class="{'active' :active==0}">
            <i class="index-icon" :class="{'active' :active==0}"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li class="category" >
          <router-link to="/category"  :class="{'active' :active==1}">
            <i class="category-icon" :class="{'active' :active==1}"></i>
            <p>分类</p>
          </router-link>
        </li>
        <li class="find" >
          <router-link to="/find"  :class="{'active' :active==2}">
            <i class="find-icon" :class="{'active' :active==2}"></i>
            <p>发现</p>
          </router-link>
        </li>
        <li class="shopcart">
          <a href="#" :class="{'active' :active==3}">
            <i class="shopcart-icon" :class="{'active' :active==3}"></i>
            <p>购物车</p>
          </a>
        </li>
        <li class="member" >
          <router-link to="/member" href="#" :class="{'active' :active==4}">
            <i class="member-icon" :class="{'active' :active==4}"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

      active:'',
      transitionName:'slide-left',
    }
  },
  created(){
    // console.log(this.$route.path);
    if(this.$route.path=='/index'){
        this.active=0
     }else if(this.$route.path=='/category'){
       this.active=1
     }else if(this.$route.path=='/find'){
        this.active=2
     }else if(this.$route.path=='/member'){
       this.active=4
     }else{
        this.active=3
     }
  },
  mounted(){
   
  },
  methods:{
    selected(index){
      this.active=index
    },
  },
  watch: {
    '$route'(to,from){
      // console.log(this.$router.isBack);
      let isBack=this.$router.isBack
      if(isBack){
        this.transitionName='slide-right'
      }else{
        this.transitionName='slide-left'
      }
      this.$router.isBack=false
      // console.log(to);
     if(to.path=='/index'){
        this.active=0
     }else if(to.path=='/category'){
       this.active=1
     }else if(to.path=='/find'){
        this.active=2
     }else if(to.path=='/member'){
       this.active=4
     }else{
       this.active=3
     }
    }
  },
 
}
</script>

<style style lang="stylus" scoped>
body{
  padding: 0px 0px 50px 0px ;
  margin: 0;
    .com-footer{
      width: 100%;
      height: 0.5rem;
      background-color: #fff;
      box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.3);
      position: fixed;
      z-index: 99;
      bottom 0;
      ul{
        display flex;
        height 100%
        li{
          flex 1;
          height 100%
          a.active{
            color:#fc9109
          }
          a{
            display block
            height 100%
            width 100%
            p{
              text-align center;
            }
            i{
              width: .22rem;
              height: .22rem;
              display: block;
              margin: .06rem auto .05rem;
             
            }
            i.index-icon{
              background url('assets/img/icon_index_normal.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.index-icon.active{
              background url('assets/img/icon_index_press.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.category-icon{
              background url('assets/img/icon_fenglei_normal.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.category-icon.active{
              background url('assets/img/icon-class-selected.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.find-icon{
              background url('assets/img/icon_find_no_select.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.find-icon.active{
              background url('assets/img/icon_find_selected.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.shopcart-icon{
              background url('assets/img/icon_shopcar_normal.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.shopcart-icon.active{
              background url('assets/img/icon_shopcar_press.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.member-icon{
              background url('assets/img/icon_me-_normal.png') no-repeat center center
              background-size: .22rem .21rem;
            }
            i.member-icon.active{
              background url('assets/img/icon-me-selected.png') no-repeat center center
              background-size: .22rem .21rem;
            }
          }
        }
      }
    }
    .router{
      transition:all .3s ease
      position absolute
      width 100%
      z-index 1
    }
    .slide-left-enter-active,
    .slide-right-leave-active{
      opacity 0
      transform :translate(100%,0)
    }
    .slide-left-leave-active,
    .slide-right-enter{
      opacity 0
      transform :translate(-100% 0)
    }
}


</style>
