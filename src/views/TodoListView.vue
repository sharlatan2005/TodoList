<template>
  <div class="todo-list-container__list-container">
    <ListItem
    v-for="todoItem in todoList"
    :todoInfo="todoItem"
    @deleteTask="processDeleteTask"
    />
  </div>
</template>

<script setup>
  import ListItem from '@/components/ListItem';
  import { ref } from 'vue';

  const todoList = ref([
    {
      id: 1,
      name: 'Почитать книгу',
      description: 'Почитать книгу'
    },
    {
      id: 2,
      name: 'Погладить кота',
      description: 'Почитать книгу'
    },
    {
      id: 3,
      name: 'Сделать проект П.',
      description: 'Почитать книгу'
    },
    {
      id: 4,
      name: 'Пописить',
      description: 'Почитать книгу'
    }
  ]);
  
  function processDeleteTask(taskId) {
    console.log(`АЙДИ ЗАДАНИЯ ДЛЯ УДАЛЕНИЯ - ${taskId}`);
    todoList.value = todoList.value.filter(task => task.id != taskId);
  }
</script>

<style scoped>
  .todo-list-container__list-container {
    display: flex;
    flex-direction: column;  
    align-items: center;
    overflow-y: auto;
  }

  .todo-list-container__list-container > * {
    margin-bottom: 10px;
  }

</style>