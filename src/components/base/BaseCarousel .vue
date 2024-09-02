<script setup lang="ts">
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { onMounted, ref } from "vue"

const currentSlide = ref(1)
const getSlideCount = ref(0)

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1
    return
  }
  currentSlide.value += 1
}

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = getSlideCount.value
    return
  }
  currentSlide.value -= 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index + 1
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length
})
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex w-full transition-transform duration-700" :style="{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }">
      <slot :currentSlide="currentSlide" />
    </div>

    <!-- Navigation -->
    <div class="absolute left-0 right-0 top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-4">
      <button type="button" @click="prevSlide()" class="left-nav text-gray-700 hover:text-black">
        <FontAwesomeIcon :icon="faChevronLeft" />
      </button>
      <button type="button" @click="nextSlide()" class="right-nav text-gray-700 hover:text-black">
        <FontAwesomeIcon :icon="faChevronRight" />
      </button>
    </div>

    <!-- Pagination -->
    <div class="absolute bottom-6 flex w-full items-center justify-center gap-4">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="slide"
        class="h-2 w-2 cursor-pointer rounded-full bg-gray-400 shadow-sm"
        :class="{ '!h-3 !w-3 !bg-gray-700': index + 1 === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>
