<script setup lang="ts">
import { faBagShopping, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"

const dialog = ref<HTMLDialogElement>()

interface Props {
  footerName: string
  classes: string
}

const props = withDefaults(defineProps<Props>(), {
  footerName: "default",
  classes: "",
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
  <dialog ref="dialog" @close="visible = false" class="no-scrollbar w-full max-w-7xl pt-2 overflow-auto shadow-lg drop-shadow-lg md:max-w-6xl lg:max-w-7xl">
    <form method="dialog" class="flex flex-row-reverse px-6 py-3 sticky top-0">
      <FontAwesomeIcon class="text-gray-500 hover:text-black" :icon="faX" @click="confirm" />
    </form>
    <form
      v-if="visible"
      method="dialog"
      class="caret-transparent"
      :class="{
        [props.classes]: props.classes,
      }"
    >
      <slot />

      <div class="top sticky bottom-0 bg-white py-5 px-6">
        <div class="flex items-center justify-between">
          <h2>{{ props.footerName }}</h2>
          <button value="true" class="flex items-center justify-between gap-20 bg-black px-4 py-2 text-white" @click="showModal">
            <span class="text-left font-bold">Add to Cart</span>
            <FontAwesomeIcon :icon="faBagShopping" />
          </button>
        </div>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
.top {
  box-shadow: 0 30px 30px 30px #21212122;
}
</style>