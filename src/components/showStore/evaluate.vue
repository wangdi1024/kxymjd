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
                        
                    </span>
                    <span class="score-num" style="color:#fc9109">5.0</span>
                </p>
                <p class="store-servicecredit">&nbsp;&nbsp;运输&nbsp;&nbsp;
                    <span>
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        <img src="../../assets/img/icon-star-yes.png" alt="">&nbsp;
                        
                    </span>
                    <span class="score-num" style="color:#fc9109;">5.0</span>
                </p>
            </div>
            <div class="satisfaction">
                <p class="store_deliverycredit">100%</p>
				<p class="deliverycredit-title">配送满意度</p>
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
    height 6rem
    background: #fff;
    overflow auto;
    .evaluate-container{
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
                    line-height 14px;
                    img{
                        width 14px;
                        height 14px;
                    }
                }
            }
        }
        .satisfaction{
            width 86px
            height 86px
            float left
            p.store_deliverycredit{
                height 50px;
                width 100%
                font-size 0.25rem
                color: #aaa
                line-height 0.5rem
            }
        }
    }
}
</style>
