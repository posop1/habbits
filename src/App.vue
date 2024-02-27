<script setup lang="ts">
import Sidebar from '@/components/Layout/Sidebar.vue'
</script>

<template>
  <div class="container">
    <Sidebar />

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 100dvh;
}
</style>
