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
			this.drawMap();
		},
		methods: {
			drawMap() {
				ymaps.ready(init);

				function init() {
					let myMap = new ymaps.Map("map", {
						center: [51.661535, 39.200287],
						zoom:   14
					});
					myMap.behaviors.disable(["drag", "rightMouseButtonMagnifier", "ruler"]);
					var myPlacemark = new ymaps.Placemark([51.661535, 39.200287], {}, {
						iconLayout:      "default#image",
						iconImageHref:   "group-2.svg",
						iconImageSize:   [30, 42],
						iconImageOffset: [-3, -42]
					});
					myMap.geoObjects.add(myPlacemark);
					this.myMap = myMap;
				}

			}
		}
	};
</script>
<style scoped>
</style>