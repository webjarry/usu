<template>
	<div class="VHeader">
		<div class="title">
			<h1>{{ title }}</h1>
			<div class="subtitle">
				<span>{{ subtitle }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
	title: {
		type: String,
		default: ""
	},
	subtitle: {
		type: String,
		default: ""
	}
});
</script>

<style scoped lang="less">
.VHeader {
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	user-select: none;

	.subtitle {
		padding-top: 5px;
		font-size: 12px;
		color: var(--auxiliary-color);
	}
}
</style>
