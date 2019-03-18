<template>
    <div class="left clearfix">
        <div class="mui-scroll-wrapper" style="top: 0px; bottom: 0px">
	        <div class="mui-scroll">
            <!-- content goes here -->
                <ul class="content">
                    <li v-for="(item, index) in list" :key="item.id">
                        <p  :class="item.isActive==true?'active':' '"  @click="isActive(index)">{{item.title}}</p>
                    </li>
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
          
        }
    },
    mounted(){
        this.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0008, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            indicators:false,
        });
    },
    methods: {
        isActive(index){
            for (var i = 0; i < this.list.length; i++) {
                if(this.list[i]==this.list[index]){
                    this.list[index].isActive=true
                }else{
                    this.list[i].isActive=false;
                }
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.left{
    width: 83px;
    height: 100%;
    position: relative;
    .mui-scroll{
        // min-height: 101%;
    li{
        width:100%;
        height: 52px;
        margin-bottom: 2px;
        background-color: #f2f2f2;
        font-size: 12px;
        p{
            width: 100%;
            height: 100%;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            text-align: center;
            margin-bottom :0px;
        }
         p.active{
            border-left: 3px solid  #ff3b3c;
            background-color: #fff;
        }
    }
  }
}
</style>
