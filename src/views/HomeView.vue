<script setup lang="ts">
import { useHabbitsStore } from '@/store/habbits'
import { ref } from 'vue'
import HabbitsModal from '@/components/Habbits/HabbitsModal.vue'
import HabbitsList from '@/components/Habbits/HabbitsList.vue'

const store = useHabbitsStore()

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <main class="main">
    <div class="title">
      <h2>Ваши привычки</h2>
      <button class="add" @click="() => (showModal = true)">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3333 18.6667C14.9357 18.6667 18.6667 14.9357 18.6667 10.3333C18.6667 5.73096 14.9357 2 10.3333 2C5.73096 2 2 5.73096 2 10.3333C2 14.9357 5.73096 18.6667 10.3333 18.6667Z"
            stroke="#CAD5FF"
            stroke-miterlimit="10"
          />
          <path d="M5.41663 10H14.5833" stroke="#CAD5FF" stroke-miterlimit="10" />
          <path d="M10 5.41666V14.5833" stroke="#CAD5FF" stroke-miterlimit="10" />
        </svg>
      </button>
    </div>
    <HabbitsList :habbits="store.habbits" v-if="store.habbits.length > 0" />
    <div class="without__habbits" v-else>
      <h3>Привычки отсутствуют</h3>
    </div>

    <HabbitsModal :show-modal="showModal" @close-modal="closeModal" />
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding-left: 50px;
  padding-top: 50px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  line-height: 33px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.add {
  align-self: center;
  justify-self: center;
}

.without__habbits {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
