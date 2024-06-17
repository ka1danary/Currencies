import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import SettingsPage from '@/pages/SettingsPage.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
        meta: { transition: 'slide-left' }
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsPage,
        meta: { transition: 'slide-right' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
