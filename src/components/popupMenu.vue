<template>
	<div class="popup-menu">
		<img src="../../public/img/group-19.svg" alt="">
		<button class="back" @click="hiddenPopup">
			<span class="one"></span>
			<span class="two"></span>
		</button>
		<stations/>
		<social/>
	</div>
</template>
<script>
	import Advertising                  from "./advertising";
	import Social                       from "./social";
	import { mapMutations, mapGetters } from "vuex";
	import axios                        from "axios";
	import Stations                     from "./stations";

	export default {
		name:       "popupMenu",
		components: {
			Stations,
			Advertising,
			Social
		},
		computed:   {
			...mapGetters(["getStations", "getMap", "getArrayPlacemark"])
		},
		mounted() {
			axios.get("./scripts/data.js")
			  .then(r => {
				  console.log(JSON.parse(r.data.split(" = ")[1]));
			  })
			  .catch(e => {
				  console.log(e);
			  });
		},
		methods:    {
			...mapMutations(["setPopup", "setCoords", "setStations"]),
			hiddenPopup() {
				this.setPopup(false);
				this.getStations.forEach(st => {
					this.getMap.geoObjects.remove(st);
				});
				this.setStations([]);
				this.getArrayPlacemark.forEach(pl => {
					this.getMap.geoObjects.add(pl);
				});
				this.setCoords("55.743825, 37.607576, 16");
			}
		}
	};
</script>
<style scoped lang="scss">
	.popup-menu {
		min-width: 369px;
		height: 100vh;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		img {
			width: 93px;
			margin: 18px 0 18px 49px;
		}
		button {
			outline: none;
			width: 13px;
			height: 13px;
			position: absolute;
			top: 18px;
			left: 9px;
			text-align: left;
			background-color: transparent;
			border: none;
			cursor: pointer;
			span {
				position: absolute;
				top: 6px;
				left: 0;
				width: 100%;
				height: 2px;
				border-radius: 2px;
				background-color: rgba(78, 78, 78, 0.8);
			}
			.one {
				transform: rotate(45deg);
			}.two {
				transform: rotate(-45deg);
			}
		}
	}
	@media (max-width: 540px) {
		.popup-menu {
			min-width: 320px;
		}
	}
</style>