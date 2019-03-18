<template>
    <div>
        <nav-bar title="我的钱包"></nav-bar>
        <div class="has-head mui-mui-content">
            <div class="wallet-survey">
                <div class="text">
                    <p class="min-font">钱包总金额 （元）</p>
                    <p class="strong-font">0.00</p>
                    <p class="min-font">提现中金额：￥0.00</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
export default {
    name:'myPurse',
    components:{
        navBar,
    }
}
</script>
<style lang="stylus" scoped>
    .has-head{
        .wallet-survey{
            width 100%
        }
    }
</style>
