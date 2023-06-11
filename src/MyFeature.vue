<script setup lang="ts">
import { Component, VNode, defineComponent } from 'vue'
import { NIcon, NH3 } from 'naive-ui'

defineProps<{
  icon: Component,
  title: string,
  content?: () => VNode
  description?: string
}>()
</script>

<template>
  <n-h3 style="display: flex; align-items: center;justify-content: center">
    <n-icon
      :component="icon"
      size="32"
      style="margin-right: 8px"
    />{{ title }}
  </n-h3>
  <component
    :is="defineComponent(() => content!)"
    v-if="content"
  />
  <template v-else>
    {{ description }}
  </template>
</template>
