<script setup lang="ts">
import { faBagShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import { productsAPI } from "../services/products.api";
import { Size } from "../types/product";

const [error, product] = await productsAPI.getProduct(1)

if (error) {
  console.error("Failed to fetch the product:", error);
} else {
  //console.log("Product data:", product);
}

const selectedColor = ref(product?.color[2].value)
const selectedSize = ref<Size>()

const testpic: string[] = ["1", "2", "3", "4", "5"];

function imgUrl(value: string) {
  return new URL(
    `/src/assets/clothes/Ltwre&asyt/Color/${value}.webp`,
    import.meta.url,
  ).href;
}

function imgSlide(value: string) {
  return new URL(
    `/assets/clothes/Ltwre&asyt/product/aubergine/${value}.webp`,
    import.meta.url,
  ).href;
}
</script>

<template>
  <div v-if="product"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-2xl"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <!-- Dialog Header -->
            <div class="flex flex-row-reverse px-4 py-3">
              <FontAwesomeIcon
                class="text-gray-500 hover:text-black"
                :icon="faX"
              />
            </div>

            <!-- Dialog Content -->
            <div class="flex gap-6">
              <p>{{ product.color }}</p>
              <div class="aspect-story h-20 bg-red-600"></div>
              <!--Carousel -->
              <!--<Carousel :navigation="true" v-slot="{ currentSlide }">
              <Slide v-for="(slide, index) in testpic" :key="index">
                <div v-show="currentSlide === index + 1">
                  <img :src=imgSlide(slide) alt="slide"/>
                </div>
              </Slide>
            </Carousel>-->

              <!--<img src="./assets/clothes/Ltwre&asyt/product/aubergine/1.webp" />-->
              <!--Selection -->
              <div class="w-full">
                <div>
                  <span>Brand New</span>
                </div>
                <h2>{{ product.name}}</h2>
                <div class="flex items-end justify-between">
                  <p class="font-bold">{{ product.price }} €</p>
                  <p><img src="/src/assets/logo/soliver.svg" /></p>
                </div>
                <div class="bottom-0 border"></div>
                <p class="font-bold">
                  <span class="font-normal">Color:</span>
                  {{
                    product.color.find((el) => el.value == selectedColor)
                      ?.name
                  }}
                </p>
                <div class="flex gap-4">
                  <div v-for="(color, index) in product.color" :key="index">
                    <input
                      class="hidden"
                      type="radio"
                      :name="color.value"
                      :value="color.value"
                      :id="color.value"
                      v-model="color.value"
                    />
                    <label :for="color.value">
                      <img
                        class="h-14 w-14 rounded-full object-contain"
                        :class="{
                          'outline outline-2 outline-gray-800':
                            selectedColor == color.value,
                        }"
                        :src="imgUrl(color.value)"
                    /></label>
                  </div>
                </div>
                <div class="bottom-0 border"></div>

                <p class="font-bold">
                  <span class="font-normal">Size:</span> {{ selectedSize }}
                  <p>{{ product.color.find((el) => el.value == selectedColor)?.av }} {{selectedColor}}</p>
                </p>
                <div class="flex gap-2">
                  <div
                    v-for="(size, index) in product.sizes"
                    :key="index"
                    class="flex text-xs font-bold"
                  >
                    <input :disabled="!product.color.find((el) => el.value == selectedColor)?.av.includes(size)" class="hidden" type="radio" :name="size" :value="size" :id="size" v-model="selectedSize"/>
                    <label
                      class="m-1 flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 caret-transparent"
                      :class="{
                        'border border-transparent outline outline-2 outline-gray-800':
                          selectedSize == size,
                        'bg-red-600':
                        !product.color.find((el) => el.value == selectedColor)?.av.includes(size)
                      }"
                      :for="size"
                      >{{ size }} {{ product.color.find((el) => el.value == selectedColor)?.av.includes(size)}}</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Content -->

            <!-- Sticky Footer -->
            <div class="sticky bottom-0 bg-white px-4 py-3">
              <div class="flex items-center justify-between">
                <h2 class="font-semibold">{{ product.name }}</h2>
                <button
                  type="button"
                  class="flex items-center justify-between gap-40 bg-black px-4 py-2 text-white"
                >
                  <span class="text-left font-bold">Add to Cart</span>
                  <FontAwesomeIcon :icon="faBagShopping" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
