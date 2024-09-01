<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  tabs: string[]
}>()

const activeTab = ref(0)

const setActiveTab = (index: number) => {
  activeTab.value = index
}
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-4 flex">
      <button v-for="(tab, index) in props.tabs" :key="index" class="cursor-pointer px-4 py-2 uppercase" :class="{ 'border-b-2 border-black': activeTab == index }" @click.prevent="setActiveTab(index)">
        {{ tab }}
      </button>
    </div>
    <div class="p4 rounded border">
      <slot :name="`tab-${activeTab}`"></slot>
    </div>
  </div>
</template>
