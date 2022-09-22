import { createRouter, createWebHistory } from 'vue-router';
function lazyLoad(view) {
    return import(`../views/${view}.vue`);
}

const routes = [
    {
        path: '/',
        name: 'index',
        component: lazyLoad('Index')
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: lazyLoad('Sobre')
    },
    {
        path: '/teste',
        name: 'teste',
        component: lazyLoad('Teste')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
