<template>
  <img
  src="@/assets/icons/trash_bin.svg"
  class="delete-icon"
  @click="$emit('deleteButtonClicked')"
  >
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emits = defineEmits([
    'deleteButtonClicked'
  ])
</script>

<style scoped>
  .delete-icon {
    cursor: pointer;
    width: 1em;
    height: 1em;
  }
</style>