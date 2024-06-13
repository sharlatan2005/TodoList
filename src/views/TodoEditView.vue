<template>
  <div class="todo-edit">
    <input
    type="text"
    class="todo-edit__name-input"
    placeholder="Введите название задания"
    v-model="_todoName">

    <textarea
    class="todo-edit__description-input"
    v-model="_todoDescription"
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
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    todoName: {
      type: String,
      default: ''
    },
    todoDescription: {
      type: String,
      default: ''
    }
  })

  const _todoName = ref(props.todoName);
  const _todoDescription = ref(props.todoDescription);


  import ButtonItem from "@/components/ButtonItem.vue";

  const saveButtonStyle = {
    backgroundColor: '#36f562',
    color: 'white',
    boxShadow: 'none',
  }

  function processSaveBtnClick() {

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