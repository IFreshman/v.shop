<script setup lang="ts">
import { ref } from "vue"
import ProductView from "../modules/product/view/ProductView.vue";
import { Products } from "../modules/product/types/product";
import Modal from "./Modal.vue"

const props = defineProps<{
  product: Products
  defaultColor: string
}>()

const modal = ref<InstanceType<typeof Modal>>()

const showModal = () => modal.value?.show()

function loadThumbnail() {
  return new URL(`/src/assets/clothes/Ltwre&asyt/product/${props.defaultColor}/1.webp`, import.meta.url).href
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-3 relative">
    <img v-lazy :src="loadThumbnail()" class="cursor-pointer mx-auto" @click="showModal" />
    <div class="flex justify-between gap-3 my-3">
        <p>{{ product.name }}</p>
        <div>           
            <strong>{{ product.price }}€</strong>
        </div>
    </div>
  </div>
  <Modal ref="modal">
    <ProductView :product=product :default-color=defaultColor></ProductView>
    <Footer />
  </Modal>
</template>
