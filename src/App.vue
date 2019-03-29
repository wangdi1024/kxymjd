<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" v-if="$route.meta.navShow">
      <mt-tab-item id="index" >
        <i class="fa fa-home" aria-hidden="true"></i>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="category" >
        <i class="fa fa-list" aria-hidden="true"></i>
        <p>分类</p>
      </mt-tab-item>
      <mt-tab-item id="发现" >
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>购物车</p>
      </mt-tab-item>
      <mt-tab-item id="member" > 
        <i class="fa fa-user" aria-hidden="true"></i>
          <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selected:'',
    }
  },
  watch: {
    selected(newv,oldv){
      console.log(newv);
      this.$router.push({
        name:newv
      })
    }
  },
}
</script>

<style scoped>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* color: #666; */

}
body{
  padding: 0px 0px 50px 0px ;
  margin: 0;
}
 .mint-tab-item-label i{
   display: inline-block;
   font-size: 20px;
 }

.mint-tabbar{
  /* padding: 7px 0px; */
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  box-shadow: 0 0 10px #9c9696;
}
.mint-tab-item{
  padding: 6px 0px 0px 0px;
  
}
.mint-tab-item a i{
  color: #666 !important;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: #fc9109;
}
.mint-tabbar > .mint-tab-item.is-selected p{
  color: #fc9109;
}
</style>
