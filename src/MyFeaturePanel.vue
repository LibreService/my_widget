<script lang="ts">
import { Component, VNode } from 'vue'
import { NCard, NH2, NGrid, NGi } from 'naive-ui'
import MyFeature from './MyFeature.vue'

interface Props {
  title: string
  features: {
    icon: Component,
    title: string,
    content?: () => VNode
    description?: string
  }[]
}
</script>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  title: 'Features'
})
</script>

<template>
  <n-card>
    <div style="text-align: center">
      <n-h2>{{ title }}</n-h2>
    </div>
    <n-grid
      :x-gap="16"
      :y-gap="24"
      cols="1 400:2 600:3"
    >
      <n-gi v-for="{ icon, title: panelTitle, content, description } of features">
        <my-feature
          :icon="icon"
          :title="panelTitle"
          :content="content"
          :description="description"
        />
      </n-gi>
    </n-grid>
  </n-card>
</template>
