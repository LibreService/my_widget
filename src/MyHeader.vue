<script setup lang="ts">
import { NIcon, NText } from 'naive-ui'
import { Github } from '@vicons/fa'

const prop = defineProps<{
  icon: string,
  homepage: string
}>()

function toLS () {
  window.open('https://github.com/LibreService', '_blank')
}

function toRepo () {
  window.open(prop.homepage, '_blank')
}
</script>

<template>
  <div
    style="padding-left: 24px; display: flex; align-items: center; cursor: pointer"
    @click="toLS"
  >
    <img
      :src="icon"
      style="width: 48px; height: 48px"
    >
    <n-text style="font-size: 18px; margin-left: 12px">
      LibreService
    </n-text>
  </div>
  <n-icon
    :size="28"
    style="padding-right: 16px; cursor: pointer"
    @click="toRepo"
  >
    <github />
  </n-icon>
</template>
