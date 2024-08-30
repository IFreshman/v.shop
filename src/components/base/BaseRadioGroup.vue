<script setup lang="ts">

const props = defineProps<{
  items: Array<{ value: string; label?: string; disabled?: boolean }>;
  modelValue: string
  selectColor?: string;
}>();

const emit = defineEmits<{
    "update:modelValue": [value: string]
}>();


</script>

<template> 
    <div v-for="(item, index) in props.items" :key="index">
    <input
      type="radio"
      :value="item.value"
      :disabled="item.disabled"
      :checked="modelValue === item.value"
      @change="$emit('update:modelValue', item.value)"
    />
    <label>
      {{ item }}
      <slot></slot>
    </label>
  </div>
</template>
