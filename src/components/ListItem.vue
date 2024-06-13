<template>
  <span class="list-item">
    <div class="list-item__text">
      {{ todoInfo.name }}
    </div>
    <DeleteButton
    @deleteButtonClicked="$emit('deleteTask', todoInfo.id)"
    />
  </span>
</template>

<script setup>
  import DeleteButton from "@/components/DeleteButton.vue";
  import { defineProps, defineEmits } from 'vue';

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