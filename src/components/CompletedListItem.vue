<template>
  <span class="completed-list-item">
    <div class="completed-list-item__text">
      Название: {{ completedInfo.name }} <br>
      Начало: {{ getFormattedDate(props.completedInfo.beginDate) }} <br>
      Конец: {{ getFormattedDate(props.completedInfo.completeDate) }} <br>
    </div>
  </span>
</template>

<script setup>
  import { defineProps } from 'vue';

  import { getFormattedDate } from '@/utils/dateUtils';

  const props = defineProps({
    completedInfo: {
      type: Object,
      default: {
        id: null,
        name: 'Постирать трусы',
        description: 'Прополоскать трусы',
        beginDate: '1.01.2001',
        completeDate: '2.01.2001'
      }
    },
  })

</script>

<style scoped>

  .completed-list-item {
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

  .completed-list-item__text {
    margin-right: 20px;
  }
</style>