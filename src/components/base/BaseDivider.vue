<script setup lang="ts">
import { computed } from "vue"

interface Props {
  vertical?: boolean
  color?: string
  thickness?: string
  length?: string
  margin?: string
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  color: "#e0e0e0",
  thickness: "1px",
  length: "100%",
  margin: "8px 0",
})

const dividerClass = computed(() => ({
  divider: true,
  "divider-vertical": props.vertical,
}))

const dividerStyle = computed(() => ({
  backgroundColor: props.color,
  width: props.vertical ? props.thickness : props.length,
  height: props.vertical ? props.length : props.thickness,
  margin: props.vertical ? `0 ${props.margin}` : props.margin,
}))
</script>

<template>
  <div :class="dividerClass" :style="dividerStyle"></div>
</template>
