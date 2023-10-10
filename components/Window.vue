<template>
  <div class="window hidden" :id="'win-' + id" :style="{top: winY + 'px', left: winX + 'px'}" @mousedown="focusWindow">
    <div class="header">
      <div class="titlebar" @mousedown.prevent="dragWindowStart">
        <slot name="titlebar">
          <TrafflicLightButtons class="tlb" @close="closeSelf" @maximize="maximizeSelf" @minimize="closeSelf" />
<!--          <div class="titlebar-title">-->
<!--            <p>{{ title }}</p>-->
<!--          </div>-->
        </slot>
      </div>
    </div>
    <slot name="window">
      <div class="content">
        <slot />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Window",
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
      windowOrder: useState('windowOrder', () => []),
      winX: this.winPos.x,
      winY: this.winPos.y,
      curX: 0,
      curY: 0,
      prevX: 0,
      prevY: 0,
      winSizeX: this.winSize.width + 'px',
      winSizeY: this.winSize.height + 'px',
      beforeMax: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      draggable: true,
      id: Math.random().toString(36).substr(2, 9)
    };
  },
  methods: {
    // Run on mousedown
    dragWindowStart(e) {
      if (!this.draggable) return;
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
    },
    closeSelf() {
      this.$el.classList.add('hidden')
      this.windowOrder = this.windowOrder.filter(e => e !== this.$el.id)
    },
    maximizeSelf() {
      if (this.winSizeX === '100%' && this.winSizeY === '100%') {
        this.winSizeX = this.beforeMax.width + 'px'
        this.winSizeY = this.beforeMax.height + 'px'
        this.winX = this.beforeMax.x
        this.winY = this.beforeMax.y
        this.draggable = true
      } else {
        this.beforeMax.x = this.winX
        this.beforeMax.y = this.winY
        this.beforeMax.width = this.winSize.width
        this.beforeMax.height = this.winSize.height
        this.winSizeX = '100%'
        this.winSizeY = '100%'
        this.winX = 0
        this.winY = 0
        this.draggable = false
      }
    },
    focusWindow() {
      if (this.$el.classList.contains('hidden')) return;
      // Move id in windowOrder to the end
      this.windowOrder = this.windowOrder.filter(e => e !== this.$el.id)
      this.windowOrder.push(this.$el.id)
    }
  }
};
</script>

<style scoped>
.hidden {
  opacity: 0;
  top: -1000px !important;
  left: -1000px !important;
}

.window {
  position: absolute;
  width: v-bind(winSizeX);
  height: v-bind(winSizeY);
  border-radius: 7px;
  box-shadow: 0 0 0.5em #000000;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
  overflow: hidden;
  .header {
    position: absolute;
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    padding: 0 2px;
    z-index: 100;
    .titlebar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .tlb {
        padding: 10px;
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
    height: calc(100% - 40px);
    background-color: #000000;
    overflow: auto;
    color: white;
    box-sizing: border-box;
  }
}
</style>
