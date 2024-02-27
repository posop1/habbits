import { IconsType } from '@/types/common'
import type { IHabbit } from '@/types/habbits'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHabbitsStore = defineStore('habbits', () => {
  const habbits = ref<IHabbit[]>(useLocalStorage('habbits', []).value)

  function addHabbits(habbit: { name: string; goalDays: number; icon: IconsType }) {
    const newHabbit: IHabbit = {
      id: Math.floor(Math.random() * 100000),
      name: habbit.name,
      days: [],
      goalDays: habbit.goalDays,
      icon: habbit.icon
    }

    habbits.value.push(newHabbit)
  }

  function deleteHabbit(habbitId: number) {
    const habbitIndex = habbits.value.findIndex((item) => item.id === habbitId)

    habbits.value.splice(habbitIndex, 1)
  }

  function addDays(dayText: string, habbitId: number) {
    const habbit = habbits.value.find((item) => item.id === habbitId)

    if (!habbit) {
      return
    }

    habbit.days.push({
      number: habbit.days.length + 1,
      text: dayText
    })
  }

  function deleteDay(habbitId: number, dayNumber: number) {
    const habbit = habbits.value.find((item) => item.id === habbitId)

    if (!habbit) {
      return
    }

    const dayIndex = habbit.days.findIndex((item) => item.number === dayNumber)

    habbit.days.splice(dayIndex, 1)
  }

  return {
    habbits,
    addHabbits,
    deleteHabbit,
    addDays,
    deleteDay
  }
})
