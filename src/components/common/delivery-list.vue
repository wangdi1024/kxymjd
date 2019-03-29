<template>
    <li class="item">
        <!-- item list -->
        <div class="item-content" :style="{height: height,lineHeight:lineHeight}">
            <div class="name item-title" :style="{width:width}">{{itemTitle}}</div>
            <slot></slot>
        </div>
    </li>
</template>
<script>
export default {
    name:'deliveryList',
    // itemTitle：li里面的文字 height子容器的高度 width：左边有文字的div的宽度
    props:['itemTitle','height','lineHeight','width'],
}
</script>
<style lang="stylus" scoped>
 li.item{
    color: #232323;
    background-color: #fff;
    padding 0px 10px;
    font-size 16px;
    border-bottom 1px solid #f2f2f2
    .item-content{
        display flex;
        font-size 15px;
        color #232323
        .item-title{
            width 120px;
        }
        input{
            height 46px !mprant ;
        }
    }
 }
</style>

