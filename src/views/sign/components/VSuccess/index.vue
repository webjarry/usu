<template>
	<div class="VSuccess">
		<span>success</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "index"
});
</script>

<style scoped lang="less">
.VSuccess {
	z-index: 999;
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: red;
}
</style>
