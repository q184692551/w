import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import inter from './inter'
import model from './model'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		app:app,
		inter:inter
	},
	mutations:model
});

export default store