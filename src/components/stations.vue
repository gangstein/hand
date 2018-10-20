<template>
	<div class="baron baron__root baron__clipper _MODIFIER" ref="baron__root">
		<div class="baron__scroller" ref="baron__scroller">
			<div v-for="st in getServerDataStations" :id="st.id">
				<p>{{st.name.split("»")[0]}}»</p>
				<p>{{st.name.split("»")[1]}}</p>
			</div>
		</div>
		<div class="baron__track" ref="baron__track">
			<div class="baron__free">
				<div class="baron__bar" ref="baron__bar"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	import baron          from "baron";

	export default {
		name:     "stations",
		computed: {
			...mapGetters(["getServerDataStations"])
		},
		mounted() {
			baron(
			  {
				  root:           this.$refs.baron__root,
				  scroller:       this.$refs.baron__scroller,
				  bar:            this.$refs.baron__bar,
				  track:          this.$refs.baron__track,
				  barOnCls:       "_scrollbar",
				  scrollingCls:   "_scrolling",
				  draggingCls:    "_dragging",
				  direction:      "h",
				  resizeDebounce: .2,
				  rtl:            true
			  }
			);
			// console.log(this.$refs.container.scrollHeight);
		},
		methods:  {}
	};
</script>
<style scoped lang="scss">
	.baron__root {
		margin-left: 50px;
		width: 80%;
		height: 80%;
		font-size: 12px;
		position: relative;
		
		div {
			margin-bottom: 20px;
			p {
				margin: 0;
			}
		}
	}
</style>