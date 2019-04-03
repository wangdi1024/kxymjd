<template>
    <div class="evaluate">
        <div class="evaluate-container clearfix">
            <div class="store-evaluate ">
                <div class="store-score">
                    <p class="score-num">5.0</p>
                </div>
                <p class="score-title">商家评分</p>
            </div>
            <div class="star-box">
                <p class="store-servicecredit">&nbsp;&nbsp;服务&nbsp;&nbsp;
                    <span>
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <span class="score-num" style="color:#fc9109">5.0</span>
                    </span>
                </p>
                <p class="store-servicecredit">&nbsp;&nbsp;运输&nbsp;&nbsp;
                    <span>
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <span class="score-num" style="color:#fc9109">5.0</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.evaluate{
    .evaluate-container{
        background: #fff;
        text-align: center;
        margin-bottom: .1rem;
        .store-evaluate{
            width 86px;
            height 86px;
            float left
            .score-num{
                font-size: .35rem;
                color: #fc9109;
                width 100%
                height 48px
                text-align center;
                line-height 48px;
            }
            .score-title{
                font-size: .13rem;
                color: #666;
                height: .25rem;
                line-height: .25rem;
            }
        }
        .star-box{
            float left
            width 192px;
            height 87px
            padding 20px 0px 
            .store-servicecredit{
                width 100%
                height 26px;
                span{
                    img{
                        width 14px;
                        height 14px;
                    }
                }
            }
        }
    }
}
</style>
