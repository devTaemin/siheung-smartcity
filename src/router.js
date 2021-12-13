import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './routers/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ]
});