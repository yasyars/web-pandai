import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Kegiatan.vue')

    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => Home
    },
    {
        path: '/#kegiatan',
        name: 'Kegiatan',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Kegiatan.vue')
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
        path: "/list-paket",
        // redirect: {
        //     name: "ListBiro"
        // },
        name: "List Paket",
        component: () =>
            import ('../views/ListPaket.vue')
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