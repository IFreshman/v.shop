<script setup lang="ts">
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Modal from "./Modal.vue"
import { ref } from "vue"

const modal = ref<InstanceType<typeof Modal>>()

const showModal = () => modal.value?.show()
</script>

<template>
  <div class="flex items-center justify-between">
    <h2 class="font-semibold">Tesh</h2>
    <button value="true" class="flex items-center justify-between gap-20 bg-black px-4 py-2 text-white" @click="showModal">
      <span class="text-left font-bold">Add to Cart</span>
      <FontAwesomeIcon :icon="faBagShopping" />
    </button>
  </div>
</template>
