<template>
  <span class="list-item"
  @click="goToEditPage(props.todoInfo)"
  >
    <div class="list-item__text">
      {{ todoInfo.priority }} {{ todoInfo.name }}
    </div>
    <DeleteButton
    @deleteButtonClicked="$emit('deleteTask', todoInfo.id)"
    />
  </span>
</template>

<script setup>
  import DeleteButton from "@/components/DeleteButton.vue";
  import { defineProps, defineEmits } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    todoInfo: {
      type: Object,
      default: {
        id: null,
        name: 'Постирать трусы',
        description: 'Прополоскать трусы',
      }
    }
  })

  const emits = defineEmits([
    'deleteTask'
  ]);

  const router = useRouter();

  function goToEditPage(todoInfo) {
    router.push({
      path: '/todo_edit',
      query: {
        isNewItem: false,
        todoInfo: JSON.stringify(todoInfo),
      }
    });
  }
</script>

<style scoped>

  .list-item {
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    border: 3px solid black;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    background-color: white;
  }

  .list-item__text {
    margin-right: 20px;
  }
</style>