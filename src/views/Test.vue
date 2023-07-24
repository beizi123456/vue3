<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex-1',
  setup () {
    const count = ref<number>(0)
    type add = () => void
    const increment: add = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>
