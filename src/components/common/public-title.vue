<template>
<!--首页的公告栏，需要传递一个time，表示动画的时长，还要传递一个text，公告的数据-->
    <div>
        <div class="textBox">
            <transition name="slide" :time='time'>
                <p id="srocllP" class="text" :key="text.id">{{text.val}}</p>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'publicTtle',
    // props:{
    //     textArr:{
    //         required: true,
    //         type: Array,
    //         default: () => []
    //     },  
    //     time:{
    //       type:String,
    //       default:""
    //     },
    // },
    props:['textArr','time'],
     data() {
            return {
                number:0,
                long:0,
            }
        },
    computed: {
        text () {
            return {
                id: this.number,
                val: this.textArr[this.number]
            }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
        this.long=this.time
      // eslint-disable-next-line
       this.timer = setTimeout(() => {
        if (this.number == this.textArr.length-1) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, this.long); // 滚动不需要停顿则将2000改成动画持续时间
    },
  }
}
</script>
<style>
  .textBox {
    width: 100%;
    height: 20px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 5px;
   
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>
