import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import Meals from "../views/Meals.vue";
import Meal from "../views/Meal.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/meals",
    name: "Meals",
    component: Meals,
  },
  {
    path: "/meals/:id",
    name: "Meal",
    component: Meal,
  },
  {
    path: "/meals/:id/payment",
    name: "Payment",
    component: Payment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
