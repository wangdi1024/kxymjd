<template>
    <div class="box">
        <div class="tips-warp">
            <img src="../../assets/img/none-data.png" alt="">
            <p>暂时无数据</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'noData'
}
</script>
<style lang="stylus" scoped>
.box{
    // background-color:#f8f8f8;
    .tips-warp{
        z-index 999
        height 140px;
        width 100px;
        // position absolute
        transform translateX(148%)
        margin-top 100px;
        img {
            width 100%;
            height 100px;
        }
        p{
            margin-top 20px;
            font-size 16px;
        }
    }
}
</style>

