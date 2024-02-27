<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useHabbitsStore } from '@/store/habbits'
import HabbitsModal from '@/components/Habbits/HabbitsModal.vue'
import { ref } from 'vue'
import HabbitIcons from '../Icons/HabbitIcons.vue'

const store = useHabbitsStore()

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <aside class="sidebar">
    <RouterLink to="/" class="logo">
      <img src="../../assets//images/logo.png" alt="logo" />
      <h1>Habbit</h1>
    </RouterLink>
    <div class="habbits">
      <RouterLink
        class="habbit"
        v-for="habbit in store.habbits"
        :key="habbit.id"
        :to="`${habbit.id}`"
      >
        <HabbitIcons :type="habbit.icon" />
      </RouterLink>
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

    <HabbitsModal :show-modal="showModal" @close-modal="closeModal" />
  </aside>
</template>

<style lang="scss">
.sidebar {
  background: #fbfaff;
  min-height: 100dvh;
  padding: 29px;

  @media (max-width: 768px) {
    padding: 13px;
  }
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-bottom: 7px;
  }

  h1 {
    font-size: 18px;
    line-height: 20px;
  }
}

.add {
  background: none;
  padding: 13px;
  border: 1px solid #cad5ff;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    border: 1px solid #5051f9;
  }
}

.habbits {
  height: 85dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.habbit {
  background: #fff;
  padding: 10px;
  border-radius: 14px;
  box-shadow: 0px 8px 14px 0px #3e6be01f;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #5051f9;

    svg path {
      stroke: #fff;
      background: #5051f9;
      transition: 0.1s ease-in-out;
    }
  }
}
</style>
