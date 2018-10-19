<template>
	<aside id="map">
	</aside>
</template>
<script>
	export default {
		name:    "mymap",
		data() {
			return {
				myMap: {}
			};
		},
		mounted() {
			ymaps.ready(this.drawMap)
			  .then((r) => console.log(r))
			  .catch(e => console.log(e))
		},
		methods: {
			drawMap() {
				this.myMap = new ymaps.Map("map", {
					center: [51.661535, 39.200287],
					zoom:   14,
					controls: [],
				});
				this.myMap.behaviors.disable(["drag", "rightMouseButtonMagnifier", "scrollZoom"]);
				const myPlacemark = new ymaps.Placemark([51.661535, 39.200287], {}, {
					iconLayout:      "default#image",
					iconImageHref:   "img/map-shape2.svg",
					iconImageSize:   [133, 61],
					iconImageOffset: [-68, -61]
				});
				this.myMap.panes.get('ground').getElement().parentNode.style.backgroundColor = '#1e1e1e';
				this.myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%) opacity(18%)';
				// this.myMap.panes.get('ground').getElement().style.filter = 'opacity(18%)';
				this.myMap.geoObjects.add(myPlacemark);
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
