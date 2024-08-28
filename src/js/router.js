import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/dashboard/dashboard.vue';
import AddEvent from '../components/forms/AddEvent.vue';
import ModifyEvent from '../components/forms/ModifyEvent.vue';

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/events/add', component: AddEvent, props: true },
    { path: '/events/edit', component: ModifyEvent, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }, 100); 
                    }
                    resolve({ left: 0, top: 0 });
                }, 500);
            });
        }
        return { x: 0, y: 0 };
    },
});

export default router;
