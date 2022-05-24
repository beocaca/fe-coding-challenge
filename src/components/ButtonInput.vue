<template>
  <div class="w-1/3">
    <div>
      <div>Button Text</div>
      <input type="text"
             class="bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full  p-2.5
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Button Text"
             autofocus
             :value="props.text"
             @input="emits('update:text', $event.target.value)"/>
    </div>
    <div class="mt-3">
      <div>Alert Message</div>
      <input type="text"
             class="bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full  p-2.5
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Alert Message"
             :value="props.mess"
             @input="emits('update:mess', $event.target.value)"/>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:text', 'update:mess'])
const props = defineProps(['text', 'mess'])
</script>

<style scoped>

</style>