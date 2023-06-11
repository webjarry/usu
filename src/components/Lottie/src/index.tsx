import { computed, defineComponent, onMounted, ref } from "vue";
import styles from "../style/index.module.less";
import lottie, { AnimationItem } from "lottie-web";
import props from "./props";

export default defineComponent({
	props,
	emits: ["touch"],
	setup(props, { emit, expose }) {
		const oLottie = ref();
		const oStyle = computed(() => ({
			width: props.width + "px",
			height: props.height + "px"
		}));
		const instance = ref<AnimationItem>();

		onMounted(() => {
			instance.value = lottie.loadAnimation({
				container: oLottie.value,
				renderer: "svg",
				loop: props.loop,
				autoplay: props.autoplay,
				path: props.src
			});
		});

		const onHandleLottiePlay = () => {
			instance.value.stop();
			instance.value.play();
		};

		expose({
			onHandleLottiePlay
		});

		return () => <div class={styles.components} onClick={() => emit("touch")} style={oStyle.value} ref={oLottie} />;
	}
});
