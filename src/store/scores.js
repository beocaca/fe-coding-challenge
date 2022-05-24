import {defineStore} from 'pinia'
import {nextTick, ref} from 'vue'

export const useStore = defineStore('scores', () => {
    const state = ref({

    })
    return {
        state,
    }
})
