
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchText: '', // 顶部导航搜索内容
    userAccesstoken: {
      success: false
    } // accesstoken验证正确后存储的用户名
  },
  mutations: {
    // 设置搜索内容
    SET_SEARCHTEXT (state, text) {
      state.searchText = text
    },
    userInfor (state, user) {
      if (user) { // 判断：如果传过来的数据不为空，则保存
        state.userAccesstoken = user
      } else {
        state.userAccesstoken.success = false
      }
    }
  },
  actions: {
    goTop ({ state }) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      console.log('111')
    }
  },
  modules: {}
})

export default store
