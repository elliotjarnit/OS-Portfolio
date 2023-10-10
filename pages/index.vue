<template>
  <div class="page">
    <div id="window-cont" ref="window-cont"></div>
    <div class="splash">
      <div class="loginpage">
        <img class="pfp" src="~/assets/pfp.jpeg" alt="profile picture" />
        <p>Elliot Jarnit</p>
        <spinner v-if="loading" :size="15" />
        <input v-else placeholder='Enter Password' :value="passwordfieldval" class="passwordfield" @keydown.prevent="void(0)" />
      </div>
    </div>
    <img src='~/assets/cursor.png' alt="cursor" class="cursor" />
    <div id="main" style="opacity: 0;" @click="makeAllIconsNotActive">
      <div id="desktop-env">
        <div id="icons">
          <DesktopIcon icon="/folder.webp" display="Projects" ref="projects" rel="preload">
            <FinderWindow>
              <div id="folder-content" @click="makeAllIconsNotActive($event, 'folder-content')">
                <DesktopIcon
                  icon="/cider.png"
                  display="Cider"
                  ref="project-cider"
                  :position="{x: 14, y: 13}"
                  rel="preload"
                  @madeActive="makeAllIconsNotActive($event, 'folder-content', true)">
                </DesktopIcon>
                <DesktopIcon
                  icon="/poster.png"
                  display="Album Poster Generator"
                  ref="project-postergen"
                  rel="preload"
                  :position="{x: 356, y: 78}"
                  @madeActive="makeAllIconsNotActive($event, 'folder-content', true)">
                </DesktopIcon>
                <DesktopIcon
                  icon="/elliotengine.png"
                  display="Elliot Engine"
                  ref="project-elliotengine"
                  rel="preload"
                  :position="{x: 123, y: 194}"
                  @madeActive="makeAllIconsNotActive($event, 'folder-content', true)">
                </DesktopIcon>
              </div>
            </FinderWindow>
          </DesktopIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FinderWindow from "~/components/FinderWindow.vue";

export default {
  components: { FinderWindow },
  data() {
    return {
      passwordfieldval: "",
      loading: false
    }
  },
  mounted() {
    // If dev
    if (process.env.NODE_ENV === "development") {
      const cursor = document.querySelector('.cursor');
      const splash = document.querySelector('.splash');
      const main = document.querySelector('#main');
      cursor.style.display = "none"
      splash.style.display = "none"
      main.style.display = "flex"
      main.style.opacity = "1"
    } else {
      this.runAnimation()
    }
  },
  methods: {
    runAnimation() {
      const cursor = document.querySelector('.cursor');
      const passwordfield = document.querySelector('.passwordfield');
      const splash = document.querySelector('.splash');
      const main = document.querySelector('#main');

      // Wait 1 second
      setTimeout(() => {
        // Move cursor to the password field
        cursor.style.transform = "translate(-50px, 135px)"
        setTimeout(async () => {
          // Move cursor to the password field
          passwordfield.focus()
          await new Promise(resolve => setTimeout(resolve, 950));
          let count = 0
          while (count < 15) {
            await new Promise(r => setTimeout(r, Math.trunc(Math.random() * 350)));
            this.passwordfieldval += "*"
            count++
          }
          await new Promise(resolve => setTimeout(resolve, 900));
          cursor.style.transition = "transform 1.5s linear, opacity 2s"
          // Move cursor to the login button
          cursor.style.transform = "translate(73px, 139px)"
          await new Promise(resolve => setTimeout(resolve, 2000));
          this.loading = true;
          await new Promise(resolve => setTimeout(resolve, 3000));
          cursor.style.display = "none"
          splash.style.display = "none"
          main.style.display = "flex"
          main.style.opacity = "1"
        }, 3000);
      }, 1000);
    },
    makeAllIconsNotActive(e, container = 'icons', ignoreTarget = false) {
      if (!ignoreTarget) {
        if (e.target !== e.currentTarget) return;
      }

      const icons = document.querySelector(`#${container}`)
      for (let i = 0; i < icons.children.length; i++) {
        icons.children[i].querySelector(".desktop-icon").classList.remove("active")
        icons.children[i].querySelector(".icon-display").classList.remove("active")
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

#window-cont {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'SF Pro Display', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

#main {
  transition: opacity 1s;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}

.cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
  object-fit: contain;
  transform: translate(-50vw, calc(50vh + 30px));
  transition: transform 2.5s linear, opacity 2s;
}

.splash {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginpage {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pfp {
      border-radius: 50%;
      width: 175px;
      height: 175px;
      margin-bottom: 0.4em;
    }

    p {
      color: white;
      text-shadow: 0 0 0.3em #000000;
      font-size: 1.25em;
      margin-bottom: 0.5em;
    }

    .passwordfield {
      color: black;
      opacity: 0.9;
      border-radius: 15px;
      outline: none;
      border: none;
      height: 15px;
      width: 139px;
      padding: 0.3em 13px;
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 25.6px 57.6px rgb(0 0 0 / 14%), 0px 0px 16.4px rgb(0 0 0 / 12%);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      margin-top: 22px;
    }

    .passwordfield:not(:placeholder-shown) {
      background-image: url("~/assets/arrow-icon.png");
      background-size: 17px;
      background-repeat: no-repeat;
      background-position: 141px 3px;
      vertical-align: middle;
    }
  }
}

#folder-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
