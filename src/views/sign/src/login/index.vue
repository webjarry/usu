<template>
	<div class="module">
		<VHeader title="Login。" subtitle="Wisdom is a good purchase though we pay dear for it." />
		<div class="module-content login-content">
			<ElForm label-position="top">
				<ElFormItem>
					<ElInput
						v-model="account.username"
						@keydown.enter="() => onKeydown('username')"
						:prefix-icon="User"
						ref="usernameRefs"
						class="input"
						size="large"
						type="text"
					/>
				</ElFormItem>
				<ElFormItem>
					<ElInput
						v-model="account.password"
						:prefix-icon="Lock"
						ref="passwordRefs"
						@keydown.enter="() => onKeydown('password')"
						class="input"
						size="large"
						type="password"
					/>
				</ElFormItem>
				<ElFormItem>
					<div class="fr-lr">
						<ElCheckbox v-model="options.isMemento"><span class="notes">一周内免登陆</span></ElCheckbox>
						<RouterLink to="/sign/register"><p class="notes">还没有账号?</p></RouterLink>
					</div>
				</ElFormItem>
				<ElFormItem>
					<div class="center">
						<ElButton
							type="primary"
							color="#4a4e4d"
							@click="onHandleLogin"
							:loading="options.isLoading"
							size="large"
							:style="{ width: '300px' }"
							>登陆
						</ElButton>
					</div>
				</ElFormItem>
			</ElForm>
		</div>
		<VFooter>
			<p>登录视为您已同意《第三方账号绑定协议》、《服务条款》、《隐私政策》</p>
		</VFooter>
		<VSuccess />
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElCheckbox, ElButton } from "element-plus";
import VHeader from "@/views/sign/components/VHeader/index.vue";
import VFooter from "@/views/sign/components/VFooter/index.vue";
import VSuccess from "@/views/sign/components/VSuccess/index.vue";
import { User, Lock } from "@element-plus/icons-vue";

const passwordRefs = ref();
const usernameRefs = ref();

const options = reactive({
	isMemento: false,
	isLoading: false
});

const account = reactive({
	username: "",
	password: ""
});

/**
 * @description 处理回车事件
 * */
const onKeydown = (type: string) => {
	switch (type) {
		case "username":
			if (account.username === "") return false;
			passwordRefs.value.focus();
			break;
		case "password":
			if (account.username === "" || account.password === "") return false;
			onHandleLogin();
			break;
	}
};

/**
 * @description 处理登陆事件
 * */
const onHandleLogin = () => {
	options.isLoading = true;

	setTimeout(() => {
		options.isLoading = false;
	}, 3000);
};
</script>

<style scoped lang="less" src="../../styles/index.less" />
