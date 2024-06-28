import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todoList: [
        {
          id: 1,
          name: 'Почитать книгу',
          description: 'Почитать книгу'
        },
        {
          id: 2,
          name: 'Погладить кота',
          description: 'Почитать книгу'
        },
        {
          id: 3,
          name: 'Сделать проект П.',
          description: 'Почитать книгу'
        },
        {
          id: 4,
          name: 'Пописить',
          description: 'Почитать книгу'
        }
      ],
      completedList: [
        {
          id: 5,
          name: 'Пакакать',
          description: 'Приятно пакакать попай'
        },
        {
          id: 6,
          name: 'Пофифкать',
          description: 'Приятно пакакать попай'
        }
      ]
    }
  },

  mutations: {
    addTodoItem(state, todoItem) {
      state.todoList.push(todoItem);
    },

    addCompletedItem(state, completedItem) {
      state.completedList.push(completedItem);
    },

    updateTodoItem(state, todoItem) {
      console.log(todoItem);
      const index = state.todoList.findIndex(item => item.id === todoItem.id);
      if (index !== -1) {
        state.todoList[index] = todoItem;
      }
    },

    deleteTodoItem(state, itemId) {
      state.todoList = state.todoList.filter(item => item.id !== itemId);
    }
  },

  actions: {

  },

  getters: {
    getTodoListById(state, todoId) {
      return state.todoList.find(item => item.id === todoId);
    }
  }
})