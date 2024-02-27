<script setup lang="ts">
import type { IHabbit } from '@/types/habbits'
import HabbitIcons from '../Icons/HabbitIcons.vue'

const props = defineProps<{ habbits: IHabbit[] }>()
</script>

<template>
  <div class="habbits__container">
    <RouterLink
      :to="`${habbit.id}`"
      class="habbit__box"
      v-for="habbit in props.habbits"
      :key="habbit.id"
    >
      <HabbitIcons :type="habbit.icon" />
      <h4>
        {{ habbit.name }}
      </h4>
    </RouterLink>
  </div>
</template>

<style lang="scss">
.habbits__container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}

.habbit__box {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border-radius: 14px;
  box-shadow: 0px 8px 14px 0px #3e6be01f;
  transition: 0.1s ease-in-out;

  &:hover {
    color: white;
    background: #5051f9;

    svg path {
      stroke: #fff;
      background: #5051f9;
      transition: 0.1s ease-in-out;
    }
  }
}
</style>
