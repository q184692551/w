import Vue from 'vue'
import App from './App'
import store from './store'
import utils from './utils/tools.js'
import cuCustom from './css/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$utils = utils;

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
