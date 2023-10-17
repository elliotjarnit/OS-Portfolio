<template>
  <Window
    title="TextEdit"
    :win-size="{ width: 500, height: 400 }"
    :win-pos="{ x: 450, y: 600 }"
    tl-margin="7px"
  >
    <template v-slot:titlebar>

    </template>
    <template v-slot:window>
      <div class="text-edit-window">
        <div class="topbar">
          <div class="info">
            <img src="~/assets/file.png" alt="file" />
            <span>{{ file ?? 'Unknown' }}</span>
          </div>
          <div class="format-options">
            <select disabled>
              <option>Helvetica</option>
              <option>JJJJJJJJJJJJJ</option>
            </select>
            <select disabled>
              <option>Regular</option>
              <option>JJJJJJJJJJJJJ</option>
            </select>
            <select disabled>
              <option>12</option>
              <option>14</option>
            </select>
          </div>
        </div>
        <div class="editor">

        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextEditWindow",
  props: {
    file: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.text-edit-window {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(30, 30, 30);

  .topbar {
    width: 100%;
    background-color: rgb(57, 56, 55);
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      height: 12px;
      width: 100%;
      img {
        width: 1.35rem;
        height: 1.35rem;
        margin-right: 0.5rem;
      }
      span {
        margin-left: -5px;
        margin-top: -3px;
        font-size: 0.9rem;
        font-weight: 550;
        color: rgb(180, 180, 178);
      }
    }

    .format-options {
      padding-left: 0.5rem;
      height: 27px;

      select {
        background-color: rgb(57, 56, 55);
        color: rgb(183, 183, 182);
        border-radius: 3px;
        padding: 0.1rem;
        font-size: 0.7rem;
        opacity: 1;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
