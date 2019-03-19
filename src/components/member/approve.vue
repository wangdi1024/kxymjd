<template>
    <div style="position: fixed;" class="approve">
        <a href="#">
            <img src="../../assets/img/approve.jpg" alt="">
        </a>
    </div>
</template>
<script>
export default {
    name:'approve',
}
</script>
<style lang="stylus" scoped>
 .approve{
     height:109px;
     width:100%
     z-index -999
     a{
         display block;
        img{
            width 100%;
            height 100%
        }
     }
 }
</style>
