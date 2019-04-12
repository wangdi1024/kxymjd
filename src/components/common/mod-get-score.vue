<template>
    <div class="mod-get-score">
        <div class="sign_datenum">
            <p>已连续签到</p>
            <p>3天</p>
        </div>
        <div class="date">
            <div class="line-frame"></div>
            <ul class="clearfix">
                <li class="data-item" v-for="(item,index) in list" :key="item.index">
                    <p style="font-size:12px">{{item}}</p>
                    <div v-if="isShow">
                        <img src="../../assets/img/sign_sore.png" alt="">
                    </div>
                    <div v-else>
                        +<span>5</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'modGetScore',
    data() {
        return {
             list:[],
             isShow:true,
        }
    },
    created(){
        var dateobj={}
        for (var i = 0; i < 7; i++) {
           dateobj=this.getFormatDate(i)
            this.list.push(dateobj)
        }
    },
    methods:{
        getFormatDate(n){
           var ss=24*60*60*1000 //一天的毫秒数
           var timestamp=new Date().getTime()//获取当前的时间戳
           var date1 = new Date(ss * n + timestamp) //加上n天的国际标准日期
            var newTime = date1.toLocaleString();
            var arr = newTime.split(" "); //把2018/6/4提取出来
            var arr2 = arr[0].split('/'); //把年月日数字单独提出来
            return  arr2[1] + '.' + arr2[2] ;
        },
    }
}
</script>
<style lang="stylus" scoped>
 .mod-get-score{
        width 100%;
        height 62px;
        background: -webkit-linear-gradient(left,#fc8a17,#ffa200);
        padding-top 10px;
        display flex;
        .sign_datenum{
            width 70px;
            height 57px;
            transform translateX(5px)
            padding-top 5px;
            border-right 1px solid #fff;
            p{
                font-size 12px;
                color #fff
                text-align center;
                padding-bottom 10px;
            }
        }
        .date{
            flex 1;
            position relative
            ul {
                margin-left 10px;
                z-index 2
                position absolute
                .data-item{
                    width 37px;
                    height 46px
                    margin-left 5px;
                    text-align center;
                    float left
                    p{
                        width 100%
                        padding 5px 0px;
                        text-align center;
                        color #fff;
                    }
                    div{
                        width 100%;
                        height 25px;
                        text-align center;
                        img {
                            width 25px;
                            height 100%;
                        }
                    }
                }
            }
            .line-frame{
                width 260px;
                border-bottom 2px solid #fff
                position absolute
                left 24px;
                top 33px;
                z-index 1;
            }
        }
    }
</style>

