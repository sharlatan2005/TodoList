<template>
  <div class="global-container">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Tiny5", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .global-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cca7ac;
  }
</style>