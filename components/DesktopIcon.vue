<template>
  <div class="desktop-icon" @dblclick="openWindow">
    <p>{{ display }}</p>
  </div>
  <div class="window-cont" :class="{hidden: !winOpen}">
    <slot />
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
  cursor: pointer;
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;

  p {
    color: white;
    text-shadow: 0 0 0.3em #000000;
    font-size: 1em;
    margin: 0 0 0.5em 0;
  }

  &:before {
    background-image: v-bind(iconURL);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    display: block;
    content: "";
    width: 4rem;
    height: 4rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    filter: drop-shadow(0 0 0.5em #ffffff);
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
