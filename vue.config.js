const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
	pwa: {
		name: "吾悦看板",
		themeColor: "#000",
		appleMobileWebAppCapable: true,
		manifestOptions: {
			name: "标题日记",
			short_name: "日记",
			theme_color: "#373737",
			start_url: ".",
			display: "standalone",
			background_color: "#000000"
		}
	},
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: [path.resolve(__dirname, "src/assets/styles/reset.less")]
		}
	},
	transpileDependencies: true
});
