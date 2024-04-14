import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnicalView from '../views/TechnicalView.vue'
import HobbiesView from '../views/HobbiesView.vue'
import Languages from '../components/Languages.vue'
import Tools from '../components/Tools.vue'

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
            children: [
                { path: "", component: TechnicalView },
                { path: 'languages', component: Languages },
                { path: 'tools', component: Tools }
            ]
        },
        {
            path: '/hobbies',
            name: 'hobbies',
            component: HobbiesView
        },
    ]
})

export default router
