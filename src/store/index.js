import Vuex from "vuex";
Vue.use(Vuex);
import Vue from 'vue'
//实例化vuex // 实例化仓库对象
const store = new Vuex.Store({
    state:{
        ContactAddress:{
            //收货人姓名
            consigneeName:'',
            // 收货人手机号
            iPhone:'',
            // 所在区域
            address:'',
            // 详细地址
            DetailedAddress:'',
            
        },
        states: 'turn-on',
    },
    mutations: {
        setTransition(state, states) {
          state.states = states
        }
    }
})
export default store