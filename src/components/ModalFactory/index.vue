<!-- eslint-disable vue/multi-word-component-names -->
<script>
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
} from 'vue';
import useModal from '../../hooks/useModal';
const ModalLogin = defineAsyncComponent(() =>
  import('../ModalLogin/index.vue'),
);
const ModalCreateAccount = defineAsyncComponent(() =>
  import('../ModalCreateAccount/indes.vue'),
);

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3';

export default {
  components: {
    ModalLogin,
    ModalCreateAccount,
  },
  setup() {
    const modal = useModal();
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH,
    });
    onMounted(() => {
      modal.listen(handleModalToogle);
    });
    onBeforeUnmount(() => {
      modal.off(handleModalToogle);
    });
    function handleModalToogle(payload) {
      if (payload.status) {
        state.component = payload.component;
        state.props = payload.props;
        state.width = payload.width ?? DEFAULT_WIDTH;
      } else {
        state.component = {};
        state.props = {};
        state.width = DEFAULT_WIDTH;
      }
      state.isActive = payload.status;
    }
    return {
      state,
      handleModalToogle,
    };
  },
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToogle({ status: false })"
    >
      <div class="fixed" :class="state.width" @click.stop>
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster"
        >
          <div class="flex flex-col p-10 bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
