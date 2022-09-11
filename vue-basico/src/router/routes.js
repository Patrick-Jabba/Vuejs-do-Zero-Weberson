import LoginEntry from '@/views/LoginEntry.vue';
import DashboardPanel from '@/views/DashboardPanel.vue';
import ProductControl from '@/views/ProductControl.vue';
import ClientControl from '@/views/ClientControl.vue';

const routes = [
    {
        path: '/login',
        name: 'LoginEntry',
        component: LoginEntry,
        title: 'LoginEntry',
        meta: {
            requiredAuth: false,
        }
    },
    {
        path: '/',
        name: 'DashboardPanel',
        component: DashboardPanel,
        title: 'DashboardPanel',
        meta: {
            requiredAuth: true,
        }
    },
    {
        path: '/product-control',
        name: 'ProductControl',
        component: ProductControl,
        title: 'Products',
        meta: {
            requiredAuth: true,
        }
    },
    {
        path: '/client-control',
        name: 'ClientControl',
        component: ClientControl,
        title: 'Clients',
        meta: {
            requiredAuth: true,
        }
    }
];

export default routes
