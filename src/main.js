import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createPinia} from 'pinia';
import routes from '~config/router';
import App from './App';
const router = createRouter({
    history: createWebHistory(),
    routes
});
const pinia = createPinia();
createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
