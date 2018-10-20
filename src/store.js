import Vue  from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state:     {
		map: {},
		coords: "55.743825, 37.607576, 16",
		arrayPlacemark: [],
		stations: [],
		popup: false,
		serverDataStations: []
	},
	getters:   {
		getPopup(state) {
			return state.popup
		},
		getMap(state) {
			return state.map
		},
		getCoords(state) {
			return state.coords
		},
		getArrayPlacemark(state) {
			return state.arrayPlacemark
		},
		getStations(state) {
			return state.stations
		},
		getServerDataStations(state) {
			return state.serverDataStations
		}
	},
	mutations: {
		setPopup(state, payload) {
			state.popup = payload
		},
		setMap(state, payload) {
			state.map = payload
		},
		setCoords(state, payload) {
			state.coords = payload;
		},
		setArrayPlacemark(state, payload) {
			state.arrayPlacemark = payload
		},
		setStations(state,payload) {
			state.stations = payload
		},
		setServerDataStations(state, payload) {
			state.serverDataStations = payload
		}
	},
	actions:   {}
});
