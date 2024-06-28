<template>
  <div class="todo-list-container__completed-list-container">
    <CompletedListItem
    v-for="completedItem in completedList"
    :completedInfo="completedItem"
    :completionDate="new Date()"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  import CompletedListItem from "@/components/CompletedListItem";

  const store = useStore();

  const completedList = computed(() => store.state.completedList);
</script>

<style scoped>
  .todo-list-container__completed-list-container {
    display: flex;
    flex-direction: column;  
    align-items: center;
    overflow-y: auto;
  }

  .todo-list-container__completed-list-container > * {
    margin-bottom: 10px;
  }
</style>