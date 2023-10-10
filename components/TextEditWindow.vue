<template>
  <Window
    title="TextEdit"
    :win-size="{ width: 750, height: 400 }"
    :win-pos="{ x: 450, y: 600 }"
  >
    <template v-slot:window>
      <div></div>
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

</style>
