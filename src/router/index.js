import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Meals from "../views/Meals.vue";
import Meal from "../views/Meal.vue";
import Payment from "../views/Payment.vue";
import QR from "../views/QR.vue";
import PaymentSuccessfull from "../views/PaymentSuccess.vue";

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
    path: "/profile",
    name: "Profile",
    component: Profile,
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
  {
    path: "/success",
    name: "Success",
    component: PaymentSuccessfull,
  },
  {
    path: "/qr",
    name: "QR",
    component: QR,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
