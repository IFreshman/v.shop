<script setup lang="ts">
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref } from "vue";

const currentSlide = ref(1);
const getSlideCount = ref(0);

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = getSlideCount.value;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index: number) => {
    currentSlide.value = index + 1
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length;
  console.log(getSlideCount);
});
</script>

<template>
  <div class="">
    <slot :currentSlide="currentSlide" />
  </div>

  <!-- Navigation -->
  <div>
    <FontAwesomeIcon :icon="faChevronLeft" @click="prevSlide" />
    <FontAwesomeIcon :icon="faChevronRight" @click="nextSlide" />
  </div>

  <!-- Pagination -->
  <div>
    <span
      v-for="(slide, index) in getSlideCount"
      :key="index"
      :class="{ 'bg-red-400': index + 1 === currentSlide }"
      @click="goToSlide(index)"
      >{{ slide }}</span
    >
  </div>
</template>
