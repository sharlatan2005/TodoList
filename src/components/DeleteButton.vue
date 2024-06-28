<template>
  <img
  src="@/assets/icons/trash_bin.svg"
  class="delete-icon"
  @click="processBtnClick"
  >
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emits = defineEmits([
    'deleteButtonClicked'
  ])

  function processBtnClick(event) {
    event.stopPropagation();
    emits('deleteButtonClicked');
  }
</script>

<style scoped>
  .delete-icon {
    cursor: pointer;
    width: 1em;
    height: 1em;
  }
</style>