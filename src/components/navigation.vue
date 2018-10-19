<template>
	<nav>
		<img src="../../public/img/group-19.svg" alt="">
		<ul>
			<li>Кейсы</li>
			<li>Формы</li>
			<li>Издателям</li>
			<li>Платформа</li>
		</ul>
	</nav>
</template>
<script>
	export default {
		name: "navigation"
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
