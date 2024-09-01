<script setup lang="ts">
import { faBagShopping, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"

const dialog = ref<HTMLDialogElement>()

const props = defineProps({
  classes: {
    type: String,
    default: "",
  },
})

const emit = defineEmits(["confirm"])

const confirm = () => {
  dialog.value?.close()
  emit("confirm")
}

const visible = ref(false)

const showModal = () => {
  dialog.value?.showModal()
  visible.value = true
}

defineExpose({
  show: showModal,
})
</script>

<template>
  <dialog ref="dialog" @close="visible = false" class="shadow-lg p-6 w-full max-w-7xl md:max-w-6xl lg:max-w-7xl">
    <form method="dialog" class="flex flex-row-reverse px-4 py-3">
      <FontAwesomeIcon class="text-gray-500 hover:text-black" :icon="faX" @click="confirm" />
    </form>
    <form
      v-if="visible"
      method="dialog"
      :class="{
        'rounded-none p-4': true,
        [props.classes]: props.classes,
      }"
    >
      <slot />

      <div>
        <slot name="footer" />
        <slot name="actionButtons">
          <button value="true" class="flex items-center justify-between gap-20 bg-black px-4 py-2 text-white" @click.prevent="confirm">
            <span class="text-left font-bold">Add to Cart</span>
            <FontAwesomeIcon :icon="faBagShopping" />
          </button>
        </slot>
      </div>
    </form>
  </dialog>
</template>
