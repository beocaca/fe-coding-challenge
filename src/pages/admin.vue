<template>
  <div class="h-full flex flex-col">
    <div class="flex ml-80 justify-center">
      <div class="flex py-2 pb-1 ">
        <div>
          <button @click="setDataStorage"
                  type="button"
                  class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900">
            Save
          </button>
        </div>
        <div>
          <button type="button"
                  class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900">
            Undo
          </button>
        </div>
        <div>
          <button type="button"
                  class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900">
            Redo
          </button>
        </div>
        <div>
          <button type="button"
                  class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900">
            Export
          </button>
        </div>
        <div>
          <button type="button"
                  class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900">
            Import
          </button>
        </div>
        <router-link :to="{ name: 'Consumer'}"
                     class="text-white bg-orange-700
              hover:bg-orange-800 focus:outline-none
              focus:ring-4 focus:ring-red-300 font-medium
               text-sm px-5 py-2.5 text-center
               mb-2 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-900"
                     target="_blank">
          View
        </router-link>
      </div>
    </div>
    <div class="flex flex-1"
         style="border-top: solid 1px gray ">
      <div class="w-52 flex flex-col"
           style="border-right: solid 1px gray">
        <div draggable="true"
             @drag="mouseMove"
             @dragstart="startDrag($event,'Paragraph')"
             class="w-full h-32 flex-col flex items-center justify-center btn cursor-pointer	">
          <div class="w-16 h-16 red"></div>
          <div>Paragraph</div>
        </div>
        <div draggable="true"
             @drag="mouseMove"
             @dragstart="startDrag($event,'Button')"
             class="w-full h-32 flex-col flex items-center justify-center btn cursor-pointer	">
          <div class="w-16 h-16 red"></div>
          <div>Button</div>
        </div>
      </div>
      <div class="w-full h-full mouse-container"
           @mousemove="mouseMove">
        <div
            class="flex-1 border-l-2 h-4/5 flex "
            @drop="onDrop($event,3)"
            @dragover.prevent
        >
          <div class="pointer-events-none pt-5 pl-4 flex-1">
            <div class="pt-2"> Mouse:
              <template v-if="position?.x">({{ position.x }},{{ position.y }})</template>
            </div>
            <div class="pt-2"> Dragging: {{ dragging }}</div>
            <div class="pt-2"> Instance: {{ listCpn.length ? listCpn.length : '' }}</div>
            <div class="pt-2"> Config: {{ config }}</div>
          </div>
          <div class="w-1/2 pt-3">
            <div class="py-1"
                 v-for="item in listCpn"
                 :key="item.id">
              <component :item="item"
                         @click="setConfig(item)"
                         :is="COMPONENTS[item.component]"/>
            </div>
          </div>
        </div>
        <div class="pl-4 mb-2"
             style="border-top:solid 1px gray ">
          <component
              v-if="config"
              v-model:text="listCpn[listCpn.findIndex(e=>e.id === config?.id)].props.text"
              v-model:mess="listCpn[listCpn.findIndex(e=>e.id === config?.id)].props.mess"
              :is="COMPONENTS[config?.component+'Input']"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, ref} from 'vue'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import ButtonInput from '../components/ButtonInput'
import ParagraphInput from '../components/ParagraphInput'

let COMPONENTS = {
  Button: Button,
  Paragraph: Paragraph,
  ButtonInput: ButtonInput,
  ParagraphInput: ParagraphInput,
}
document.title = 'Admin';

let config = ref()
let dragging = ref()
let listCpn = ref([])
let position = ref({})

const startDrag = (event, item) => {
  event.target.classList.add('bg-gray-300')
  dragging.value = item + 'Element'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemID', item)
}

const onDrop = (event, list) => {
  let dataTransfer = event.dataTransfer.getData('itemID')
  add(dataTransfer)
  document.querySelectorAll('.btn').forEach(e => e.classList.remove('bg-gray-300'))
  dragging.value = ''
}
const setConfig = (item) => {
  config.value = item
}

const add = (name) => {
  listCpn.value.push({id: Date.now(), component: name, props: {}})
  config.value = ''
}

const mouseMove = (event) => {
  let rect = event.target.getBoundingClientRect();
  position.value.x = Math.round(event.clientX - rect.left + 1)
  position.value.y = Math.round(event.clientY - rect.top + 1)
}
const setDataStorage = () => {
  localStorage.setItem('myData', JSON.stringify(listCpn.value));
}

// onMounted(async () => {
//   await nextTick()
//   listCpn.value = JSON.parse(localStorage.getItem('myData'));
// })
</script>

<style>
.red {
  border: solid red 1px;
  border-color: gray !important;
}

.mouse-container {
}


</style>