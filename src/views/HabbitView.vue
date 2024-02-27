<script setup lang="ts">
import { useHabbitsStore } from '@/store/habbits'
import type { IHabbit } from '@/types/habbits'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DaysList from '@/components/Days/DaysList.vue'

const route = useRoute()
const router = useRouter()
const store = useHabbitsStore()

const habbit = ref<IHabbit>()
const progress = ref<number>(0)
const isReady = ref<boolean>(false)

const getHabbit = () => {
  const findHabbit = store.habbits.find((item) => item.id.toString() === route.params.id)

  if (!findHabbit) {
    router.push('/')
    return
  }

  habbit.value = findHabbit
}

onMounted(() => {
  getHabbit()
})

const deleteHabbit = () => {
  if (!habbit.value) {
    return
  }

  store.deleteHabbit(habbit.value.id)
  router.push('/')
}

watch(
  () => route.params.id,
  () => {
    if (route.params.id) {
      getHabbit()
    }
  }
)

watch(
  () => habbit.value?.days.length,
  () => {
    if (habbit.value!.days.length >= habbit.value!.goalDays) {
      isReady.value = true
    } else {
      isReady.value = false
    }
  }
)
</script>

<template>
  <div class="main" v-if="habbit">
    <div class="header">
      <div class="title">
        <h2>{{ habbit.name[0].toLocaleUpperCase() + habbit.name.slice(1) }}</h2>
        <button class="delete__button" @click="deleteHabbit">Удалить</button>
      </div>
      <div class="progress__container">
        <div class="progress__title">
          <p>Прогресс</p>
          <span> {{ Math.floor((progress = habbit.days.length / habbit.goalDays) * 100) }}% </span>
        </div>
        <div class="progress__bar">
          <div
            :style="`width: ${Math.floor((progress = habbit.days.length / habbit.goalDays) * 100)}%`"
          ></div>
        </div>
      </div>
    </div>
    <DaysList :days="habbit.days" :habbit-id="habbit.id" :is-ready="isReady" />
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding-left: 50px;
  padding-right: 40px;
  padding-top: 50px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

.progress__container {
  display: flex;
  gap: 12px;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
}

.progress__title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 16px;
    color: #232360;
  }
  span {
    font-size: 14px;
    color: #768396;
  }
}

.progress__bar {
  width: 100%;
  height: 5px;
  background: #e6e9ed;
  border-radius: 4px;

  div {
    border-radius: 4px;
    background: #5051f9;
    height: 5px;
    transition: width 0.3s ease-in-out;
  }
}

.title {
  font-size: 30px;
  line-height: 33px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
    }
  }
}

.delete__button {
  background: #edecfe;
  border: none;
  border-radius: 10px;
  width: 120px;
  padding: 14px;
  font-size: 13px;
  color: #5051f9;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #5051f9;
    color: white;
  }
}
</style>
