import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnicalView from '../views/TechnicalView.vue'
import HobbiesView from '../views/HobbiesView.vue'
import Portfolio from '../views/Portfolio.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/technical',
            name: 'technical',
            component: TechnicalView
        },
        {
            path: '/hobbies',
            name: 'hobbies',
            component: HobbiesView
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        }
    ]
})

export default router
