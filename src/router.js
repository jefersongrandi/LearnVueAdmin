import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Login from "./views/login.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    } /*,
    {
      path: '/registrar',
      name: 'SignUp',
      component: SignUp
    }*/,
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
