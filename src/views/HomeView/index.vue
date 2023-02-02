<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CustomHeader from './CustomHeader.vue';
import SectionContact from './SectionContact.vue';
import useModal from '../../hooks/useModal';
export default {
  components: { CustomHeader, SectionContact },
  setup() {
    const router = useRouter();
    const modal = useModal();
    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });
    function handleLogin() {
      modal.open({
        component: 'ModalLogin',
      });
    }
    function handleAccountCreate() {
      modal.open({
        component: 'ModalCreateAccount',
      });
    }
    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>

<template>
  <CustomHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <SectionContact />
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2023</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #000;
}
</style>
