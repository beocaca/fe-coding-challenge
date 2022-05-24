<template>
  <div class="w-1/3">
    <div> Paragraph text</div>
    <input type="text"
           class="bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full  p-2.5
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           placeholder="Paragraph text"
           autofocus
           :value="props.text"
           @input="emits('update:text', $event.target.value)"/>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:text'])
const props = defineProps(['text'])
</script>

<style scoped>

</style>