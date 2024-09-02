<script setup lang="ts">
import { imageService } from "../../modules/product/services/img.services"
const props = defineProps<{
  selectedColor: string
  id: number
  number: string[]
}>()

function imageClasses(index: number) {
  const overlapStyles = ["relative top-0 left-0 w-60", "absolute top-60 right-52 z-2 w-36"]
  return overlapStyles[index] || overlapStyles[overlapStyles.length - 1]
}
</script>

<template>
  <div class="relative">
    <img v-for="(images, index) in number" :key="index" :src="imageService.getProductImage(props.id, selectedColor, images)" :class="imageClasses(index)" class="h-auto" />
  </div>
</template>
