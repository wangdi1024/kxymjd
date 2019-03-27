<template>
    <!--收货地址页面-->
    <div class="box">
        <navBar title="地址管理"></navBar>
        <div class="mui-content content">
            <div class="address">
                <div class="item" v-for="(item,index) in addressList" :key="index">
                    <div class="item-title">
                       <label class="ui-control" @click="isDefault(index)">
                            <input type="radio" name="type" checked="checked" v-model="checkedValue"  :value="item.id">
                            <span class="ui-radio-x" v-if="num==index"></span>
                            <span class="ui-radio" v-else></span>
                        </label>
                         设为默认
                         <a href="#" class="del">
                             <i class="fa fa-trash-o fa-fw"></i>
                         </a>
                    </div>
                    <div class="item-content">
                        <div class="item-font title">
                            <div class="name">{{item.name}}</div>
                            <div class="text-info phone">{{item.iPhone}}</div>
                            <div class="text-error state" v-show="num==index">{{defaultAddress}}</div>
                        </div>
                        <div class="clearfix delivery">
                            {{item.address}}
                            <router-link to="/updateDelivery">
                                <i class="fa fa-pencil-square-o"  @click="updateDelivery(index)"></i>
                            </router-link>
                        </div>
                        <div class="item-font text-default">
                            {{item.DetailedAddress}}
                        </div>
                    </div>
                </div>
            </div>
             <div class="save">
                 <router-link to="/insertDelivery">
                    <mt-button type="primary" size="large" style="border-radius:20px;color:#fc9109">+新增地址</mt-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
export default {
    name:'delivery',
    components:{
        navBar,
    },
    data() {
        return {
            addressList:[
                {name:'哈哈哈',iPhone:'1383838338',address:'中国北京天安门故宫',DetailedAddress:'不告诉你',id:0},
                {name:'哈哈哈',iPhone:'1383838338',address:'中国北京天安门故宫',DetailedAddress:'不告诉你',id:1},
            ],
            num:0,
            checkedValue:0,
            //选中时出现的默认
            defaultAddress:'',
        }
    },
    created(){
        //开始就默认为第一个地址
        this.defaultAddress='[ 默认 ]'
    },
    mounted(){
        
    },
    methods:{
    // 点击选中地址事件
        isDefault(index){
            // console.log(11);
            console.log(this.num);
            console.log(index);
            this.num=index
            // console.log(this.num);
            //  console.log('被选中的值为:'+this.checkedValue)
            this.defaultAddress='[ 默认 ]'
           
        },
        // 修改地址事件
        updateDelivery(index){
            console.log(index);
             this.$store.state.ContactAddress.consigneeName=this.addressList[index].name
             this.$store.state.ContactAddress.iPhone=this.addressList[index].iPhone
             this.$store.state.ContactAddress.address=this.addressList[index].address
             this.$store.state.ContactAddress.DetailedAddress=this.addressList[index].DetailedAddress
             console.log( this.$store.state);
        }
    },
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden;
        .content{
            margin-top 50px;
            overflow hidden
            .address{
                .item{
                    width 100%;
                    padding 10px;
                    background-color #fff
                    margin-top 10px;
                    .item-title{
                        line-height: .3rem;
                        color: #909090;
                        position relative
                        border-bottom 1px solid #f2f2f2;
                        font-size 0.14rem
                        .ui-control {
                            white-space: nowrap;
                            cursor: pointer;
                            outline: 0;
                            display: inline-block;
                            line-height: 1;
                            position: relative;
                            vertical-align: middle
                            input[type=radio] {
                                opacity: 0;
                                outline: 0;
                                position: absolute;
                                z-index: -1;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                margin: 0;
                            }
                            span {
                                width 15px
                                height 15px
                                display inline-block
                            }
                            .ui-radio-x{
                                background url('../assets/img/checkbox_active.png')
                                background-size: 100%;
                            }
                            .ui-radio{
                                background url('../assets/img/checkbox.png')
                                background-size: 100%;
                            }
                        }
                        .del{
                            float right;
                            color: #909090;
                            margin-left: .36rem;
                            height 100%;
                            width 31px;
                            display inline-block;
                            font-size 18px
                        }
                    }
                    .item-content{
                        font-size: .14rem;
                        line-height: .2rem;
                        padding-top: .1rem;
                        .title{
                            display flex
                            font-size 14px;
                            .name{
                                width 90px;
                                color #fc9109
                            }
                            .phone{
                                width 1.8rem
                            }
                            .state{
                                flex 1
                                color #e60012;
                            }   
                        }
                        .delivery{
                            a{
                                float right ;
                                display inline-block;
                                width 25px;
                                height 100%
                                font-size 16px;
                                color: #909090; 
                            }
                        }
                    }
                }
            }
            .save{
                width 355px
                margin-top 50px;
                transform translateX(10px)
                a{
                    width 100%
                    height 100%
                    .mint-button--primary{
                        background-color:#51b435;
                        width 100%;
                    }
                }
            }
        }
    }
</style>


