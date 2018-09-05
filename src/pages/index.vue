<template>
  <div class="page">
    <div class="tab-container">
      <div class="tab-content home" v-if="renderIndex === 0">
        <!-- 首页 -->
        <home></home>
      </div>
      <div class="tab-content" v-if="renderIndex === 1">
        <div class="usermotto">
          <div class="user-motto">
            <card :text="motto"></card>
          </div>
        </div>
      </div>
      <div class="tab-content" v-if="renderIndex === 2">
        <form class="form-container">
          <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
          <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
        </form>
        <a href="pages/counter" class="counter">去往Vuex示例页面</a>
      </div>
    </div>

    <div class="tab-bar">
      <div class="tab-bar-item" v-for="(item, index) in tabList" :key="item.index" @click="switchTab(index)">
        <img :src="item.activeIcon" v-if="item.render">
        <img :src="item.icon" v-else>
        <span>{{item.title}}</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import card from '@/components/card'
import home from './home'

export default {
  computed: {
    renderIndex () {
      return this.tabList.findIndex(item => item.render === true)
    }
  },
  data () {
    return {
      motto: 'Hello World',
      isAgree: false,
      userInfo: {},
      tabList: [
        { title: '页面一', icon: '/static/icons/home_1.png', activeIcon: '/static/icons/home_1-active.png' },
        { title: '页面二', icon: '/static/icons/circle_1.png', activeIcon: '/static/icons/circle_1-active.png' },
        { title: '页面三', icon: '/static/icons/mine_1.png', activeIcon: '/static/icons/mine_1-active.png' }
      ]
    }
  },

  components: {
    card,
    home
  },

  methods: {
    // tabs
    changeTabIndex (index) {
      this.tabList = this.tabList.map(item => {
        item.render = false
        return item
      })
      const item = Object.assign({}, this.tabList[index])
      item.render = true
      this.tabList.splice(index, 1, item)
    },
    switchTab (index) {
      this.changeTabIndex(index)
    },
    // tabs-end
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    const data = {
      resume_id: '21416108'
    }
    this.$http.get_user_experience(data).then((res) => {
      console.log(res)
    })
    this.changeTabIndex(0)
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>

<style lang="less" scoped>
  .page {
    height: 100vh;
    .tab-container {
      position: fixed;
      z-index: -1;
      height: 100vh;
      background-color: #fff;
      .tab-content {
        height: 100%;
      }
      .tab-content.home {
        height: 100vh;
      }
    }
    .tab-bar {
      position: fixed;
      z-index: 9;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 1rem;
      background-color: #fff;
      opacity: .7;
      .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #f1f1f1;
        img {
          width: .5rem;
          height: .5rem;
        }
      }
    }
  }
</style>
