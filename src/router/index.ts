import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Buyer from '../views/Buyer.vue'
import Seller from '../views/Seller.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/buyer',
    name: 'Buyer',
    component: Buyer,
    meta: {
      title: "Buyer"
    }
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller,
    meta: {
      title: "Seller"
    }
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
    meta: {
      title: "About us"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
