<script setup lang="ts">
import { ref } from "vue"
import ProductView from "../modules/product/view/ProductView.vue"
import { Product } from "../modules/product/types/product"
import Modal from "./Modal.vue"
import { imageService } from "../modules/product/services/img.services"

const props = defineProps<{
  product: Product
  defaultColor: string
}>()

const modal = ref<InstanceType<typeof Modal>>()

const showModal = () => modal.value?.show()
</script>

<template>
  <div class="relative mx-auto max-w-xs rounded-lg bg-white p-3 shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <img v-lazy :src="imageService.getProductImage(product.id, props.defaultColor, '1')" class="mx-auto h-auto w-full cursor-pointer" @click="showModal" />
    <div class="my-3 flex flex-col gap-3 sm:flex-row sm:justify-between">
      <p class="text-base font-medium sm:text-lg">{{ product.name }}</p>
      <div>
        <strong class="text-base sm:text-lg">{{ product.price }}€</strong>
      </div>
    </div>
  </div>
  <Modal ref="modal" :footer-name="product.name">
    <ProductView :product="product" :default-color="defaultColor"></ProductView>
  </Modal>
</template>
