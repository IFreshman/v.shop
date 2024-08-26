<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String as PropType<string>,
      required: true,
    },
    selectedColor: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['update:selectedColor'],
  setup(props, { emit }) {
    const isSelected = computed(() => props.color === props.selectedColor);

    const selectColor = () => {
      emit('update:selectedColor', props.color);
    };

    const computedImageSrc = computed(() => {
      return new URL(`../assets/clothes/Ltwre&asyt/Color/${props.color}.webp`, import.meta.url).href;
    });

    return {
      isSelected,
      selectColor,
      computedImageSrc,
    };
  },
});
</script>

<template>
  <div>
    <button
      :class="[
        'w-14 h-14 rounded-full focus:outline-none bg-gray-100 border-2',
        isSelected ? 'border-gray-400' : 'border-gray-100',
      ]"
      @click="selectColor"
      :aria-checked="isSelected.toString()"
      role="radio"
    >
      <img :src="computedImageSrc" alt="Color option" class="rounded-full w-full h-full object-contain" />
    </button>
  </div>
</template>

<style scoped>
/* Add any additional custom styles if needed */
</style>
