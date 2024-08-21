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
});

export default router;
