<script setup lang="ts">
import { computed, ref } from "vue";
import { productsAPI } from "../../services/products.api";
import BaseRadioGroup from "../../../../components/base/BaseRadioGroup.vue";
import { Size } from "../../types/product";

const selectedColor = ref("");
const selectedSize = ref("");
const [error, product] = await productsAPI.getProduct(1);

if (error) {
  console.error("Failed to fetch the product:", error);
}

const colorItems = computed(() => {
  return product!.color.map((color) => ({
    value: color.value,
    label: color.name,
    disabled: !color.sizes.some((size) => size.available),
  }));
});

const sizeItems = computed(() => {
  const selectedColors = product?.color.find(
    (c) => c.value === selectedColor.value,
  );
  return selectedColors
    ? selectedColors.sizes.map((size: Size) => ({
        value: size.size,
        label: size.size,
        disabled: !size.available,
      }))
    : [];
});

function getColorImage(value: string) {
  return new URL(
    `/src/assets/clothes/Ltwre&asyt/Color/${value}.webp`,
    import.meta.url,
  ).href;
}
</script>

<template>
  <div v-if="product">
    <p>{{ product }}</p>
    <span class="font-normal">Color:</span> {{ selectedColor }}
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

    <!-- Idea: wenn out of stock/ disabled then add sth-->
    <span class="font-normal">Size:</span> {{ selectedSize }}
    <BaseRadioGroup :items="sizeItems" v-model="selectedSize" :select-color="selectedColor">
      <template #label="{ item }"> 
        <div>{{ item.value }}</div>
      </template>
    </BaseRadioGroup>
  </div>
</template>
