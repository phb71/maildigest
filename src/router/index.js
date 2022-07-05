import { createWebHistory, createRouter } from 'vue-router'
import SignupPage from '../views/SignupPage.vue'
import SigninPage from '../views/SigninPage.vue'
import AccountPage from '../views/AccountPage.vue'
import SignoutPage from '../views/SignoutPage.vue'
import DigestPage from '../views/DigestPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AccountPage
  },
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
  },
  {
    path: '/digest',
    name: 'DigestPage',
    component: DigestPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
