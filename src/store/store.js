import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todoList: [
        {
          id: 1,
          name: 'Почитать книгу',
          description: 'Почитать книгу',
          beginDate: '1.01.2001',
        },
        {
          id: 2,
          name: 'Погладить кота',
          description: 'Почитать книгу',
          beginDate: '1.01.2001',
        },
        {
          id: 3,
          name: 'Сделать проект П.',
          description: 'Почитать книгу',
          beginDate: '1.01.2001',
        },
        {
          id: 4,
          name: 'Пописить',
          description: 'Почитать книгу',
          beginDate: '1.01.2001',
        }
      ],

      completedList: [
        {
          id: 5,
          name: 'Пакакать',
          description: 'Приятно пакакать попай',
          beginDate: '1.01.2001',
          completeDate: '2.01.2001',
        },
        {
          id: 6,
          name: 'Пофифкать',
          description: 'Приятно пакакать попай',
          beginDate: '1.01.2001',
          completeDate: '2.01.2001',
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
    },

    completeItem(state, todoItem) {
      state.todoList = state.todoList.filter(item => item.id != todoItem.id);

      todoItem.completeDate = new Date();
      state.completedList.push(todoItem);
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