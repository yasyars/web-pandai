import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Kegiatan from '../views/Kegiatan.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/kegiatan',
        name: 'Kegiatan',
        component: Kegiatan,
    },
    {
        path: "/list-biro",
        // redirect: {
        //     name: "ListBiro"
        // },
        name: "List Biro",
        component: () =>
            import ('../views/ListBiro.vue')
    },
    {
        path: "/list-kegiatan-paket",
        // redirect: {
        //     name: "ListBiro"
        // },
        name: "List Kegiatan Paket",
        component: () =>
            import ('../views/KegiatanPaket.vue')
    },
    {
        path: "/paket-standar",
        // redirect: {
        //     name: "ListBiro"
        // },
        name: "Paket Standar",
        component: () =>
            import ('../views/PaketStandar.vue')
    },
    {
        path: "/list-batch",
        // redirect: {
        //     name: "ListBiro"
        // },
        name: "List Paket",
        component: () =>
            import ('../views/ListBatch.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})

export default router