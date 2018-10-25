<template>
	<main id="app">
		<mymap/>
		<transition name="popup" mode="out-in">
		<right-menu v-if="!getPopup"/>
		<popup-menu v-if="getPopup"/>
		</transition>
	</main>
</template>
<script>
	import mymap          from "./components/mymap";
	import RightMenu      from "./components/right-menu";
	import PopupMenu      from "./components/popupMenu";
	import { mapGetters } from "vuex";

	export default {
		components: { PopupMenu, RightMenu, mymap },
		computed:   {
			...mapGetters(["getPopup"])
		}
	};
</script>
<style lang="scss">
	@import "../public/styles/bootstrap-reboot.css";
	@font-face {
		font-family: 'MullerLight';
		src: url("../public/fonts/MullerLight.otf");
	}
	@font-face {
		font-family: 'MullerMedium';
		src: url("../public/fonts/MullerMedium.otf");
	}
	body {
		min-width: 320px;
		max-width: 1920px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	main {
		width: 100%;
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
	
	.popup-enter-active, .popup-leave-active {
		transition: opacity .3s;
	}
	.popup-enter {
		opacity: 0;
	}
	.popup-leave-to {
		opacity: 0;
	}
</style>
