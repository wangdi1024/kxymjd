<template>
    <!--收货地址页面-->
    <div class="box">
        <navBar title="地址管理"></navBar>
        <div class="mui-content content">
            <div class="address">
                <div class="item">
                    <div class="item-title">
                        <mt-radio
                        v-model="value"
                        :options="options">
                        </mt-radio>
                    </div>
                    <div class="item-content">
                        <div class="item-font"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Radio } from 'mint-ui';
import navBar from './common/nav-bar'
export default {
    name:'delivery',
    components:{
        navBar,
    },
    data() {
        return {
            value:'',
            options:[
                {
                    label: '被禁用',
                    value: '值F',
                },
                ]
            
        }
    },
}
</script>
<style lang="stylus" scoped>
    .box{
        overflow hidden;
        .content{
            margin-top 50px;
            .address{
                .item{
                    width 100%;
                    padding 10px;
                }
            }
        }
    }
</style>


