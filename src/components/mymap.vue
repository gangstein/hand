<template>
	<aside id="map">
	</aside>
</template>
<script>
	import { mapGetters, mapMutations } from "vuex";

	export default {
		name:     "mymap",
		data() {
			return {
				myMap: {},
				arrayPlacemark: []
			};
		},
		mounted() {

			ymaps.ready(this.drawMap)
			  .then((r) => console.log(r))
			  .catch(e => console.log(e));
		},
		computed: {
			...mapGetters(["getCoords"])
		},
		methods:  {
			...mapMutations(["setArrayPlacemark", 'setMap']),
			coords() {
				let coords = this.getCoords.split(", ");
				coords     = coords.map(element => {
					return parseFloat(element);
				});
				let zoom = coords[2];
				let latlng = [coords[0], coords[1]];
				return {
					latlng,
					zoom
				};
			},
			drawMap() {

				this.myMap = new ymaps.Map("map", {
					center:   this.coords().latlng,
					zoom:     this.coords().zoom,
					controls: [],
				});
				this.myMap.behaviors.disable(["rightMouseButtonMagnifier", "scrollZoom"]);
				const myPlacemark1 = new ymaps.Placemark([55.743825, 37.607576], {}, {
					iconLayout:      "default#image",
					iconImageHref:   "img/drawing.svg",
					iconImageSize:   [133, 61],
					iconImageOffset: [-75, -61]
				});
				this.arrayPlacemark.push(myPlacemark1);
				const myPlacemark2 = new ymaps.Placemark([59.933262, 30.361820], {}, {
					iconLayout:      "default#image",
					iconImageHref:   "img/drawing2.svg",
					iconImageSize:   [133, 61],
					iconImageOffset: [-75, -61]
				});
				this.arrayPlacemark.push(myPlacemark2);
				let div                   = document.createElement("div");
				div.style.position        = "absolute";
				div.style["min-width"]    = "5000px";
				div.style["min-height"]   = "5000px";
				div.style.top             = "-2500px";
				div.style.left            = "-2500px";
				div.style.backgroundColor = "rgba(10,10,10,0.8)";
				this.myMap.panes.get("places").getElement().appendChild(div);
				this.myMap.panes.get("ground").getElement().style.filter = "grayscale(100%)";

				this.myMap.geoObjects.add(myPlacemark1);
				this.myMap.geoObjects.add(myPlacemark2);
				this.setMap(this.myMap);
				this.setArrayPlacemark(this.arrayPlacemark);
			}
		},
		watch:    {
			"$store.state.coords"() {
				this.myMap.setCenter(this.coords().latlng, this.coords().zoom)
				  .catch(e => console.log(e));
			}
		}
	};
</script>
<style scoped lang="scss">
	#map {
		
		width: 99.9%;
		height: 99.9vh;
		background-image: linear-gradient(to bottom, #4a4a4a, #4a4a4a);
	}
	@media (max-width: 540px) {
		#map {
			height: 60%;
		}
	}
</style>
