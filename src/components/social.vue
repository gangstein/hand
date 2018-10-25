<template>
	<ul class="social">
		<li><img src="../../public/img/twitter.svg" alt="twitter"></li>
		<li><img src="../../public/img/facebook.svg" alt="facebook"></li>
		<li><img src="../../public/img/google.svg" alt="google"></li>
		<li><img src="../../public/img/vimeo.svg" alt="vimeo"></li>
	</ul>
</template>
<script>
	export default {
		name: "social"
	};
</script>
<style scoped lang="scss">
	.social {
		margin: 3px 0 19px 50px;
		width: 180px;
		display: flex;
		list-style-type: none;
		padding: 0;
		li {
			width: 20px;
			height: 14px;
			margin-right: 13px;
			position: relative;
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				
				cursor: pointer;
			}
		}
		
	}
</style>
