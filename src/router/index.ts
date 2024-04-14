import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnicalView from '../views/TechnicalView.vue'
import HobbiesView from '../views/HobbiesView.vue'

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
    ]
})

export default router
