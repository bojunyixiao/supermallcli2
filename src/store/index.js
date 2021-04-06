import Vue from 'vue'
import Vuex from 'vuex'

// 一、安装
Vue.use(Vuex)
// 二、创建对象
const state = {
  counter:100
}

const store = new Vuex.Store({
  state
})
// 三、导出
export default store
