import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../views/Home/Home.vue";
import Payment from "../views/Payment/Payment.vue"



const router = createRouter({   

    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/payment',
            component: Payment,
            name: 'Payment'
        }
    ]


})

export default router;