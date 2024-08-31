<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  initialTab?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialTab: 0,
})

const tabs = ref(['Details', 'Fit', 'Material & Care Instructions', 'Sustainability'])
const activeTab = ref(props.initialTab)

const setActiveTab = (index: number) => {
    activeTab.value = index
}
</script>

<template>
    <div class="tabs">
        <div class="tab-headers">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click.prevent="setActiveTab(index)"
          >
            {{ tab }}
          </button>
        </div>
        <div>
          <slot :name="`tab-${activeTab}`"></slot>
        </div>
      </div>
</template>
