<template>
  <div class="todo-edit">
    <div class="input-container">
      <input
      type="text"
      class="input-container__name-input"
      placeholder="Введите название задания"
      v-model="todoInfo.name">

      <textarea
      class="input-container__description-input"
      v-model="todoInfo.description"
      placeholder="Введите описание задания"
      >
      </textarea>

      <select
      class="input_container__priority-input"
      v-model="todoInfo.priority"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>


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
    updateData(route);
  });

  onBeforeRouteUpdate((to, from, next) => {
    updateData(to);
    next();
  });

  function updateData(route) {
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

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .input-container > * {
    padding: 5px;
    border: 2px solid black;
    border-radius: 6px;
    font-size: 18px;
  }

  .input-container__name-input {
    height: 2em;
    width: 15em;
  }

  .input-container__description-input {
    height: 10em;
    width: 100%;
    resize: none;
  }

  .input_container__priority-input {
    width: 3em; 
  }

  .todo-edit__buttons-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

</style>