export default {
  state: {
    user_info: {}
  },
  mutations: {
    update_user_info: (state, obj) => {
      for (const item in obj) {
        state.user_info[item] = obj[item]
      }
    }
  }
}
