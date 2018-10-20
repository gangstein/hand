<template>
	<nav>
		<img src="../../public/img/group-19.svg" alt="">
		<ul>
			<li>Кейсы</li>
			<li>Формы</li>
			<li>Издателям</li>
			<li>Платформа</li>
			<li @click="getData">Второе задание</li>
		</ul>
	</nav>
</template>
<script>
	import axios                        from "axios";
	import { mapGetters, mapMutations } from "vuex";

	export default {
		name:     "navigation",
		data() {
			return {
				stations: []
			};
		},
		computed: {
			...mapGetters([
				"getArrayPlacemark",
				"getMap"])
		},
		methods:  {
			...mapMutations([
				"setStations",
				"setCoords",
				"setPopup",
				"setServerDataStations"]),
			getData() {
				this.setPopup(true);
				this.setStations([]);
				this.getArrayPlacemark.forEach(el => {
					this.getMap.geoObjects.remove(el);
				});

				axios.get("./scripts/stations.js")
				  .then(r => {
					  this.setServerDataStations(JSON.parse(r.data.split(" = ")[1]));
					  let stations = JSON.parse(r.data.split(" = ")[1]);
					  let centre   = [0, 0];

					  stations.forEach(st => {
						  centre[0] += parseFloat(st.lat);
						  centre[1] += parseFloat(st.lng);

						  const placemark = new ymaps.Placemark
						  ([parseFloat(st.lat), parseFloat(st.lng)], {}, {
							  iconLayout:      "default#image",
							  iconImageHref:   "img/group-2.svg",
							  iconImageSize:   [28, 35],
							  iconImageOffset: [-14, -35]
						  });

						  this.stations.push(placemark);
						  this.getMap.geoObjects.add(placemark);
					  });

					  centre[0] = centre[0] / stations.length;
					  centre[1] = centre[1] / stations.length;
					  this.setCoords(`${centre[0]}, ${centre[1]}, 11`);
					  this.setStations(this.stations);
				  })
				  .catch(e => {
					  console.log(e);
				  });
			}
		}
	};
</script>
<style scoped lang="scss">
	nav {
		width: 100px;
		margin: 18px 0 0 50px;
		img {
			width: 100%;
			margin-bottom: 31px;
		}
		ul {
			padding: 0;
			width: 100%;
			li {
				list-style: none;
				padding: 0;
				font-size: 10.5px;
				text-transform: uppercase;
				margin-bottom: 12px;
				letter-spacing: 2px;
				cursor: pointer;
				border-bottom: 1px solid transparent;
				transition: border-bottom 0.5s;
				&:hover {
					border-bottom: 1px solid black;
				}
			}
		}
	}
</style>
