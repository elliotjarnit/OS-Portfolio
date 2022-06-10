<script setup>
</script>

<template>
  <main>
    <div class="absolute top-0 h-full">
      <div
        class="relative h-[100] w-[300] font-['Ubuntu Mono'] text-white text-3xl p-2 w-100 tracking-wide"
      >
        Hi! my name is, <br />
        Elliot
        <div
          class="relative inline right-2 bg-red-500"
          :style="{ opacity: cursorShown ? '1' : '0' }"
        >
          &nbsp;
        </div>
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