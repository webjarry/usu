<template>
	<div class="module">
		<VHeader title="邀请。" />

		<div class="module-content invitation-content">
			<div class="code-box">
				<div class="code-item">
					<span>G</span>
				</div>
				<div class="code-item">
					<span>S</span>
				</div>
				<div class="code-item">
					<span>O</span>
				</div>
				<div class="code-item">
					<span>4</span>
				</div>
				<div class="code-item">
					<span>U</span>
				</div>
			</div>

			<div class="invitation-button" @click="onJumpToHome">
				<span>邀请</span>
			</div>
		</div>

		<VFooter />
	</div>
</template>

<script setup lang="ts">
import VHeader from "@/views/sign/components/VHeader/index.vue";
import VFooter from "@/views/sign/components/VFooter/index.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const onJumpToHome = () => {
	router.push("/");
};
</script>

<style scoped lang="less" src="../../styles/index.less" />
