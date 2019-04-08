<template>
<!--分类页面左边list 需要传递一个list数组-->
    <div class="left clearfix">
        <div class="mui-scroll-wrapper" style="top: 0px; bottom: 0px">
	        <div class="mui-scroll">
            <!-- content goes here -->
                <ul class="content">
                    <li v-for="(item, index) in list" :key="item.id" class="classddd">
                        <p  :class="item.isActive==true?'active':' '"  @click="isActive(index,item)">{{item.title}}</p>
                        <div  ref="liCon" class="isshow" style="height:0">
                            <li class="class2" style="width:100%;background-color:#fff" v-for="(item2, index) in item.class2" :key="item.index">
                                <p style="margin-bottom:0;background-color:#fff">{{item2.title}}</p>
                            </li>
                        </div>
                    </li>
                    <p class="line" style="height:0.52rem"></p>
                    <p class="line" style="height:0.52rem"></p>
                    <p class="line" style="height:0.52rem"></p>
                </ul>
     	    </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'leftList',
    components:{

    },
    props:{
        list:{
            required: true,
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
          liConHeight:0,
        }
    },
    mounted(){
        this.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0008, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            indicators:false,
        });
    },
    methods: {
        isActive(index,el){
            const liCon = this.$refs.liCon[index]
                var height = liCon.offsetHeight
                if (height === this.liConHeight) { // 展开
                liCon.style.height = 'auto'
                height = liCon.offsetHeight
                liCon.style.height = this.liConHeight + 'px'
                var f = document.body.offsetHeight // 必加
                liCon.style.height = height + 'px'
                
                } else { // 收缩
                liCon.style.height = height + 'px'
                var f = document.body.offsetHeight
                liCon.style.height = '0px'

                }
            for (var i = 0; i < this.list.length; i++) {
                if(this.list[i]==this.list[index]){
                    this.list[index].isActive=true
                }else{
                    this.list[i].isActive=false;
                }
            }
        },
    }
}
</script>
<style lang="stylus" scoped>
.left{
    width: 83px;
    height: calc(100vh-192px);
    position: relative;
    background-color #f2f2f2;
    .mui-scroll{
        li.classddd{
            width:100%;
            // height: 52px;
            padding-bottom: 0px;
            background-color: #fff;
            font-size: 12px;
            overflow hidden
            p{
                width: 100%;
                height: 52px;
                display: flex;
                display: -webkit-flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                text-align: center;
                margin-bottom :2px;
                font-size :12px;
                line-height 15px;
                background-color #f2f2f2;
            }
            p.active{
                border-left: 3px solid  #ff3b3c;
                background-color: #fff;
            }
            .isshow{
                overflow: hidden;
                transition: height .3s;
            }
        }
    }
}
</style>
