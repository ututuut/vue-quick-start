import vue from 'vue'
import vuex from 'vuex'
import userInfo from './userInfo'
vue.use(vuex)


export default new vuex.Store({
  modules: {
    userInfo: userInfo
  }
})
