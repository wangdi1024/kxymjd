<template>
<!--首页及分类的头部，需要传递一个placeholder，是input的内容，还要两个具名slot-->
    <div class="header" style="background:#F2F2F2">
            <!-- <img src="../../assets/img/home_logo.png" alt=""> -->
            <div class="img">
                <slot name="img"></slot>
            </div>
            <div class="serach">
                <input type="text" :placeholder="placeholder">
                <i class="fa fa-search"></i>
            </div>
            <div class="delect-text">
                <!-- <i class="fa fa-comment-o"></i>
                <i class="fa fa-qrcode"></i> -->
                <slot name="icon"></slot>
            </div>
        </div>
</template>
<script>
export default {
    name:'navTitle',
    props:['placeholder'],
}
</script>
<style scoped>
 .header{
     display:-webkit-flex;
     display: flex;
     align-items: center;
     position: fixed;
     top: 0;
     z-index: 999;
     width: 100%;
}
 .header .img{
     width:50px;
     height: 100%;
     padding: 3px;
     text-align: center;
}
 .header .img img{
     width: 30px;
     height: 30px;
     display: inline-block;
 }
 .serach{
     flex: 1;
     background: #FFF;
     overflow: hidden;
     height: 0.31rem;
     padding: 0rem 0.05rem ;
     border-radius: 0.1rem;
}
 .serach input{
     height: 100%;
     width: 100%;
     border:none;
     background-color: #fff;
     position: relative;
     font-size: 14px;
}
 .serach i{
     position: absolute;
     top: 0.15rem;
     right: 0.7rem;
     font-size: 0.16rem;
}
 .delect-text{
     font-size: 0.18rem;
     height: 0.5rem;
     width: 55px;
     text-align: center;
}
 .delect-text i{
     padding: 0 0.05rem ;
     line-height: 0.5rem;
}
 
</style>
