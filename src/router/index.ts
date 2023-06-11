import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Naming from "@/naming";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/sign",
		name: Naming.VIEW_SIGN,
		component: () => import("@/views/sign/index.vue"),
		children: [
			{
				path: "invitation",
				name: Naming.VIEW_SIGN_INVITATION,
				component: () => import("@/views/sign/src/invitation/index.vue")
			},
			{
				path: "login",
				name: Naming.VIEW_SIGN_LOGIN,
				component: () => import("@/views/sign/src/login/index.vue")
			},
			{
				path: "register",
				name: Naming.VIEW_SIGN_REGISTER,
				component: () => import("@/views/sign/src/register/index.vue")
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
