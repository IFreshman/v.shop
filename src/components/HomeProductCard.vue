<script setup lang="ts">
import { ref } from "vue"
import ProductView from "../modules/product/view/ProductView.vue"
import { Products } from "../modules/product/types/product"
import Modal from "./Modal.vue"
import { imageService } from "../modules/product/services/img.services"

const props = defineProps<{
  product: Products
  defaultColor: string
}>()

const modal = ref<InstanceType<typeof Modal>>()

const showModal = () => modal.value?.show()
</script>

<template>
  <div class="relative rounded-lg bg-white p-3 shadow-lg">
    <img v-lazy :src="imageService.getProductImage(product.id, props.defaultColor, '1')" class="mx-auto cursor-pointer" @click="showModal" />
    <div class="my-3 flex justify-between gap-3">
      <p>{{ product.name }}</p>
      <div>
        <strong>{{ product.price }}€</strong>
      </div>
    </div>
  </div>
  <Modal ref="modal" :footer-name="product.name">
    <ProductView :product="product" :default-color="defaultColor"></ProductView>
  </Modal>
</template>
