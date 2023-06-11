import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

import "@/assets/styles/reset.less";
import "element-plus/theme-chalk/index.css";

createApp(App).use(store).use(router).mount("#app");
