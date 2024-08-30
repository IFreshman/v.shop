<script setup lang="ts">
import Dialog from "./modules/products/components/view/Dialog.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Dialog></Dialog>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

