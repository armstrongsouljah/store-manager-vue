import Vue from 'vue';
import VueRouter from 'vue-router';
import WelcomePage from './components/WelcomeComponent';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
     {component:WelcomePage, path:'/'}
    ],
    mode:'history'
});

export default router;
