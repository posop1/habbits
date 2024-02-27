<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
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

  &:disabled {
    cursor: default;

    &:hover {
      background: #edecfe;
      color: #5051f9;
    }
  }
}
</style>
