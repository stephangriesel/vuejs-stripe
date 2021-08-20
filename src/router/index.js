import { createRouter, createWebHistory } from "vue-router"
import Home from '../components/home'
import Success from '../components/success'

const routes = [
    {
        path:"/",
        name:"Home",
        component:"Home"
    },
        path:"/success",
        name:"Success",
        component:"Success"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router