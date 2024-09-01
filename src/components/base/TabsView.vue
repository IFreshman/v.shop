<script setup lang="ts">
import { productsAPI } from "../../modules/product/services/products.api"
import Tabs from "./Tabs.vue"
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
    <Tabs :tabs=props.tabs>
      <template #tab-0>
        <h2>Product Details</h2>
        <TabContentList :part="details.info" tag="details" />
      </template>
      <template #tab-1>
        <h2>Fit</h2>
        <TabContentList :part="details.info" tag="fit" />
      </template>
      <template #tab-2>
        <h2>Material</h2>
        <TabContentList :part="details.info" tag="material" />
        <h2>Material composition</h2>
        <TabContentList :part="details.info" tag="material_comp" />
      </template>
      <template #tab-3>
        <p>This is the sustainability content.</p>
      </template>
    </Tabs>
  </div>
</template>
