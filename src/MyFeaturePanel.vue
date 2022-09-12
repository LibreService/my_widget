<script setup lang="ts">
import { Component } from 'vue'
import { NCard, NH2, NGrid, NGi } from 'naive-ui'
import MyFeature from './MyFeature.vue'

defineProps<{
  features: {
    icon: Component,
    title: string,
    description: string
  }[]
}>()
</script>

<template>
<n-card>
  <div style="text-align: center"><n-h2>Features</n-h2></div>
  <n-grid :x-gap="16" :y-gap="24" cols="1 400:2 600:3">
    <n-gi v-for="{ icon, title, description } of features">
      <my-feature :icon="icon" :title="title" :description="description"></my-feature>
    </n-gi>
  </n-grid>
</n-card>
</template>
