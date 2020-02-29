import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Buyers from '../views/Buyers.vue'
import Sellers from '../views/Sellers.vue'
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
    path: '/buyers',
    name: 'Buyers',
    component: Buyers,
    meta: {
      title: "Buyers"
    }
  },
  {
    path: '/sellers',
    name: 'Sellers',
    component: Sellers,
    meta: {
      title: "Sellers"
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
  },
  
  {
    path: '/login',
    name: 'Login',
    //redirect: "https://contentarena.com/login"
  },
  {
    path: '/register',
    name: 'Register',
    //redirect: "https://contentarena.com/registration"
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
  mode: 'history'
});

export default router
