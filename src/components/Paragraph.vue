<template>
  <div>{{ props.item.props.text ? props.item.props.text : 'Paragraph' }}</div>
</template>

<script setup>
const props = defineProps(['item'])

</script>

<style scoped>

</style>