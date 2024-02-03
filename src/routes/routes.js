import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

// landingpage , login & register
// user , pinjam buku ,  tampil buku
// admin ,  crud admin buku

const router = createRouter({
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    {
      path: "/home",
      component: HomePage,
      children: [],
    },
  ],
  history: createWebHistory(),
});

export default router;
