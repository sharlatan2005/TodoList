<template>
  <div class="todo-list-container">
    <ListContainer/>
  </div>
</template>

<script setup>
  import ListContainer from "@/components/ListContainer";
</script>

<style scoped>
  .todo-list-container {
    width: 35%;
    height: 75%;
    padding: 50px;
    border: 3px solid #d85fe3;
    border-radius: 50px;
    background-color: #f9e3fa;
  }
</style>