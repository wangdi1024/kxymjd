<template>
    <div class="header" style="background:#F2F2F2">
            <img src="../../assets/img/home_logo.png" alt="">
            <div class="serach">
                <input type="text" placeholder="请输入你要搜索的内容">
                <i class="fa fa-search"></i>
            </div>
            <div class="delect-text">
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-qrcode"></i>
            </div>
        </div>
</template>
<script>
export default {
    name:'navTitle',
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
 .header img{
     width:35px;
     height: 35px;
     padding: 3px;
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
     right: 0.6rem;
     font-size: 0.16rem;
}
 .delect-text{
     font-size: 0.16rem;
     height: 0.5rem;
}
 .delect-text i{
     padding: 0 0.05rem ;
     line-height: 0.5rem;
}
 
</style>
