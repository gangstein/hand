<template>
	<div id="map" style="width: 100%; min-height: 100vh">
	</div>
</template>
<script>
	export default {
		name:    "comp",
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
					iconImageHref:   "group-2.svg",
					iconImageSize:   [30, 42],
					iconImageOffset: [-3, -42]
				});
				this.myMap.geoObjects.add(myPlacemark);
			}
		}
	};
</script>
<style scoped>
</style>