<script setup lang="ts"></script>

<template>
  <div class="slide">
    <Transition
      name="slide"
      enter-from-class="opacity-0"
      enter-active-class="transition duration-300"
    >
      <slot />
    </Transition>
  </div>
</template>
