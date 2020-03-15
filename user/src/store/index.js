import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from "./state"
import mutations from './mutations'
import actions from "./actions"
import getter from './getter';

export default new Vuex.Store({
	getter,
	state,
	mutations,
	actions
})
