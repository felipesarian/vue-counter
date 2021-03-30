import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'home', 
        component: () => import('./views/Login.vue')
    },
    {
        path: '/register',
        name: 'register', 
        component: () => import('./views/Register.vue')
    },
    {
        path: '/counter',
        name: 'counter', 
        component: () => import('./views/Counter.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router