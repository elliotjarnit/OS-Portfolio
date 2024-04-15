<script setup lang="ts">

</script>

<template>
  <div class="under-construction">
    <div class="under-construction__content">
      <h1>Under Construction</h1>
      <p>Website is still being built 🚧</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.under-construction {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;

  .under-construction__content {
    text-align: center;
    font-weight: 600;
    color: #333;

    h1 {
      font-size: 2.5rem;
      margin: 0 0 10px;
    }

    p {
      font-size: 1.5rem;
      margin: 0;
    }
  }
}
</style>
