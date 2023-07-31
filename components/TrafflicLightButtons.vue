<template>
  <div class="titlebar-btns">
    <div class="titlebar-btn close" @click="$emit('close')" />
    <div class="titlebar-btn minimize" @click="$emit('minimize')" ></div>
    <div class="titlebar-btn maximize" @click="$emit('maximize')" ></div>
  </div>
</template>

<script>
export default {
  name: "TrafflicLightButtons",
  emits: ["close", "minimize", "maximize"],
};
</script>

<style lang="scss" scoped>
.titlebar-btns {
  display: flex;
  align-items: center;
  .titlebar-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #333333;
    }
    &.close {
      background-color: #ff5f57;
    }
    &.minimize {
      background-color: #ffbd2e;
    }
    &.maximize {
      background-color: #28c940;
    }
  }
}
</style>
