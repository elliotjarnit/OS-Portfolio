<template>
  <div class="icon-win-cont">
    <div class="desktop-icon" ref="icon" @dblclick="openWindow" @click="makeActive">
      <p class="icon-display">{{ display }}</p>
    </div>
    <div class="window-cont" :class="{hidden: !winOpen}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    display: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconURL: `url(${this.icon})`,
      winOpen: false
    }
  },
  methods: {
    openWindow() {
      this.winOpen = true
    },
    closeWindow() {
      this.winOpen = false
    },
    makeActive() {
      this.$refs.icon.classList.add('active')
      this.$refs.icon.firstChild.classList.add('active')
    },
    makeNotActive() {
      this.$refs.icon.classList.remove('active')
      this.$refs.icon.firstChild.classList.remove('active')
    }
  }
};
</script>

<style lang="scss" scoped>
.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;

  p {
    color: white;
    text-shadow: 0 0 0.3em #000000;
    font-size: 0.9em;
    margin: 0 0 0.5em 0;
    padding: 2px;

    &.active {
      background: rgb(36, 88, 201);
      border-radius: 3px;
    }
  }

  &:before {
    background-image: v-bind(iconURL);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    display: block;
    content: "";
    width: 4.5rem;
    height: 4.5rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 3px;
  }

  &.active:before {
    backdrop-filter: brightness(0.65);
    -webkit-backdrop-filter: brightness(0.65);
    border-radius: 3px;
  }
}

.window-cont {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hidden {
  display: none;
}
</style>
