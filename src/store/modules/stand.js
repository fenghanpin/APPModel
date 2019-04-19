// 声明一个一个状态
const state = {
  contentNumber: 0
}

// 获取状态
const getters = {
  getChangeNumber() {
    // 承载state.contentNumber变化
    return state.contentNumber
  }
}

// 更新状态
const mutations = {
  newStataReload(state, num) {
    state.contentNumber = num
  }
}

// 然后给actions注册一个事件处理函数，当函数被触发时候把状态提交给mutations处理
const actions = {
  getNewNumber(content, num) {
    // content和store有相同的属性和方法
    content.commit('newStataReload', num)
  }
}

export default {
  // namesPaced用于在全局引用此文里的方法是标识这一个的文件名
  namesPaced: true,
  state,
  mutations,
  actions,
  getters
}

/*
    引入文件中
    import {mapActions} from 'vuex
    在 methods中调用：
    ...mapActions(‘vuex中modeles的模块名’， [‘actions中的方法getNewNumber’])

    导出文件中
    import {mapGetters} from 'vuex
    在computed中调用, （scollTop是当前组件上this的某个属性）
    ...mapGetters(“vuex中modeles的模块名”，{
        scollTop： ‘getters中对应的的方法getChangeNumber’
    })
*/
