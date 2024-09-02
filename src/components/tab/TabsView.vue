<script setup lang="ts">
import { productsAPI } from "../../modules/product/services/products.api"
import TabsWrapper from "./TabsWrapper.vue"
import TabContentList from "./TabContentList.vue"

const props = defineProps<{
  tabs: string[]
  id: number
}>()

const [error, details] = await productsAPI.getProductDetails(props.id)

if (error) {
  console.error("Failed to fetch the product:", error)
}
</script>

<template>
  <div v-if="details">
    <TabsWrapper :tabs=props.tabs >
      <template #tab-0>
        <div class="grid p-4">
          <h2 class="font-semibold">Product Details</h2>
          <TabContentList :part="details.info" tag="details" />
        </div>
      </template>
      <template #tab-1>
        <div class="grid p-4">
          <h2 class="font-semibold">Fit</h2>
          <TabContentList :part="details.info" tag="fit" />
        </div>
      </template>
      <template #tab-2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-500 p-4">
            <h2 class="font-semibold">Material</h2>
            <TabContentList :part="details.info" tag="material" />
          </div>
          <div class="bg-green-500 p-4">
            <h2 class="font-semibold">Material composition</h2>
            <TabContentList :part="details.info" tag="material_comp" />
          </div>
        </div>
      </template>
      <template #tab-3>
        <p>When it comes to certified sustainable fibres, we’re committed to using natural fibres from renewable sources. The raw materials are cultivated via resource-saving methods.</p>
        <h3>Supporting Better Cottom</h3>  
        <p> By choosing our cotton products, you’re supporting our investment in Better Cotton’s mission of helping communities survive and thrive, while protecting and restoring the environment. Better Cotton supports farming communities socially, environmentally and economically by training farmers in more sustainable cultivation methods. This product is sourced via a system of mass balance and therefore may not contain Better Cotton.</p>
      </template>
    </TabsWrapper>
  </div>
</template>
