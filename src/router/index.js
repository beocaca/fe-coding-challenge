import {createWebHistory, createRouter} from "vue-router";
import Admin from '../pages/admin'
import Consumer from '../pages/consumer'
import NotFound from "@/views/NotFound";

const routes = [{
    path: "/:catchAll(.*)", component: NotFound,
}, {
    path: "/consumer", component: Consumer, name: "Consumer"
}, {
    path: "/admin", name: "Admin", component: Admin,
}, {
    path: "/", name: "Home", component: Admin,
},];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;