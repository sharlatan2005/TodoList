import { createWebHistory, createRouter } from 'vue-router';
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
        path: '/',
        redirect: '/todo_list'
      },
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
        name: 'TodoEdit',
        component: TodoEditView,
      }
    ]
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router;