import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fonts.scss';
import './assets/tailwind.css';
import '../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css';
import '../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import './assets/style.css';

import { VLazyImagePlugin } from 'v-lazy-image';
import VueScrollTo from 'vue-scrollto';

import sslRedirect from 'heroku-ssl-redirect';

Vue.config.productionTip = false;

Vue.use(VLazyImagePlugin);
Vue.use(VueScrollTo);
Vue.use(sslRedirect);

const DEFAULT_TITLE = 'Content Arena – Buy, sell, and manage your sport media rights online';
const POSTFIX_TITLE = 'Content Arena – Buy, sell, and manage your sport media rights online';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title + " | " + POSTFIX_TITLE || DEFAULT_TITLE;
    });
});

router.beforeEach((to, from, next) => {
    if(to.path == '/login')
        window.location.href = "https://contentarena.com/login";
    else if(to.path == '/register')
        window.location.href = "https://contentarena.com/registration";
    else
        next();
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
