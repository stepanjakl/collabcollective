import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false;

const DEFAULT_TITLE = 'Default Title';
const PREFIX_TITLE = 'Title';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = PREFIX_TITLE + " - " + to.meta.title || DEFAULT_TITLE;
    });
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
