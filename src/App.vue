<script setup lang="ts">
import Dialog from "./modules/products/components/view/Dialog.vue";
import Modal from './components/Modal.vue';
import { ref } from "vue";

const modal = ref<InstanceType<typeof Modal>>();

const showModal = () => modal.value?.show();
</script>

<template>


  <!--<button @click="showModal">Show Modal</button>
  <Modal ref="modal" showCancel>
    <h1>Test</h1>
  </Modal>-->
  <Suspense>
    <template #default>
      <Dialog></Dialog>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

