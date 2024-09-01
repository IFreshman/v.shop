<script setup lang="ts">
import { productsAPI } from "../modules/product/services/products.api"
import { Color, Products, Size } from "../modules/product/types/product";
import HomeProductCard from "./HomeProductCard.vue";

const [error, products] = await productsAPI.getAllProducts()

if (error) {
  console.error("Failed to fetch the product:", error)
}

function getDefaultColor(product: Products){
    return product.color.find((c: Color) => c.sizes.some((s: Size) => s.available))!.value
}
</script>

<template>
  <div v-for="(product, index) in products" :key="index">
    <HomeProductCard :product=product :default-color=getDefaultColor(product) ></HomeProductCard>
  </div>
</template>
