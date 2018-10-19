<template>
	<main id="app">
		<mymap/>
		<right-menu/>
	</main>
</template>
<script>
	import mymap     from "./components/mymap";
	import RightMenu from "./components/right-menu";

	export default {
		components: { RightMenu, mymap }
	};
</script>
<style lang="scss">
	@import "../public/styles/bootstrap-reboot.css";
	@font-face {
		font-family: 'MullerLight';
		src: url("../public/fonts/MullerLight.otf");
	}@font-face {
		font-family: 'MullerMedium';
		src: url("../public/fonts/MullerMedium.otf");
	}
	main {
		width: 100%;
		min-width: 320px;
		max-width: 1920px;
		height: 100vh;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		font-family: "MullerLight", serif;
	}
	@media (min-width: 541px) {
		main {
			flex-direction: row;
			justify-content: space-between;
		}
		
	}
</style>
