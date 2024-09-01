<script setup lang="ts">
import { Info } from "../../modules/product/types/product"

const props = defineProps<{
  part: Info[]
  tag: string
}>()
</script>

<template>
  <div v-for="(info, index) in part.filter((item) => item.tag == props.tag)" :key="index">{{ info.title }}: {{ info.description }}</div>
</template>
