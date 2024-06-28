<template>
  <div class="todo-list-container__list-container">
    <ListItem
    v-for="todoItem in todoList"
    :todoInfo="todoItem"
    @deleteTask="processDeleteTodoItem"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  import ListItem from '@/components/ListItem';

  const store = useStore();

  const todoList = computed(() => store.state.todoList);
  
  function processDeleteTodoItem(itemId) {
    store.commit('deleteTodoItem', itemId);
  }
</script>

<style scoped>
  .todo-list-container__list-container {
    display: flex;
    flex-direction: column;  
    align-items: center;
  }

  .todo-list-container__list-container > * {
    margin-bottom: 10px;
  }

</style>