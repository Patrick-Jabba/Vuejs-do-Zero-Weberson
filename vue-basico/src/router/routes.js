import LoginEntry from '@/views/LoginEntry.vue';
import DashboardPanel from '@/views/DashboardPanel.vue';
import ProductControl from '@/views/ProductControl.vue';
import ProductListCard from '@/views/ProductListCard.vue';
import ClientControl from '@/views/ClientControl.vue';
import ProductsAdd from '@/views/ProductsAdd.vue';
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
        path: '/product-control/new',
        name: 'New Product',
        component: ProductsAdd,
        title: 'Adicionar Produto',
        meta: {
            requiredAuth: true,
        }
    },
    {
        path: '/product-control/editar',
        name: 'Edit Product',
        component: ProductsAdd,
        title: 'Editar Produto',
        meta: {
            requiredAuth: true,
        }
    },
    {
        path: '/product-control/list-card',
        name: 'ProductListCard',
        component: ProductListCard,
        title: 'Lista de Produtos em cards',
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
