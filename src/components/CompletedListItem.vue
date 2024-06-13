<template>
  <span class="completed-list-item">
    <div class="completed-list-item__text">
      {{ getFormattedDate }} {{ completedInfo.name }}
    </div>
  </span>
</template>

<script setup>
  import { defineProps, computed } from 'vue';

  const props = defineProps({
    completedInfo: {
      type: Object,
      default: {
        id: null,
        name: 'Постирать трусы',
        description: 'Прополоскать трусы',
      }
    },
    completionDate: {
      type: Date,
    }
  })

  const getFormattedDate = computed(() => {
      let year = props.completionDate.getFullYear();
      let month = (1 + props.completionDate.getMonth()).toString().padStart(2, '0');
      let day = props.completionDate.getDate().toString().padStart(2, '0');
    
      return month + '/' + day + '/' + year;
    }
  );

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