<script setup lang="ts">
import ProductView from '../modules/product/view/ProductView.vue';
</script>

<template>
  <section class="px-20 mt-6">
    <h2 class="text-gray-800 font-medium">See the new arrivals</h2>
    <div class="grid grid-col-1 md:grid-cols-6 gap-6">
      <Suspense>
        <div v-for="index in [1,2,3,4,5,6]" :key="index">
          <ProductView></ProductView>
        </div>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
  </section>
</template>