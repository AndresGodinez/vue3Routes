import {
  defineComponent, onActivated,
  onBeforeMount, onBeforeUnmount,
  onBeforeUpdate, onDeactivated, onErrorCaptured,
  onMounted, onRenderTracked, onRenderTriggered,
  onUnmounted,
  onUpdated, ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    const title = 'Welcome to Vue SPA';
    const counter = ref(0);
    const incrementCounter = () => {
      counter.value++;
    };
    console.log({ title });

    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });
    console.log('setup');

    return {
      title,
      counter,
      incrementCounter
    };
  },
});
