<template>
  <div class="todo-list-container">
    <div class="todo-list-container__button-container">
      <ButtonItem
      v-for="buttonName in buttonNames"
      :textContent="buttonName"
      @buttonClicked="processBtnClick"
      />
    </div>
    <div class="view-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  import ButtonItem from '@/components/ButtonItem';

  const buttonNames = ref(
    [
      'Список',
      'Завершенные',
      'Создать',
    ]
  );

  const router = useRouter();

  function processBtnClick(btnName) {
    switch(btnName) {
      case('Список'):
        router.push('/todo_list');
        break;
      case('Завершенные'):
        router.push('/completed_list');
        break;
      case('Создать'):
        router.push('todo_edit');
        break;
    }
  }

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
  
  .todo-list-container__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
  }

  .todo-list-container__button-container > * {
    margin-right: 10px;
  }


  .view-wrapper {
    border: 3px dashed red;
    border-radius: 15px;
    padding: 1em;
    height: auto;
    overflow-y: auto;
  }
</style>