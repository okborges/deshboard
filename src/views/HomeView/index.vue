<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CustonHeader from './CustonHeader.vue';
import SectionContact from './SectionContact.vue';
import useModal from '../../hooks/useModal';

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
    components: 'ModalLogin',
  });
}
function handleAccountCreate() {}
</script>

<template>
  <CustonHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <SectionContact />
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-gray-800">feedbacker © 2022</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #000;
}
</style>
