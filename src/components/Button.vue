<template>
  <button type="button"
          class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none
          focus:ring-gray-100 font-medium rounded-lg text-sm
          px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 ">
    {{ props.item.props.text ? props.item.props.text : 'Button' }}
  </button>
</template>

<script setup>
const props = defineProps(['item'])
</script>

<style scoped>

</style>