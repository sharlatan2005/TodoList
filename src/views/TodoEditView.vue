<template>
  <div class="todo-edit">
    <input
    type="text"
    class="todo-edit__name-input"
    placeholder="Введите название задания"
    v-model="todoInfo.name">

    <textarea
    class="todo-edit__description-input"
    v-model="todoInfo.description"
    placeholder="Введите описание задания"
    >
    </textarea>

    <div class="todo-edit__buttons-wrapper">  <!-- TODO: В тестовом режиме потестить динамическое добавление класса right-aligned-->
      <ButtonItem
      :textContent="'Завершить'"
      :isActive="!isNewItem"
      :style="completeButtonStyle"
      @buttonClicked="processCompleteBtnClick"
      />
      <ButtonItem
      :textContent="'Сохранить'"
      :style="saveButtonStyle"
      @buttonClicked="processSaveBtnClick"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, onBeforeRouteUpdate  } from 'vue-router';

  let todoInfo = ref({});
  let isNewItem = ref(true);

  const route = useRoute();

  onMounted(() => {
    updateTodoInfoAndIsNewItem(route);
  });

  onBeforeRouteUpdate((to, from, next) => {
    updateTodoInfoAndIsNewItem(to);
    next();
  });

  function updateTodoInfoAndIsNewItem(route) {
    todoInfo.value = JSON.parse(route.query.todoInfo);
    isNewItem.value = JSON.parse(route.query.isNewItem);
  }

  import store from '@/store/store';
  import router from '@/router/router';

  import ButtonItem from "@/components/ButtonItem.vue";

  const saveButtonStyle = {
    backgroundColor: '#36f562',
    color: 'white',
    boxShadow: 'none',
  }
  
  function processSaveBtnClick() {

    const mutationType = isNewItem.value ? 'addTodoItem' : 'updateTodoItem';
    store.commit(mutationType, todoInfo.value);

    router.push('/todo_list');
  }

  const completeButtonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    boxShadow: 'none',
  }

  function processCompleteBtnClick() {

    store.commit('completeItem', todoInfo.value);

    router.push('/todo_list');
  }
</script>

<style scoped>
  .todo-edit {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  
  input, textarea { 
    padding: 5px;
    border: 1px solid grey;
    border-radius: 6px;
    font-size: 18px;
  }

  .todo-edit__name-input {
    height: 2em;
    width: 15em;
  }

  .todo-edit__description-input {
    height: 10em;
    width: 100%;
    resize: none;
  }

  .todo-edit__buttons-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

</style>