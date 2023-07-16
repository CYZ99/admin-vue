<script setup lang="ts">
import gasp from 'gsap'
import { reactive, watch } from 'vue'

const data = reactive({
  num: 0
})

const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})

function AnimateToValue() {
  gasp.to(data, {
    duration: 0.8,
    num: props.value
  })
}
AnimateToValue()
watch(() => props.value, () => AnimateToValue())
</script>

<template>
  {{ data.num.toFixed(0) }}
</template>

<style scoped>
</style>