<template>
  <div class="banner">
    <span>This website is still heavily under construction and is far from finished</span>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

.banner {
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.banner span {
  margin: 0 5px;
}
</style>
