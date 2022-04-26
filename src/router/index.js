import { createWebHistory, createRouter } from "vue-router";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Email from "../views/Email.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/sendemail",
    name: "Sendemail",
    component: Email,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;