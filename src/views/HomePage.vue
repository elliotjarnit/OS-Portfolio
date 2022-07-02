<script setup></script>

<template>
  <main>
    <div class="full-container">
      <div class="title-text">
        Hi! My name is, <br />
        Elliot:~$
        <div
          class="terminal-cursor"
          :style="{ opacity: cursorShown ? '1' : '0' }"
        >
          &nbsp;
        </div>
        <br /><br />
        This website is currently a work in progress...
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted: function () {
    this.timer = setInterval(() => {
      this.cursorShown = !this.cursorShown;
    }, 500);
  },

  data() {
    return {
      timer: null,
      cursorShown: true,
    };
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
