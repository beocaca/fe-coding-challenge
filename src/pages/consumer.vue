<template>
  <div class="text-center pt-5">
    <div class="py-1"
         v-for="item in list"
         :key="item.id">
      <component :item="item"
                 @click="click(item)"
                 :is="COMPONENTS[item.component]"/>
    </div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";

let list = ref()
const click = (item) => {
  if (item.component === "Button") {
    alert(item.props.mess ?? '')
  }
}
let COMPONENTS = {
  Button: Button,
  Paragraph: Paragraph,
}
onMounted(async () => {
  await nextTick()
  list.value = JSON.parse(localStorage.getItem('myData'));
})
document.title = 'Consumer';

</script>

<style scoped>

</style>