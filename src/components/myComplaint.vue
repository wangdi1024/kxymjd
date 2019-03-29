<template>
    <div class="box">
        <nav-bar title="我要投诉">
            <a href="#" style="font-size:0.14rem">我的反馈</a>
        </nav-bar>
        
        <div class="mui-content content">
            <form action="" method="post" name="msg">
                <div class="choice">
                    <select name="feedbackType" id="" class="feedbackType" v-model="optval">
                         <option disabled value="">请选择</option>
                        <option :value="item.val" v-for="(item , index) in option"  >{{item.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea class="form-control" placeholder="请输入你想咨询的内容" name="content" autofocus="" v-model.trim="textval"></textarea>
                </div>
            </form>
            <div class="btn" @click="submit">
                <a href="#">
                    <mt-button type="primary" size="large" style="border-radius:0.2rem;background-color: #fc9109;">提交</mt-button>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Toast } from 'mint-ui';
export default {
   name:'myComplaint',
   components:{
       navBar,
   }, 
   data() {
       return {
           option:[
               {val:1,text:'功能反馈'},
               {val:2,text:'商品反馈'},
               {val:3,text:'服务反馈'},
               {val:4,text:'其他反馈'},
           ],
           optval:"",
           textval:'',
        }
   },
   methods:{
       submit(){
           if(this.optval=='' || this.textval==''){
                Toast({
                    message: '反馈的内容不能为空',
                    duration: 2000
                });
           }else{
               Toast({
                    message: '反馈成功',
                    duration: 1000
                });
                this.$router.push('/feedback')
           }
       }
   }
}

</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden
        .content{
            margin-top 60px
            from{
                .choice{
                    height:40px;
                    position relative;
                    select.feedbackType {
                        option{
                           padding 0 3px;
                        }
                    }
                }
                .form-group {
                    textarea{
                        margin-top 10px !important;
                    }
                }
            }
            .btn{
                width 355px
                margin-top 50px;
                transform translateX(10px)
            }
        }
    }
</style>

