import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import PreviousOrder from "../views/PreviousOrder.vue";
import Profile from "../views/Profile.vue";
import EditProfile from "../views/EditProfile.vue";
import Meals from "../views/Meals.vue";
import Meal from "../views/Meal.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import QR from "../views/QR.vue";
import Notifications from "../views/Notifications.vue";
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
    path: "/previousorder",
    name: "Previous Order",
    component: PreviousOrder,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/editprofile",
    name: "EditProfile",
    component: EditProfile,
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
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
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
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
