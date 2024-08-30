<script setup lang="ts">
import { computed, ref } from 'vue';
import { productsAPI } from '../../services/products.api';
import BaseRadioGroup from '../../../../components/base/BaseRadioGroup.vue';
import { Size } from '../../types/product';

const selectedColor = ref('')
const selectedSize = ref('')
const [error, product] = await productsAPI.getProduct(1)

if (error) {
  console.error("Failed to fetch the product:", error);
} 

const colorItems = computed(() => {
    return product!.color.map((color) => ({
        value: color.value,
        label: color.name,
      }));
})


const sizeItems = computed(() => {
    const selectedColors = product?.color.find((c) => c.value === selectedColor.value)
    return selectedColors 
        ? selectedColors.sizes.map((size: Size) => ({
            value: size.size, 
            label: size.size,
            disabled: !size.available
        })) : []
})

</script>

<template>
    <div v-if="product">
        <p>{{product}}</p>
        <span class="font-normal">Color:</span> {{ selectedColor }}
        <BaseRadioGroup :items=colorItems v-model="selectedColor"/>

        <span class="font-normal">Size:</span> {{ selectedSize }}
        <BaseRadioGroup :items=sizeItems v-model="selectedSize" :select-color="selectedColor"/>
    </div>
</template>