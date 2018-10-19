import Vue  from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state:     {
		coords: "55.743825, 37.607576"
	},
	getters:   {
		getCoords(state) {
			return state.coords;
		}
	},
	mutations: {
		setCoords(state, payload) {
			state.coords = payload;
		}
	},
	actions:   {}
});
