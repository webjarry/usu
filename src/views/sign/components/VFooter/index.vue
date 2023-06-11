<template>
	<div class="VFooter">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
	notes: {
		type: String,
		default: ""
	}
});
</script>

<style scoped lang="less">
.VFooter {
	height: 60px;
	line-height: 60px;
	user-select: none;
	font-size: 12px;
	color: var(--auxiliary-color);
	text-align: center;
	border-top: 1px dashed #efefef;
}
</style>
