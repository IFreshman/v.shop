<script setup lang="ts">
import { ref } from "vue"
import { productsAPI } from "../services/products.api"
import Modal from "../../../components/Modal.vue"
import Dialog from "./Dialog.vue"

const [error, product] = await productsAPI.getProduct(1)
const defaultColor = ref()

const modal = ref<InstanceType<typeof Modal>>()

const showModal = () => modal.value?.show()

if (error) {
  console.error("Failed to fetch the product:", error)
} else {
  defaultColor.value = product?.color[0].value
}

function loadThumbnail() {
  return new URL(`/src/assets/clothes/Ltwre&asyt/product/${defaultColor.value}/1.webp`, import.meta.url).href
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-3 relative">
    <img v-lazy :src="loadThumbnail()" class="cursor-pointer mx-auto" @click="showModal" />
    <div class="flex justify-between gap-3 my-3">
        <p>{{ product?.name }}</p>
        <div>           
            <strong>{{ product?.price }}€</strong>
        </div>
    </div>
  </div>
  <Modal ref="modal">
    <Dialog :product=product!></Dialog>
    <Footer />
  </Modal>
</template>
