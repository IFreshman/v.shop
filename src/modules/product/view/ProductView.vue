<script setup lang="ts">
import { computed, ref } from "vue"
import BaseRadioGroup from "../../../components/base/BaseRadioGroup.vue"
import { Products, Size } from "../types/product"
import TabsView from "../../../components/base/TabsView.vue"
import BaseCarousel from "../../../components/base/BaseCarousel .vue"
import BaseSlide from "../../../components/base/BaseSlide.vue"
import BaseDivider from "../../../components/base/BaseDivider.vue"

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

function imgSlide(value: number) {
  return new URL(`/src/assets/clothes/Ltwre&asyt/product/${selectedColor.value}/${value}.webp`, import.meta.url).href
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
    <!-- Carrousel -->
    <div class="bg-blue-500 p-4 md:col-span-3">
      <BaseCarousel v-slot="{ currentSlide }">
        <BaseSlide v-for="index in [1, 2, 3, 4, 5]" :key="index">
          <div v-show="currentSlide === index">
            <img v-lazy :src="imgSlide(index)" alt="slide" />
          </div>
        </BaseSlide>
      </BaseCarousel>
    </div>

    <div class="p-4 md:col-span-2">
      <h2 class="font-medium">Brand New</h2>
      <h1 class="text-2xl font-thin">{{ product.name }}</h1>
      <div class="flex items-end justify-between py-4">
        <p class="font-bold">{{ product.price }} EUR</p>
        <p><img src="/src/assets/logo/soliver.svg" /></p>
      </div>

      <BaseDivider />

      <div class="py-2">
        <h2 class="pb-2 font-bold"><span class="font-normal">Color:</span> {{ product.color.find((c) => c.value == selectedColor)!.name }}</h2>
        <div class="flex flex-wrap gap-5">
          <BaseRadioGroup :items="colorItems" v-model="selectedColor">
            <template #label="{ item }">
              <img
                class="h-14 w-14 rounded-full object-contain hover:drop-shadow-lg"
                :class="{
                  'outline outline-1 outline-offset-2 outline-black drop-shadow-lg': selectedColor == item.value,
                  'opacity-40': item.disabled,
                }"
                :src="getColorImage(item.value)"
                :alt="item.value"
              />
            </template>
          </BaseRadioGroup>
        </div>
      </div>

      <BaseDivider />

      <!-- Idea: wenn out of stock/ disabled then add sth-->
      <div class="py-2">
        <h2 class="pb-2 font-bold"><span class="font-normal">Size:</span> {{ selectedSize }} </h2>
        <div class="flex flex-wrap gap-1">
          <BaseRadioGroup :items="sizeItems" v-model="selectedSize" :select-color="selectedColor">
            <template #label="{ item }">
              <div class="m-1 flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:drop-shadow-md"
              :class="{
                'outline outline-2 outline-offset-2 outline-gray-800 drop-shadow-md': selectedSize == item.value,
                'opacity-40': item.disabled
              }"
              >
                {{ item.value }}
              </div>
            </template>
          </BaseRadioGroup>
        </div>
      </div>
    </div>

    <div class="bg-orange-500 p-4 md:col-span-5">
      <TabsView :id="product.id" :tabs="['Details', 'Fit', 'Material & Care Instructions', 'Sustainability']" />
    </div>
  </div>
</template>
