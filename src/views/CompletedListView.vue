<template>
  <div class="todo-list-container__completed-list-container">
    <CompletedListItem
    v-for="completedItem in completed"
    :completedInfo="completedItem"
    :completionDate="new Date()"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import CompletedListItem from "@/components/CompletedListItem";

  const completed = ref([
    {
      id: 1,
      name: 'Постирать трусы',
      description: 'Постирать трусы',
      completedDate: '21.01.2001'
    },
    {
      id: 2,
      name: 'Постирать трусы',
      description: 'Постирать трусы',
      completedDate: '21.01.2001'
    },
    {
      id: 3,
      name: 'Постирать трусы',
      description: 'Постирать трусы',
      completedDate: '21.01.2001'
    }
  ])
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