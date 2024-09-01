<script setup lang="ts">
import { computed, ref } from "vue"
import BaseRadioGroup from "../../../components/base/BaseRadioGroup.vue";
import { Products, Size } from "../types/product"
import Tab from "../../../components/base/TabView.vue"

const props = defineProps<{
  product: Products
  defaultColor: string
}>()


const selectedColor = ref(props.defaultColor)
const selectedSize = ref("")

const colorItems = computed(() => {
  return props.product.color.map((color) => ({
    value: color.value,
    label: color.name,
    disabled: !color.sizes.some((size) => size.available),
  }))
})

const sizeItems = computed(() => {
  const selectedColors = props.product.color.find((c) => c.value === selectedColor.value)
  return selectedColors
    ? selectedColors.sizes.map((size: Size) => ({
        value: size.size,
        label: size.size,
        disabled: !size.available,
      }))
    : []
})

function getColorImage(value: string) {
  return new URL(`/src/assets/clothes/Ltwre&asyt/Color/${value}.webp`, import.meta.url).href
}
</script>

<template>
  <div>
    <span class="font-normal">Color:</span> {{ selectedColor }}
    <div class="flex gap-4">
      <BaseRadioGroup :items="colorItems" v-model="selectedColor">
        <template #label="{ item }">
          <img
            class="h-14 w-14 rounded-full object-contain"
            :class="{
              'outline outline-2 outline-gray-800': selectedColor == item.value,
            }"
            :src="getColorImage(item.value)"
            :alt="item.value"
          />
        </template>
      </BaseRadioGroup>
    </div>

    <!-- Idea: wenn out of stock/ disabled then add sth-->
    <span class="font-normal">Size:</span> {{ selectedSize }}
    <div class="flex gap-2">
      <BaseRadioGroup :items="sizeItems" v-model="selectedSize" :select-color="selectedColor">
        <template #label="{ item }">
          <div>{{ item.value }}</div>
        </template>
      </BaseRadioGroup>
    </div>

    <div>
      <Tab></Tab>
    </div>
  </div>
</template>
