import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Sobre from '../views/Sobre.vue';
import Teste from '../views/Teste.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    },
    {
        path: '/teste',
        name: 'teste',
        component: Teste
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;