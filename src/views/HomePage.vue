<script setup></script>

<template>
  <main>
    <div class="absolute top-0 grid grid-cols-1 h-full w-full place-content-center">
      <div class="text-center font-['Poppins'] text-3xl p-2 w-100">Hi! Im,</div>
      <div class="text-center font-['Poppins'] text-7xl p-2 w-100">Elliot
        <div class="relative inline right-2 bg-red-500" :style="{opacity: cursorShown ? '1' : '0'}">&nbsp;</div>
      </div>
      <div class="text-center font-['Poppins'] text-2xl p-2 w-100">An Aspiring Web Developer</div>
    </div>
  </main>
</template>

<script>
export default {
  mounted: function () {
    this.timer = setInterval(() => {
      this.cursorShown = !this.cursorShown;
    }, 500)
  },

  data() {
    return {
      timer: null,
      cursorShown: true
    }
  },

  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>