<template>
  <div class="icon-win-cont">
    <div class="desktop-icon" ref="icon" @dblclick="openWindow" @click="makeActive">
      <p class="icon-display">{{ display }}</p>
    </div>
    <div class="window hidden">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopIcon",
  emits: [
    'madeActive',
  ],
  props: {
    icon: {
      type: String,
      required: true
    },
    display: {
      type: String,
      required: true
    },
    position: {
      type: Object,
      required: true,
      default: () => {
        return {
          x: 0,
          y: 0
        }
      }
    }
  },
  data() {
    return {
      iconURL: `url(${this.icon})`,
      positionX: '0px',
      positionY: '0px',
      id: null,
      windowOrder: useState('windowOrder', () => []),
    }
  },
  mounted() {
    this.positionX = `${this.position.x}px`
    this.positionY = `${this.position.y}px`

    // Add window to window container
    const winCont = document.querySelector('#window-cont')
    let children = this.$el.querySelector('.window').children
    for (let i = 0; i < children.length; i++) {
      if (children[i].id) {
        this.id = children[i].id
      }

      winCont.appendChild(children[i])
    }
  },
  methods: {
    openWindow() {
      let win = document.querySelector('#' + this.id)
      win.classList.remove('hidden')

      this.windowOrder.push(this.id)
    },
    closeWindow() {
      let win = document.querySelector('#' + this.id)
      win.classList.add('hidden')

      this.windowOrder.splice(this.windowOrder.indexOf(this.id), 1)
    },
    makeActive() {
      this.$emit('madeActive')
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
    max-width: 120px;
    text-align: center;

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
    object-fit: contain;
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

.icon-win-cont {
  position: absolute;
  max-width: 120px;
  max-height: 7.5rem;
  transform: translate(v-bind(positionX), v-bind(positionY));
}

.window {
  display: none;
}
</style>
