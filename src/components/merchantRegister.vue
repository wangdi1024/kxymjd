<template>
    <div class="box">
        <!-- 商户认证 -->
        <nav-bar title="商户认证"></nav-bar>
        <div class=" content">
            <!-- 表格商户信息数据 -->
            <div class="form-list">
                <p style="color:red;font-size:0.16rem;padding:0.15rem 0.3rem 0.15rem 0.3rem;font-weight:600;word-wrap:break-word;background:#f2f2f2;" v-show="isShow">拒绝原因：111</p>
                <div class="form-item">
                    <div class="item-content">
                        <div class="business_license_div">
                            <img id="business_license_img" :src="businessPhoto" alt=""  class="business-img" ref="businessImg" style="display:block">
                        </div>
                        <input type="text" class="type-file-text"  placeholder="营业执照" style="padding-left:0.15rem;font-size:0.15rem;width:1.8rem;" disabled="disabled">
                        <label for="business_license">
                            <van-uploader :after-read="business" accept='image/jpeg,image/png' multiple>
                                <div class="business_license" style="display: inline-block;text-align:center ;cursor: pointer;width:1rem;height:0.26rem;font-size:0.14rem;line-height:0.26rem;background-color: rgb(233,233,233);border-radius: .5rem;">拍照上传</div>
                            </van-uploader>
                        </label> 
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="business_license_div">
                           <img id="business_license_img" :src="shopPhoto" alt=""  class="business-img" ref="shopImg" style="display:block">
                        </div>
                          <input type="text" class="type-file-text"  placeholder="商户门口照片" style="padding-left:0.15rem;font-size:0.15rem;width:1.8rem" disabled="disabled">
                          <van-uploader :after-read="storePhoto " accept='image/jpeg,image/png' multiple>
                                <div class="business_license" style="display: inline-block;text-align:center ;cursor: pointer;width:1rem;height:0.26rem;font-size:0.14rem;line-height:0.26rem;background-color: rgb(233,233,233);border-radius: .5rem;">拍照上传</div>
                          </van-uploader>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <input id="member_name" type="text" class="item-control delect_buttom" name="member_name" placeholder="商户名称"  @focus="isShowX(1)" @blur='notShowX' v-model='MerchantName'>
                            <div class="delect-text" v-show="delText==1" @click="clearWords(1)">
        					    <img src="http://www.kuaixiaoapp.com/wap/resource/img/delect-text.png" alt="">
    					    </div>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <input id="member_name" type="text" class="item-control delect_buttom" name="member_name" placeholder="统一社会信用代码" @focus="isShowX(2)" @blur='notShowX' v-model='creditCode'>
                            <div class="delect-text" v-show="delText==2" @click="clearWords(2)">
        					    <img src="http://www.kuaixiaoapp.com/wap/resource/img/delect-text.png" alt="">
    					    </div>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <input id="member_name" type="text" class="item-control delect_buttom" name="member_name" placeholder="法人" >
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <select name="shop_class" id="shop_range" >
                                <option value="">商户所在商圈</option>
                                <option value="">社区</option>
                                <option value="">工厂</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <select name="shop_class" id="shop_range">
                                <option value="">商户销售渠道</option>
                                <option value="">社区</option>
                                <option value="">工厂</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <select name="shop_class" id="shop_range">
                                <option value="">商户经营模式</option>
                                <option value="">社区</option>
                                <option value="">工厂</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <div class="item-inner input_div">
                            <select name="shop_class" id="shop_range">
                                <option value="">商户面积</option>
                                <option value="">社区</option>
                                <option value="">工厂</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content" @click="actionsheet">
                        <div class="item-inner input_div">
                            <input id="member_name" type="text" class="item-control delect_buttom" name="member_name"  v-model="address" disabled='disabled'>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content" >
                        <div class="item-inner input_div">
                            <input id="member_name" type="text" class="item-control delect_buttom" name="member_name"  v-model="HouseNumber" placeholder="请输入详细地址、门牌号">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 尾部声明 -->
            <div class="plr-40 pt-20 warning" style="color:#909090;font-size:0.12rem;">
                <p>* 您提交的资料仅用于快销易认证，不做他用。</p><br>
                <br><p>* 商户名称与统一社会信用代码必须与营业执照信息一致</p><br>
                <br><p>* 照片要求：画面清晰完整</p><br>
            </div>
            <!-- 照片示例 -->
            <div class="PhotoSample plr-40">
                <img src="http://www.kuaixiaoapp.com/wap/resource/img/mb_auth_example.jpg" style="max-width:6.4rem">
            </div>
            <div class="submit">
                <mt-button type="default" size="large" style="border-radius:20px;background-color:#ffbe36;color:#fff" class="btn">提交认证</mt-button>
            </div>
        </div>
        <!-- 弹出地址 -->
         <van-popup v-model="show" position="bottom" :overlay="true">
            <van-area :area-list="areaList"  title="选择所在地" @confirm="addconfirm" @cancel='cancelAddress'/>
        </van-popup>
    </div>
</template>
<script>
import navBar from './common/nav-bar'
import { Popup } from 'vant';
import { Area } from 'vant';
import { setInterval, clearInterval } from 'timers';
import { Button } from 'mint-ui';
export default {
    name:'merchantRegister',
    components:{
        navBar,
    },
    data() {
        return {
            // 判断显示申请的字段
            isShow:false,
            // 营业执照图片
            businessPhoto:'',
            // 商店图片
            shopPhoto:'',
            show:false,
            // 需要选择的地址列表
            areaList:{
                    province_list: {
                        110000: '广东省',
                    },
                    city_list: {
                        110100: '深圳市',
                        120100: '广州市',
                    },
                    county_list: {
                        110101: '东城区',
                        110102: '西城区',
                        110105: '朝阳区',
                        110106: '丰台区',
                        120101: '和平区',
                        120102: '河东区',
                        120103: '河西区',
                        120104: '南开区',
                        120105: '河北区',
                        // ....
                    }   
                },
                // 判断是否显示xx图标的字段
                delText:0,
                    //默认地址 
                address:'广东深圳市宝安区沙井街道',
                //  商户名称 1
                MerchantName:'沃尔玛',
                // 统一社会信用代码 2
                creditCode:'18798789798',
                // 门牌号
                HouseNumber:'北京路101号',
            }
        },
    mounted(){
        document.querySelector('body').setAttribute('style','padding:0px;')
    },
    methods:{
         onRead(file) {
             console.log(file.file);
           
        },
        business(file){
            this.$refs.businessImg.src=file.content
            
            console.log(file.content);
             let canvas =  document.createElement('canvas')  
            // 获取对应的CanvasRenderingContext2D对象(画笔)
            let context = canvas.getContext('2d') 
            // 创建新的图片对象 
            let img = new Image()
            // 指定图片的DataURL(图片的base64编码数据)
            img.src =  file.content
             // 监听浏览器加载图片完成，然后进行进行绘制
        img.onload = () => {
            // 指定canvas画布大小，该大小为最后生成图片的大小
            canvas.width = 300
            canvas.height = 400
            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/ 
            context.drawImage(img, 0, 0, 300, 400)
            // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
            file.content = canvas.toDataURL(file.file.type, 0.92) 
            // 最后将base64编码的图片保存到数组中，留待上传。
            this.businessPhoto=file.content
           
            }
        },
        storePhoto(file){
            this.$refs.shopImg.src=file.content
            
            console.log(file.content);
             let canvas =  document.createElement('canvas')  
            // 获取对应的CanvasRenderingContext2D对象(画笔)
            let context = canvas.getContext('2d') 
            // 创建新的图片对象 
            let img = new Image()
            // 指定图片的DataURL(图片的base64编码数据)
            img.src =  file.content
             // 监听浏览器加载图片完成，然后进行进行绘制
        img.onload = () => {
            // 指定canvas画布大小，该大小为最后生成图片的大小
            canvas.width = 300
            canvas.height = 400
            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/ 
            context.drawImage(img, 0, 0, 300, 400)
            // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
            file.content = canvas.toDataURL(file.file.type, 0.92) 
            // 最后将base64编码的图片保存到数组中，留待上传。
            this.shopPhoto=file.content
            
            }
        },
        //点击地址选择时弹出
        actionsheet(){
            this.show = true;
        },
        //确认地址的回调
        addconfirm(columnsNum){
            console.log(columnsNum);
            this.address=columnsNum[0].name+columnsNum[1].name+columnsNum[2].name
            this.show = false;
        },
        //取消选择地址的回调
        cancelAddress(){
            this.show = false;
        },
        //获取焦点显示xx图标
        isShowX(i){
            // console.log('获取了');
            this.delText=i;
        },
        // 失去焦点隐藏xx图标
        notShowX(){
             var t;
            clearTimeout(t)
            t = setTimeout(function (){
                console.log('执行了');
               
                console.log(this.delText);
            }, 1000);
            console.log(this.delText);
        },

        // 点击xx图标清除文字
        clearWords(i){
            // console.log(i);
            // console.log(111);
            this.delText=0;
            if(i==1){
               this.MerchantName=' ' 
            }else{
                this.creditCode=' '
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.box{
    overflow hidden
    .content{
        margin-top 50px;
        background-color #fff
        .form-list{
            .form-item{
                box-sizing: border-box;
                padding 0px 20px;
                font-size: 16px;
                margin-top 10px;
                height 40px; 
                .item-content{
                    display: flex;
                    -webkit-align-items: center;
                    box-sizing: border-box;
                    border-radius: .5rem;
                    border: 1px solid RGB(255,160,30);
                    padding 0px 5px 0px 15px;
                    height 100%
                    position relative
                    .business_license_div{
                        width: 31px;
                        height: 31px;
                        vertical-align: middle;
                        display inline-block;
                        img{
                            width 100%
                            height 100%
                        }
                    }
                    .type-file-text{

                    }
                    
                    .item-inner{
                         width 100%
                        .delect-text{
                            position absolute;
                            height 0.15rem;
                            width 0.15rem;
                            top 12px;
                            right 20px;
                            img{
                                width 100%
                                height 100%
                            }
                        }
                        #shop_range{
                            height 100%
                            width 100%
                        }
                    }
                }
            }
        }
        .warning{
            p{
                font-size 12px;
            }
        }
        .plr-40{
            padding:10px 20px 0px 20px
            img{
                width 100%;
                height 270px;
            }
        }
        .submit{
            padding:25px; 
            .btn{
                box-shadow: 0 0 0.2rem 0.05rem rgba(252, 145, 9, 0.3)
            }
        }
    }
}
</style>
