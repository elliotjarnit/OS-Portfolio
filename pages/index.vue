<template>
  <div class="page">
    <div class="splash">
      <div class="loginpage">
        <img class="pfp" src="~/assets/pfp.jpeg" alt="profile picture" />
        <p>Elliot Jarnit</p>
        <spinner v-if="loading" :size="15" />
        <input v-else placeholder='Enter Password' :value="passwordfieldval" class="passwordfield" @keydown.prevent="void(0)" />
      </div>
    </div>
    <img src='~/assets/cursor.png' alt="cursor" class="cursor" />
    <div id="main" style="display: none; opacity: 0;" @click="makeAllIconsNotActive">
      <div id="desktop-env">
        <div id="icons">
          <DesktopIcon icon="/folder.webp" display="Projects" ref="projects">
            <Window title="Projects" :win-size="{width: 600, height: 350}" :win-pos="{x: 100, y: 100}" @close="$refs.projects.closeWindow()">
              <template v-slot:window>
                <div class="finder-window">
                  <div class="sidebar blur">

                  </div>
                  <div class="folder-content">

                  </div>
                </div>
              </template>
            </Window>
          </DesktopIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    makeAllIconsNotActive(e) {
      if (e.target.id !== "main") return;

      const icons = document.querySelector('#icons');
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

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://4kwallpapers.com/images/wallpapers/macos-13-macos-ventura-macos-2022-stock-light-5k-retina-1920x1080-8135.jpg");
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

.finder-window {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sidebar {
    height: 100%;
    width: 7.5em;
  }

  .folder-content {
    width: calc(100% - 7.5em);
    height: 100%;
    background-color: rgb(37, 37, 39);
  }
}

.blur {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(35, 39, 52, 0.72);
  overflow-y: auto;
  box-shadow: 0px 25.6px 57.6px rgb(0 0 0 / 14%), 0px 0px 16.4px rgb(0 0 0 / 12%);
}
</style>
