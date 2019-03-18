<template>
    <li class="item-title">
        <div class="line"></div>
            <span>{{title}}</span>
        <div class="line line2"></div>
    </li>
</template>
<script>
export default {
    name:'itemTitle',
    props:{
        title:'',
    }
}
</script>
<style scoped>
.item-title{
    width: 100%;
    height: 27px;
    text-align: center;
    line-height: 27px;
    margin: 15px 0px 10px 0px ;
    position: relative;
}
.item-title .line{
    display: block;
    content: "";
    position: absolute;
    left: 55px;
    top: 12px;
    width: 41px;
    height: 1px;
    background-color: #f2f2f2;;
}
.item-title .line2{
    left: 179px;
}
</style>
