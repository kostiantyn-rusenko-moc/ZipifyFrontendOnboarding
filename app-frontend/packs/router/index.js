import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/homePage/HomePage.vue'
import EditPage from '../components/editPage/EditPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/edit',
        name: 'EditPage',
        component: EditPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
