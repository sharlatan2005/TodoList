import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from "@/views/HomeView";
import TodoListView from "@/views/TodoListView";
import CompletedListView from "@/views/CompletedListView";
import TodoEditView from '@/views/TodoEditView.vue';

const routes = [
  { 
    path: '/',
    component: HomeView,
    children: [
      { 
        path: '/todo_list',
        component: TodoListView
      },
      {
        path: '/completed_list',
        component: CompletedListView,
      },
      {
        path: '/todo_edit',
        component: TodoEditView,
      }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;