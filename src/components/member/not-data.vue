<template>
    <div>
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
        .tips-warp{
            height 140px;
            width 100px;
            position absolute
            left 50%;
            transform translateX(-50%)
            top:100px;
            img {
                width 100%;
                height 100px;
            }
            p{
                margin-top 20px;
                font-size 16px;
            }
        }
</style>

