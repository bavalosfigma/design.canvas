<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'
import PanStage from './PanStage.vue'
import LightboxModal from './LightboxModal.vue'
import { galleryItems } from '../data/items.js'
import { softSpring } from '../motion/tokens.js'
import {
  canvasOutwardStaggerIndex,
  canvasPlaceFrom,
  canvasPlaceTo,
  canvasPlaceTransition,
} from '../motion/fall.js'

const reducedMotion = ref(false)
const selectedId = ref(null)
const slides = galleryItems.map((item) => ({ image: item.image }))
const selected = computed(() => galleryItems.find((item) => item.id === selectedId.value) ?? null)
const selectedIndex = computed(() => {
  const index = galleryItems.findIndex((item) => item.id === selectedId.value)
  return index >= 0 ? index : 0
})
let media

onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = media.matches
  media.addEventListener('change', onMotionPreference)
})

onUnmounted(() => {
  media?.removeEventListener('change', onMotionPreference)
})

function onMotionPreference(event) {
  reducedMotion.value = event.matches
}

function place(item) {
  return {
    left: `${item.x}px`,
    top: `${item.y}px`,
    width: `${item.w}px`,
  }
}

function openShot(item) {
  selectedId.value = item.id
}

function closeLightbox() {
  selectedId.value = null
}

function enterProps(item) {
  if (reducedMotion.value) {
    return { initial: false, animate: canvasPlaceTo }
  }
  return {
    initial: canvasPlaceFrom,
    animate: canvasPlaceTo,
    transition: canvasPlaceTransition(
      canvasOutwardStaggerIndex(galleryItems, item.id),
      reducedMotion.value,
    ),
  }
}
</script>

<template>
  <PanStage>
    <motion.figure
      v-for="item in galleryItems"
      :key="item.id"
      class="shot group"
      :style="place(item)"
      v-bind="enterProps(item)"
      :while-hover="{ scale: 1.02, transition: softSpring }"
      role="button"
      tabindex="0"
      :aria-label="`Open ${item.label}`"
      @click.stop="openShot(item)"
      @keydown.enter.stop="openShot(item)"
    >
      <div class="media" :style="{ height: `${item.h}px` }">
        <img
          v-if="item.image"
          class="photo"
          :src="item.image"
          alt=""
          draggable="false"
          :style="item.imageStyle"
        />
      </div>
      <figcaption class="type-label-xsmall">
        {{ item.label }}
      </figcaption>
    </motion.figure>
  </PanStage>

  <LightboxModal
    :open="Boolean(selected)"
    :title="selected?.label ?? ''"
    :slides="slides"
    :index="selectedIndex"
    @close="closeLightbox"
  />
</template>

<style scoped>
.shot {
  position: absolute;
  margin: 0;
  pointer-events: auto;
  transform-origin: center bottom;
  cursor: pointer;
}

.media {
  position: relative;
  overflow: hidden;
  background: #d4d4d4;
}

.photo {
  position: absolute;
  max-width: none;
  pointer-events: none;
}

figcaption {
  margin-top: 8px;
  color: #6b6b6b;
}

@media (prefers-reduced-motion: reduce) {
  .shot {
    transform: none !important;
  }
}
</style>
