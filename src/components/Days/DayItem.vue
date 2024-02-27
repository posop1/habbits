<script setup lang="ts">
import { useHabbitsStore } from '@/store/habbits'
import type { IDay } from '@/types/habbits'

const props = defineProps<{ day: IDay; habbitId: number }>()
const store = useHabbitsStore()

const deleteDay = () => {
  store.deleteDay(props.habbitId, props.day.number)
}
</script>

<template>
  <div class="day">
    <div class="day__number">
      <p>День {{ props.day.number }}</p>
    </div>
    <div class="day__text">
      <p>{{ props.day.text }}</p>
    </div>
    <div class="delete__day__button">
      <button @click="deleteDay">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"
            stroke="#94A3BD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.day {
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 10px;
}

.day__number {
  background: #fbfaff;
  border-right: 1px solid #e7ebfb;
  padding: 20px 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  p {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
  }
}

.day__text {
  font-size: 16px;
  color: #23235f;
  font-weight: 500;
  padding: 10px 30px;
  width: 100%;
}

.delete__day__button {
  justify-self: flex-end;
  padding-right: 15px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .day {
    flex-direction: column;
    gap: 15px;
    border-radius: 15px;
  }

  .day__number {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e7ebfb;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .delete__day__button {
    width: 100%;
    text-align: center;
    padding: 10px;
    background: #fbfaff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    button {
      width: 100%;
    }
  }
}
</style>
