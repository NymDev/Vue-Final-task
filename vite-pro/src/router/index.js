import LoginView from '@/view/LoginView.vue'
import SignupView from '@/view/SignupView.vue'
import TodoListView from '@/view/TodoListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component:TodoListView
    },
    {
      path: '/signup',
      name: 'signup',
      component:SignupView
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },

  ],
})

export default router
