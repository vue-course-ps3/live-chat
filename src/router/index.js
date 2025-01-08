import { createRouter, createWebHistory } from 'vue-router'
import ChatroomView from '@/views/ChatroomView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
