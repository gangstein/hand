<template>
	<div class="root" ref="root">
		<div class="scroller">
			<perfect-scrollbar>
				<div v-for="st in getServerDataStations" :id="st.id">
					<p>{{st.name.split("»")[0]}}»</p>
					<p>{{st.name.split("»")[1]}}</p>
				</div>
			</perfect-scrollbar>
		</div>
	</div>
</template>
<script>
	import { mapGetters }       from "vuex";
	import { PerfectScrollbar } from "vue2-perfect-scrollbar";
	import "../assets/vue2-perfect-scrollbar.css";

	export default {
		name:       "stations",
		computed:   {
			...mapGetters(["getServerDataStations"])
		},
		components: {
			PerfectScrollbar
		},
		mounted() {
		},
		methods:    {}
	};
</script>
<style scoped lang="scss">
	.root {
		width: 80%;
		height: 80%;
		margin-left: 50px;
		font-size: 12px;
		overflow: hidden;
		.scroller {
			height: 100%;
		}
	}
	.ps {
		height: 100%;
	}
	div {
		margin-bottom: 20px;
		p {
			margin: 0;
		}
	}
</style>
