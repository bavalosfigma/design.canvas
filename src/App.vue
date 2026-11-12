<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { DialRoot } from 'dialkit/vue'
import SiteCursor from './components/SiteCursor.vue'
import CanvasApp from './prototypes/canvas/CanvasApp.vue'

const dialOpen = ref(false)

function isTyping(target) {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable
}

function onKey(event) {
  if (isTyping(event.target)) return
  if (event.metaKey || event.ctrlKey || event.altKey) return
  if (event.key === 'd' || event.key === 'D') {
    event.preventDefault()
    dialOpen.value = !dialOpen.value
  } else if (event.key === 'Escape') {
    dialOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <CanvasApp />
  <DialRoot v-if="dialOpen" @open-change="dialOpen = $event" />
  <SiteCursor />
</template>
