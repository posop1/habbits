<script setup lang="ts">
import { ref } from 'vue'
import { useHabbitsStore } from '@/store/habbits'
import HabbitIcons from '@/components/Icons/HabbitIcons.vue'
import { IconsType } from '@/types/common'
import UiButton from '@/components/Ui/UiButton.vue'

const props = defineProps<{ showModal: boolean }>()
const emits = defineEmits(['closeModal'])
const store = useHabbitsStore()

const habbitName = ref<string>('')
const goalDays = ref<number>()
const selectedIcon = ref<IconsType>()

const isError = ref<string>()

const closeModal = () => {
  emits('closeModal')
}

const addHabbit = () => {
  isError.value = ''

  if (!habbitName.value || !goalDays.value || !selectedIcon.value) {
    isError.value = 'Неверно заполнены поля'
    return
  }

  store.addHabbits({
    name: habbitName.value,
    goalDays: goalDays.value,
    icon: selectedIcon.value
  })

  habbitName.value = ''
  goalDays.value = undefined
  selectedIcon.value = undefined

  closeModal()
}
</script>

<template>
  <transition name="modal">
    <div class="modal-mask" v-if="props.showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button @click="closeModal" class="close__button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5L4.99998 19M5 5L19 19"
                stroke="#5051F9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <h2 class="modal__title">Новая привычка</h2>
          <p class="icons__title">Иконка</p>
          <div class="icons__container">
            <label
              :class="
                selectedIcon === IconsType.first ? 'checked__radio__wrapper' : 'radio__wrapper'
              "
            >
              <HabbitIcons :type="IconsType.first" />
              <input
                type="radio"
                name="icon"
                v-model="selectedIcon"
                class="radio"
                :value="IconsType.first"
              />
            </label>
            <label
              :class="
                selectedIcon === IconsType.second ? 'checked__radio__wrapper' : 'radio__wrapper'
              "
            >
              <HabbitIcons :type="IconsType.second" />
              <input
                type="radio"
                name="icon"
                v-model="selectedIcon"
                class="radio"
                :value="IconsType.second"
              />
            </label>
            <label
              :class="
                selectedIcon === IconsType.third ? 'checked__radio__wrapper' : 'radio__wrapper'
              "
            >
              <HabbitIcons :type="IconsType.third" />
              <input
                type="radio"
                name="icon"
                v-model="selectedIcon"
                class="radio"
                :value="IconsType.third"
              />
            </label>
          </div>
          <input type="text" v-model="habbitName" placeholder="Название" class="modal__input" />
          <input type="number" v-model="goalDays" placeholder="Цель в днях" class="modal__input" />
          <div class="error__box" v-if="isError">
            <p>{{ isError }}</p>
          </div>
          <UiButton @click="addHabbit">Добавить</UiButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.error__box {
  font-size: 14px;
  background: rgb(235, 80, 80);
  color: white;
  padding: 10px;
  border-radius: 14px;
  margin: 6px 0px;
}
.icons__title {
  color: #768396;
  font-size: 14px;
  font-weight: 500;
}

.icons__container {
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  gap: 25px;

  .radio__wrapper {
    cursor: pointer;
    display: block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #5051f9;
    border-radius: 15px;
    padding: 10px;

    &:hover {
      background: #5051f9;
      transition: 0.1s ease-in-out;

      svg path {
        stroke: #fff;
        background: #5051f9;
        transition: 0.1s ease-in-out;
      }
    }

    .radio {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }

  .checked__radio__wrapper {
    cursor: pointer;
    display: block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #5051f9;
    border-radius: 15px;
    padding: 10px;
    background: #5051f9;

    svg path {
      stroke: #fff;
      background: #5051f9;
      transition: 0.1s ease-in-out;
    }

    .radio {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
}

.close__button {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}

.modal__title {
  font-size: 24px;
  line-height: 26px;
  font-weight: 400;
  margin-bottom: 20px;
}

.modal__input {
  border: 1px solid #e7ebfb;
  padding: 10px 20px;
  width: 100%;
  margin-bottom: 6px;
  border-radius: 10px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000040;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  max-width: 430px;
  margin: 0px auto;
  padding: 22px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 8px 14px 12px #3838380d;
  border-radius: 10px;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
@/store/habbits
