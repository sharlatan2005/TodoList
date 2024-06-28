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
  let isNewItem = true;

  onMounted(() => {
    const route = useRoute();

    console.log(route.query);

    todoInfo.value = JSON.parse(route.query.todoInfo);
    isNewItem = JSON.parse(route.query.isNewItem);
  })

  // onBeforeRouteUpdate ((to, from, next) => {
  //   console.log('route updated');
  //   todoInfo.value = JSON.parse(to.query.todoInfo);
  //   isNewItem = JSON.parse(to.query.isNewItem);
    
  //   next();
  // })
  
  import ButtonItem from "@/components/ButtonItem.vue";

  const saveButtonStyle = {
    backgroundColor: '#36f562',
    color: 'white',
    boxShadow: 'none',
  }

  import store from '@/store/store';
  import router from '@/router/router';

  function processSaveBtnClick() {

    const mutationType = isNewItem ? 'addTodoItem' : 'updateTodoItem';
    store.commit(mutationType, todoInfo.value);

    router.push('/');
  }
</script>

<style scoped>
  .todo-edit {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    font-size: 18px;
  }
  
  input, textarea { 
    padding: 5px;
    border: 1px solid grey;
    border-radius: 6px;
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
    justify-content: end;
    width: 100%;
  }

</style>