<template>
	<section class="right-menu">
		<navigation/>
		<figure>
			<regions/>
			<advertising/>
			<social/>
		</figure>
	</section>
</template>
<script>
	import Navigation  from "./navigation";
	import Regions     from "./regions";
	import Advertising from "./advertising";
	import Social      from "./social";
	import MapShape    from "./mapShape";

	export default {
		name:       "right-menu",
		components: { MapShape, Social, Advertising, Regions, Navigation }
	};
</script>
<style scoped lang="scss">
	.right-menu {
		min-width: 369px;
		height: 100vh;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		figure {
			margin-bottom: 0;
		}
	}
	@media (max-width: 540px) {
		.right-menu {
			min-width: 320px;
		}
	}
</style>
