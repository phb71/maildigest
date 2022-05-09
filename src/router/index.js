import { createWebHistory, createRouter } from 'vue-router'
import SignupPage from '../views/SignupPage.vue'
import SigninPage from '../views/SigninPage.vue'
import AccountPage from '../views/AccountPage.vue'
import SignoutPage from '../views/SignoutPage.vue'

const routes = [
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/signin',
    name: 'SigninPage',
    component: SigninPage
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: AccountPage
  },
  {
    path: '/signout',
    name: 'SignoutPage',
    component: SignoutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router