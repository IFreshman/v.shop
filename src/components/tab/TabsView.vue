<script setup lang="ts">
import { productsAPI } from "../../modules/product/services/products.api"
import TabsWrapper from "./TabsWrapper.vue"
import TabContentList from "./TabContentList.vue"
import TabImages from "./TabImages.vue"

const props = defineProps<{
  tabs: string[]
  selectedColor: string
  id: number
}>()

const [error, details] = await productsAPI.getProductDetails(props.id)

if (error) {
  console.error("Failed to fetch the product:", error)
}
</script>

<template>
  <div v-if="details" class="px-6">
    <TabsWrapper :tabs="props.tabs">
      <template #tab-0>
        <div class="flex items-start justify-between py-6">
          <div>
            <h2 class="py-2 font-semibold">Product Details</h2>
            <TabContentList :part="details.info" tag="details" />
            <div class="flex items-center space-x-2 py-4">
              <button disabled class="rounded-full border border-gray-300 bg-white p-2">
                <img class="h-5 w-5" src="/src/assets/svg/ean.svg" />
              </button>
              <div>
                <div>{{ details.article_num }}</div>
                <div>{{ details.ean }}</div>
              </div>
            </div>
          </div>
          <TabImages :selected-color="selectedColor" :id="id" :number="['4', '1']" />
        </div>
      </template>
      <template #tab-1>
        <div class="flex items-start justify-between py-6">
          <div>
            <h2 class="py-2 font-semibold">Fit</h2>
            <TabContentList :part="details.info" tag="fit" />
          </div>
          <TabImages :selected-color="selectedColor" :id="id" :number="['1', '4']" />
        </div>
      </template>
      <template #tab-2>
        <div class="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
          <div>
            <h2 class="py-2 font-semibold">Material</h2>
            <TabContentList :part="details.info" tag="material" />
          </div>
          <div>
            <h2 class="py-2 font-semibold">Material composition</h2>
            <TabContentList :part="details.info" tag="material_comp" />
          </div>
        </div>
        <div>
          <h2 class="py-2 font-semibold">Care Instructions</h2>
          <div class="grid grid-cols-2 gap-1">
            <div class="flex items-center gap-4" v-for="(care, index) in details.care" :key="index">
              <img :src="`/src/assets/svg/care_Instructions/${care.symbol}.svg`" class="w-6" />
              <div>{{ care.description }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #tab-3>
        <div class="flex items-center gap-3">
          <img src="/src/assets/svg/sus.svg" class="w-8" />
          <h1 class="font-bold uppercase">Certified sustainable fibre</h1>
        </div>
        <div class="py-4">
          <p>When it comes to certified sustainable fibres, we’re committed to using natural fibres from renewable sources. The raw materials are cultivated via resource-saving methods.</p>
          <h3 class="pt-4">Supporting Better Cottom</h3>
          <p>
            By choosing our cotton products, you’re supporting our investment in Better Cotton’s mission of helping communities survive and thrive, while protecting and restoring the environment.
            Better Cotton supports farming communities socially, environmentally and economically by training farmers in more sustainable cultivation methods. This product is sourced via a system of
            mass balance and therefore may not contain Better Cotton.
          </p>
        </div>
      </template>
    </TabsWrapper>
  </div>
</template>
