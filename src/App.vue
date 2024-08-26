<script setup lang="ts">
import { faBagShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
            <span class="font-normal">Color:</span> Aubergine
          </p>
          <div class="flex gap-4">
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/white.webp"
              />
            </button>
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/liliac.webp"
              />
            </button>
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/aubergine.webp"
              />
            </button>
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/light_blue.webp"
              />
            </button>
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/navy.webp"
              />
            </button>
            <button class="h-16 w-16 rounded-full">
              <img
                class="h-full w-full rounded-full object-contain"
                src="./assets/clothes/Ltwre&asyt/Color/bamboo_green.webp"
              />
            </button>
          </div>
          <div class="bottom-0 border"></div>
          <p class="font-bold"><span class="font-normal">Size:</span> XXL</p>
          <div class="flex gap-2">
            <div class="flex text-xs font-bold">
              <input class="hidden" type="radio" name="S" value="S" id="S" />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="S"
                >S</label
              >
            </div>
            <div class="flex text-xs font-bold">
              <input class="hidden" type="radio" name="M" value="M" id="M" />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="M"
                >M</label
              >
            </div>
            <div class="flex text-xs font-bold">
              <input class="hidden" type="radio" name="L" value="L" id="L" />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="L"
                >L</label
              >
            </div>
            <div class="flex text-xs font-bold">
              <input class="hidden" type="radio" name="XL" value="XL" id="XL" />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="XL"
                >XL</label
              >
            </div>
            <div class="flex text-xs font-bold">
              <input
                class="hidden"
                type="radio"
                name="XXL"
                value="XXL"
                id="XXL"
              />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="XXL"
                >XXL</label
              >
            </div>
            <div class="flex text-xs font-bold">
              <input
                class="hidden"
                type="radio"
                name="3XL"
                value="3XL"
                id="3XL"
              />
              <label
                class="flex h-6 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                for="M"
                >3XL</label
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
input[type="radio"]:checked + label {
  border: 1px solid black;
}
</style>
