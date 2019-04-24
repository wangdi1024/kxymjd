<template>
    <div class="num-box">
      <span class="sub" @click="sub">-</span>
       <input type="text" v-model="inputNumber" id="num" @click="changeNum">
       <span @click="add">+</span>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name:'',
    data() {
        return {
             // 默认的数量
            inputNumber:'1',
        }
    },
    methods:{
         // 加数量
        add(){
            this.inputNumber++
          
        },
        test(){
            console.log('测试一下');
        },
        // 减数量
        sub(){
             this.inputNumber--
           
             if(this.inputNumber<=1){
                 Dialog.alert({
                    message: '数量不能少于1哦'
                })
                this.inputNumber=1
                return false
             }
        },
        // 输入数量改变
        changeNum(){
            Dialog.confirm({
                message: '<div class="select-warp" style="border: 1px solid #a7a9aa;height:60px; border-radius: 5px"><input type="text" id="myinputnum" value="'+this.inputNumber+'"  style="border: 1px solid #a7a9aa; border-radius: 5px;width: 100%; height:60px; line-height: 46px;font-size: 40px;text-align: center"></div>'
            }).then(() => {
            //    console.log(this.inputNumber);
            var myinputnum=document.getElementById('myinputnum').value
            this.inputNumber=myinputnum
            this.$emit('changeNum',this.inputNumber)
            }).catch(() => {
                var myinputnum=document.getElementById('myinputnum')
                myinputnum.value=this.inputNumber
                
            });
        }
    },
}
</script>
<style lang="stylus" scoped>
 .num-box{
    position absolute
    bottom 10px
    right 0px
    border 1px solid #f2f2f2
    width 100px
    display flex
    span{
        width 28px
        height 28px
        display block
        text-align center
        line-height 28px
        border-left 1px solid #f2f2f2
    }
    .sub{
        border-left 0
        border-right 1px solid #f2f2f2
    }
    #num{
        flex 1
        text-align center
        height 28px !important
    }
}
</style>
