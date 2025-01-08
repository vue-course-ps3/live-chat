import { createRouter, createWebHistory } from 'vue-router'
import ChatroomView from '@/views/ChatroomView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { projectAuth } from '@/firebase/config'
//auth guard
const requireAuth = (to, from, next)=>{
  let user = projectAuth.currentUser
  

  if(!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }

}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomView,
    beforeEnter: requireAuth
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
