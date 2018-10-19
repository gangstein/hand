<template>
	<div class="regions">
		<div @click="click"
		     data-region="MSK"
		     data-coords="55.743825, 37.607576"
		     :class="{bold: attr === 'MSK'}">
			<img src="../../public/img/star-2.svg"
			     alt=""
			     class="icon">
			<transition name="fade">
				<div class="arrow"
				     v-if="attr === 'MSK'"></div>
			</transition>
			<p>Москва</p>
			<p>+7 (495) 269 84 10</p>
			<p>ул. Ленинская Слобода, 19,<br/>Бизнес-центр «Омега плаза»</p>
		</div>
		<div @click="click"
		     data-region="SPB"
		     data-coords="59.933262, 30.361820"
		     :class="{bold: attr === 'SPB'}">
			<img src="../../public/img/page-1.svg"
			     alt=""
			     class="icon">
			<transition name="fade">
				<div class="arrow"
				     v-if="attr === 'SPB'"></div>
			</transition>
			<p>Санкт-Петербург</p>
			<p>+ 7 (812) 240-43-35</p>
			<p>196158, наб. Обводного канала 199,<br/>«Обводный двор», офис 3 «А»</p>
		</div>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex'
	export default {
		name: "regions",
		data() {
			return {
				attr: 'MSK'
			};
		},
		methods: {
		           ...mapMutations(['setCoords']),
			click(e) {
				this.attr = e.currentTarget.getAttribute('data-region');
				let coords = e.currentTarget.getAttribute('data-coords');
				this.setCoords(coords)
			}
		}
	};
</script>
<style scoped lang="scss">
	.regions {
		display: flex;
		flex-direction: column;
		font-family: 'MullerMedium', serif;
		line-height: 12px;
		font-size: 8px;
		margin-left: 50px;
		cursor: pointer;
		.icon {
			position: absolute;
			width: 14px;
			height: 14px;
			left: -29px;
			top: -3px;
		}
		.bold {
			font-weight: bold;
		}
		div {
			position: relative;
			margin-top: 10px;
			p {
				margin: 0;
			}
			.arrow {
				position: absolute;
				width: 26px;
				height: 10px;
				border-top: 15px solid transparent;
				border-bottom: 15px solid transparent;
				border-right: 10px solid #fff;
				top: -10px;
				left: -75px;
				margin: 0;
			}
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition: transform .3s;
	}
	.fade-enter, .fade-leave-to {
		transform: translateX(10px);
	}
</style>
