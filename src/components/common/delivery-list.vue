<template>
    <li class="item">
        <div class="item-content" :style="{height: height,lineHeight:lineHeight}">
            <div class="name item-title">{{itemTitle}}</div>
            <slot></slot>
        </div>
    </li>
</template>
<script>
export default {
    name:'deliveryList',
    props:['itemTitle','height','lineHeight',],
}
</script>
<style lang="stylus" scoped>
 li.item{
    color: #232323;
    background-color: #fff;
    padding 0px 10px;
    font-size 14px;
    border-bottom 1px solid #f2f2f2
    .item-content{
        display flex;
        
        .item-title{
            width 120px;
        }
        input{
            height 46px !mprant ;
        }
    }
 }
</style>

