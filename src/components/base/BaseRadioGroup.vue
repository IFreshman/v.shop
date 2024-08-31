<script setup lang="ts">
const props = defineProps<{
  items: Array<{ value: string; label?: string; disabled?: boolean }>
  modelValue: string
  selectColor?: string
}>()

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()
</script>

<template>
  <div v-for="(item, index) in props.items" :key="index">
    <input type="radio" class="hidden" :id="item.value" :value="item.value" :disabled="item.disabled" :checked="modelValue === item.value" @change="$emit('update:modelValue', item.value)" />
    <label :for="item.value">
      <slot name="label" :item="item">{{ item.label }}</slot>
    </label>
  </div>
</template>
