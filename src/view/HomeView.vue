<script setup lang="ts">
import HomeSection from "../components/HomeSection.vue"
</script>

<template>
  <section class="mt-6 px-20">
    <h2 class="font-medium text-gray-800">See the new arrivals</h2>
    <div class="grid-col-1 grid gap-6 md:grid-cols-6">
      <Suspense>
        <HomeSection />
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
  </section>
</template>
