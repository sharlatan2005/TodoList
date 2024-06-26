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
      ]
    }
  },

  mutations: {

  },

  actions: {

  },

  getters: {

  }
})