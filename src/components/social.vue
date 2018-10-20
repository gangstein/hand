<template>
	<div class="social">
		<img src="../../public/img/twitter.svg" alt="twitter">
		<img src="../../public/img/facebook.svg" alt="facebook">
		<img src="../../public/img/google.svg" alt="google">
		<img src="../../public/img/vimeo.svg" alt="vimeo">
	</div>
</template>
<script>
	export default {
		name: "social"
	};
</script>
<style scoped lang="scss">
	.social {
		margin: 0 0 19px 50px;
		width: 200px;
		img {
			width: 20px;
			height: 14px;
			margin-right: 27px;
			cursor: pointer;
		}
	}
</style>
