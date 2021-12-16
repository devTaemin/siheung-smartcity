import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './routers/Home.vue';
import About from './routers/About.vue';
import Testbeds from './routers/Testbeds.vue';
import Hackathon from './routers/Hackathon.vue';
import Environment from './routers/SmartEnvironment.vue'
import Kindergarten from './routers/SmartKindergarten.vue'
import Art from './routers/SmartArt.vue'
import Sports from './routers/SmartSports.vue'
import Road from './routers/SmartRoad.vue'



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
            children: [
                {
                    path: '/smart-environment',
                    component: Environment,
                },
                {
                    path: '/smart-kindergarten',
                    component: Kindergarten,
                },
                {
                    path: '/smart-art',
                    component: Art,
                },
                {
                    path: '/smart-sports',
                    component: Sports,
                },
                {
                    path: '/smart-road',
                    component: Road,
                },
            ]
        }
    ]
});