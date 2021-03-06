import Vue        from "vue";
import App        from "./App.vue";
import router     from "./router";
import store      from "./store";
import YmapPlugin from "vue-yandex-maps";

Vue.use(YmapPlugin);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
