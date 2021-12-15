import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './routers/Home.vue';
import About from './routers/About.vue';
import Testbeds from './routers/Testbeds.vue';
import Hackathon from './routers/Hackathon.vue';


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
        },
        {
            path: '/testbeds',
            name: 'Testbeds',
            component: Testbeds,
        },
        {
            path: '/hackathon',
            name: 'Hackathon',
            component: Hackathon,
        }
    ]
});