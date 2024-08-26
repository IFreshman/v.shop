<script setup lang="ts">
import { faBagShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive, ref } from "vue";
import { Product, Size } from "./types/Product";

const selectedSize = ref<Size>("");
const selectedColor = ref("");

function imgUrl(value: string) {
  return new URL(
    `./assets/clothes/Ltwre&asyt/Color/${value}.webp`,
    import.meta.url,
  ).href;
}

const appTestInfo: Product = reactive({
  product: [
    {
      name: "Logo top with rolled edges and a slub yarn texture",
      price: "17,99",
      details: {
        texture : "slub texture",
        print : "logo print",
        neckline : "crew neck",
        sleeves : "short sleeves",
        details : "logo",
        ean: 4099976190552,
        article_number: "2150054.4868.S" 
      },
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
      color: [
          { name: "White", value: "white", av: ["S", "M", "L", "XL", "XXL", "3XL"]},
          { name: "Liliac", value: "liliac", av: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]},
          { name: "Aubergine", value: "aubergine", av: ["M", "L", "XL"]},
          { name: "Light Blue", value: "light_blue", av: ["XS", "S", "M", "L", "XL", "XXL", "3XL"] },
          { name: "Navy", value: "navy", av: ["XS", "S", "M", "L", "XL", "XXL", "3XL"] },
          { name: "Bamboo Green", value: "bamboo_green", av: []},
        ],
      fit : {
        fit: "Regular Fit"
      },
      mci:{
        material: {
          fabric: "slub yarn, cotton, jersey",
          quality: "stretchy, fine"
        },
        material_comp: {
          outer_fabric: "100% Cotton"
        },
        care: {
          "a": "Do not chlore",
          "b": "Gentle wash cycle 30°",
          "c": "No dry cleaning",
          "d": "Handwarm ironing",
          "e": "Tumble with reduced thermical pressure"
        }
      }
    },
  ],

  color: [
    { name: "White", value: "white" },
    { name: "Liliac", value: "liliac" },
    { name: "Aubergine", value: "aubergine" },
    { name: "Light Blue", value: "light_blue" },
    { name: "Navy", value: "navy" },
    { name: "Bamboo Green", value: "bamboo_green" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
});
</script>

<template>
  <!--<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <FontAwesomeIcon class="absolute top-4 right-4 text-gray-300 hover:text-gray-400 justify-left" :icon="faX" />
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div class="relative z-10" aria-modal="true">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>
    <div class="relative bg-white text-left shadow">
      <!-- Dialog Header -->
      <div class="flex flex-row-reverse px-4 py-3">
        <FontAwesomeIcon class="text-gray-500 hover:text-black" :icon="faX" />
      </div>

      <!-- Dialog Content-->
      <div class="flex gap-6">
        <img src="./assets/clothes/Ltwre&asyt/product/aubergine/1.webp" />
        <div class="w-full">
          <div>
            <span>Brand New</span>
          </div>
          <h2>Logo top with rolled edges and a slub yarn texture</h2>
          <div class="flex items-end justify-between">
            <p class="font-bold">17,99 €</p>
            <p><img src="./assets/logo/soliver.svg" /></p>
          </div>
          <div class="bottom-0 border"></div>
          <p class="font-bold">
            <span class="font-normal">Color:</span>
            {{
              appTestInfo.color.find((el) => el.value == selectedColor)?.name
            }}
          </p>
          <div class="flex gap-4">
            <div v-for="(color, index) in appTestInfo.color" :key="index">
              <input
                class="hidden"
                type="radio"
                :name="color.value"
                :value="color.value"
                :id="color.value"
                v-model="selectedColor"
              />
              <label :for="color.value">
                <img
                  class="h-14 w-14 rounded-full object-contain"
                  :class="{
                    'outline outline-2 outline-gray-800': selectedColor == color.value
                  }"
                  :src="imgUrl(color.value)"
              /></label>
            </div>
          </div>
          <div class="bottom-0 border"></div>

          <p class="font-bold">
            <span class="font-normal">Size:</span> {{ selectedSize }}
          </p>
          <div class="flex gap-2">
            <div
              v-for="(size, index) in appTestInfo.sizes"
              :key="index"
              class="flex text-xs font-bold"
            >
              <input
                class="hidden"
                type="radio"
                :name="size"
                :value="size"
                :id="size"
                v-model="selectedSize"
              />
              <label
                class="m-1 flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 caret-transparent"
                :class="{
                  'border border-transparent outline outline-2 outline-gray-800':
                    selectedSize == size,
                }"
                :for="size"
                >{{ size }}</label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div
        class="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
      >
        <ul class="-mb-px flex flex-wrap">
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              >Profile</a
            >
          </li>
          <li class="me-2">
            <a
              href="#"
              class="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
              aria-current="page"
              >Dashboard</a
            >
          </li>
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              >Settings</a
            >
          </li>
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              >Contacts</a
            >
          </li>
          <li>
            <a
              class="inline-block cursor-not-allowed rounded-t-lg p-4 text-gray-400 dark:text-gray-500"
              >Disabled</a
            >
          </li>
        </ul>
      </div>

      <!-- Sticky Footer -->
      <div class="sticky bottom-0 bg-white px-4 py-3">
        <div class="flex items-center justify-between">
          <h2 class="font-semibold">Article Name</h2>
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
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
/*input[type="radio"]:checked + label {
  border: 1px solid black;
}*/
</style>
