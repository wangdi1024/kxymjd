<template>
    <li class="item" >
        <div class="red-img">
            <img src="../../assets/img/red_packet.png" alt="" v-if="isUse"  :Use='Use'>
            <img src="../../assets/img/used_red_packet.png" alt="" v-else>
        </div>
        <div class="text">
            <h3 style="font-size:14px;color:#323232;font-weight:700;margin-left:3px">满168元可用<span style="font-size:12px;color:#909090;font-weight:400">(注: 扣除商家优惠后)</span></h3>
            <p  style="font-size:12px;color:#909090;margin-top:8px;margin-left:5px;">有效期至: 2019-04-01&nbsp 剩余:<span style="color:red">13</span>天</p>
            <p  style="font-size:12px;color:#909090;margin-top:8px;margin-left:5px;">适用范围:&nbsp<span style="color:#fc9109">快销易通用</span></p>
        </div>
        <div class="out_of_date" v-show="!isUse">
            <img src="../../assets/img/out_of_date.png" alt="">
        </div>
        <div class="voucher-val">
            <p style="color:red">¥<span style="font-size:25px">18</span></p>
            <p  :text='text' class="goto_use" style="color:#414141;font-size:10px;width:60px;height:30px">{{text}}</p>
        </div>
    </li>
</template>
<script>
export default {
    name:'redList',
    props:['Use','text'],
    data() {
        return {
            isUse:''
        }
    },
    created(){
        console.log(111);
    },
    mounted(){
        console.log(111);
        this.isUse=this.Use
        console.log(this.Use);
    }
}
</script>
<style lang="stylus" scoped>
    .item{
        height 110px
        display flex
        padding 20px 10px 0 10px;
        background-color #fff
        margin-top 20px;
        position relative
        .red-img{
            width 52px;
            height 67px;
            img {
                width 100%;
                height 100%

            }
        }
        .voucher-val{
            width 80px;
            text-align center;
            line-height 30px;
            .goto_use{
                background-color #ededed
                border-radius 50px;
                transform translateX(15px)
            }
        }
        .text{
            flex 1
        }
        .out_of_date{
            width 62px;
            height 62px;
            position absolute;
            right 80px;
            top 20px;
            z-index 30;
            img {
                width 100%;
                height 100%;
                
            }
        }
    }
</style>


