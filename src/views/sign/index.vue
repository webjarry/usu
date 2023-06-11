<template>
	<div class="container">
		<div class="main">
			<RouterView v-slot="{ Component }">
				<Transition name="checkoutPages">
					<component :is="Component" />
				</Transition>
			</RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Transition } from "vue";
import { RouterView } from "vue-router";

console.log("APP");
</script>

<style scoped lang="less" src="./styles/index.less" />
