import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './routers/Home.vue';
import About from './routers/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ]
});