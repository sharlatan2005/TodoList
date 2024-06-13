<template>
  <button class="button"
  @click="$emit('buttonClicked', props.textContent)"
  >
  {{ textContent }}
  </button>
</template>

<script setup>
  import { onMounted, watch } from 'vue';
  import { defineProps, defineEmits } from 'vue';

  const emits = defineEmits([
    'buttonClicked',
  ]);

  const props = defineProps({
    textContent: {
      type: String,
      default: 'Push me'
    }
  })
</script>

<style scoped>
  .button {
    font-size: 18px; 
    font-weight: 500; 
    height: 2em;
    border: none;
    border-radius: 50px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    background-color: #caaffa;
    color: black;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }

</style>