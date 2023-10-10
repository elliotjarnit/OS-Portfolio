<template>
  <Window
    title="TextEdit"
    :win-size="{ width: 500, height: 400 }"
    :win-pos="{ x: 450, y: 600 }"
  >
    <template v-slot:window>
      <div class="text-edit-window">

      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextEditWindow"
});
</script>

<style scoped lang="scss">
.text-edit-window {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(30, 30, 30);
}
</style>
