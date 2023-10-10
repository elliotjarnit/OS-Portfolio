<template>
  <Window title="Projects" :win-size="{width: 750, height: 400}" :win-pos="{x: 100, y: 100}">
    <template v-slot:window>
      <div class="finder-window">
        <div class="sidebar blur">
          <div class="sidebar-section">
            <span class="sidebar-section-title">Favorites</span>
            <div class="sidebar-section-content">
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/airdrop.svg" alt="folder" />
                </div>
                <span>AirDrop</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/clock.svg" alt="folder" />
                </div>
                <span>Recents</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/applications.svg" alt="folder" />
                </div>
                <span>Applications</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/download.svg" alt="folder" />
                </div>
                <span>Downloads</span>
              </div>
            </div>
          </div>
          <div class="sidebar-section">
            <span class="sidebar-section-title">iCloud</span>
            <div class="sidebar-section-content">
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/shared.svg" alt="folder" />
                </div>
                <span>Shared</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/icloud.svg" alt="folder" />
                </div>
                <span>iCloud Drive</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/desktop.svg" alt="folder" />
                </div>
                <span>Desktop</span>
              </div>
              <div class="sidebar-item">
                <div class="icon">
                  <object data="/svgs/doc.svg" alt="folder" />
                </div>
                <span>Documents</span>
              </div>
            </div>
          </div>
        </div>
        <div class="window-content">
          <div class="topbar">
            <div class="left">
              <div class="nav-buttons">
                <object data="/svgs/arrow-left.svg" alt="back" />
                <object data="/svgs/arrow-right.svg" alt="forward" />
              </div>
              <div class="folder-name">
                <span>Projects</span>
              </div>
            </div>
            <div class="right">
              <div class="view">
                <object data="/svgs/grid.svg" alt="grid" />
                <object data="/svgs/arrow-up-down.svg" class="down-arrow" />
              </div>
              <div class="sort">
                <object data="/svgs/sort.svg" alt="sort" />
                <object data="/svgs/arrow-down.svg" class="down-arrow" />
              </div>
              <div class="share">
                <object data="/svgs/share.svg" alt="share" />
              </div>
              <div class="tag">
                <object data="/svgs/tag.svg" alt="tag" />
              </div>
              <div class="more">
                <object data="/svgs/more.svg" alt="more" />
                <object data="/svgs/arrow-down.svg" class="down-arrow" />
              </div>
              <div class="search">
                <object data="/svgs/search.svg" alt="search" />
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FinderWindow"
});
</script>

<style scoped lang="scss">
.finder-window {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sidebar {
    height: 100%;
    width: 10em;
    padding-top: 2.5em;

    .sidebar-section {
      width: 100%;
      padding-left: 0.5em;

      &:not(:first-child) {
        padding-top: 1.1em;
      }

      .sidebar-section-title {
        color: rgb(132, 134, 144);
        font-size: 0.8em;
        font-weight: 500;
        padding-left: 0.2em;
      }

      .sidebar-section-content {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        margin-left: 0.1em;
        margin-top: 0.2em;
        .sidebar-item {
          padding: 1px 1px;
          .icon {
            display: inline-flex;
            justify-content: center;
            width: 20px;
            object {
              width: auto;
              height: 13px;
              color: rgb(37, 143, 255) !important;
              position: relative;
              top: 3px;
            }
          }

          span {
            font-size: 0.9em;
            position: absolute;
            left: 36px;
            padding-top: 3px;
          }
        }
      }
    }
  }

  .window-content {
    width: calc(100% - 7.5em);
    height: 100%;
    background-color: rgb(37, 37, 39);

    .topbar {
      display: flex;
      justify-content: space-between;
      padding: 0.8em 1.3em;

      .left, .right {
        display: flex;
      }

      .left {
        color: white;
        font-weight: 500;
        font-size: 1em;
        gap: 1.35em;

        .nav-buttons {
          display: flex;
          gap: 2em;

          object {
            width: 8px;
            height: auto;
          }
        }
      }

      .right {
        gap: 1.35em;

        div {
          display: flex;
          align-items: center;
          gap: 0.5em;
        }

        .down-arrow {
          height: auto !important;
          width: 7px !important;
        }

        .view {
          object {
            height: 15px;
            width: auto;
          }
          margin-right: 2.3em;
        }

        .sort {
          object {
            height: 17px;
            width: auto;
          }
          margin-right: 0.3em;
        }

        .share {
          object {
            margin-top: -2px;
            height: 20px;
            width: auto;
          }
          margin-right: 0.25em;
        }

        .tag {
          object {
            height: 18px;
            width: auto;
          }
        }

        .more {
          object {
            width: 17px;
            height: auto;
          }
          margin-right: 1.4em;
        }

        .search {
          object {
            width: 15px;
            height: auto;
          }
        }
      }
    }
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
