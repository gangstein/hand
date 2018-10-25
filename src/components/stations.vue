<template>
	<nav>
		<perfect-scrollbar tag="ul" :options="options">
			<li v-for="st in getServerDataStations" :id="st.id">
				<img src="../../public/img/public-transport-subway.svg" alt="">
				<div>
					<p>{{st.name.split("»")[0]}}»</p>
					<p>{{st.name.split("»")[1]}}</p>
				</div>
			</li>
		</perfect-scrollbar>
	</nav>
</template>
<script>
	import { mapGetters }       from "vuex";
	import { PerfectScrollbar } from "vue2-perfect-scrollbar";
	import "../assets/vue2-perfect-scrollbar.css";

	export default {
		name:       "stations",
		data() {
			return {
				options: {
					wheelSpeed:         1,
					maxScrollbarLength: 19
				},
			};
		},
		computed:   {
			...mapGetters(["getServerDataStations"]),
			
		},
		components: {
			PerfectScrollbar
		},
		methods:    {}
	};
</script>
<style scoped lang="scss">
	nav {
		width: 90%;
		height: 100%;
		margin: 28px 0 28px 20px;
		font-size: 12px;
		overflow: hidden;
	}
	.ps {
		height: 100%;
	}
	ul {
		padding: 0;
		height: 100%;
		li {
			margin: 0 0 20px 0;
			list-style: none;
			cursor: pointer;
			position: relative;
			display: flex;
			align-items: center;
			img {
				width: 8px;
				height: 10px;
				margin-right: 20px;
			}
			p {
				margin: 0;
				&:first-child {
					font-family: 'MullerMedium', serif;;
				}
			}
		}
	}
</style>
