<script setup lang="ts">

defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <section class="px-20 mt-6">
    <h3 class="font-medium text-gray-800">See the new arrivals</h3>
    <div class="grid grid-col-1 md:grid-col-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg p-3 relative">

        <img class="ex-auto" src="../assets/clothes/PcTwlm/Petrol/1.webp" alt="todo"/>
    
        <div class="flex justify-between">
          <p>Pure cotton T-shirt with logo motifs</p>
          <div class="flex flex-col items-end">
            <strong class="text-violet-600">17,99 €</strong>
            <strike class="text-gray-400">19,99 €</strike>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex gap-1">
            <span class="bg-orange-500 w-5 h-5 rounded-full" >&nbsp;</span>
            <span class="bg-teal-500 w-5 h-5 rounded-full" >&nbsp;</span>
            <span class="bg-white w-5 h-5 rounded-full" >&nbsp;</span>
          </div>

          <div class="flex gap-1 text-gray-400 text-sm">
            <span class="flex justify-center w-5 h-5 rounded-full border border-gray-400">S</span>
            <span class="flex justify-center w-5 h-5 rounded-full border border-gray-400">M</span>
            <span class="flex justify-center w-5 h-5 rounded-full border border-gray-400">L</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
