<template>
  <div class="window" :style="{top: winY + 'px', left: winX + 'px'}">
    <div class="header">
      <div class="titlebar" @mousedown.prevent="dragWindowStart">
        <slot name="titlebar">
          <div class="titlebar-btns">
            <div class="titlebar-btn close" @click="$emit('close')" />
            <div class="titlebar-btn minimize"></div>
            <div class="titlebar-btn maximize"></div>
          </div>
          <div class="titlebar-title">
            <p>{{ title }}</p>
          </div>
        </slot>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Window",
  emits: ["close"],
  props: {
    title: {
      type: String,
      required: true
    },
    winSize: {
      type: Object,
      default: () => {
        return { width: 500, height: 500 };
      }
    },
    winPos: {
      type: Object,
      default: () => {
        return { x: 0, y: 0 };
      }
    }
  },
  data() {
    return {
      winX: this.winPos.x,
      winY: this.winPos.y,
      curX: 0,
      curY: 0,
      prevX: 0,
      prevY: 0,
      winSizeX: this.winSize.width + 'px',
      winSizeY: this.winSize.height + 'px'
    };
  },
  methods: {
    // Run on mousedown
    dragWindowStart(e) {
      this.prevX = e.clientX;
      this.prevY = e.clientY;

      document.onmouseup = this.stopDragWindow;
      document.onmousemove = this.dragWindow;
    },
    stopDragWindow() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    dragWindow(e) {
      e.preventDefault()
      this.curX = this.prevX - e.clientX;
      this.curY = this.prevY - e.clientY;
      this.prevX = e.clientX;
      this.prevY = e.clientY;
      this.winX -= this.curX;
      this.winY -= this.curY;
    }
  }
};
</script>

<style scoped>
.window {
  position: absolute;
  width: v-bind(winSizeX);
  height: v-bind(winSizeY);
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 7px;
  box-shadow: 0 0 0.5em #000000;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
  overflow: hidden;
  z-index: 100;
  .header {
    width: 100%;
    height: 23px;
    background-color: #000000;
    border-bottom: 1px solid #000000;
    border-radius: 5px 5px 0 0;
    padding: 0 2px;
    .titlebar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
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
      .titlebar-title {
        p {
          color: white;
          text-shadow: 0 0 0.3em #000000;
          font-size: 1em;
          margin: 0;
        }
      }
    }
  }

  .content {
    width: 100%;
    height: calc(100% - 23px);
    background-color: #000000;
    border-radius: 0 0 5px 5px;
    padding: 1em;
    overflow: auto;
    color: white;
    box-sizing: border-box;
  }
}
</style>
