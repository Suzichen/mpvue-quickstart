import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import http from '../src/api'

Vue.config.productionTip = false
Vue.prototype.$http = http
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
