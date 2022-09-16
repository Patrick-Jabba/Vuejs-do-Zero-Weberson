import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');

  if (to.name === "LoginEntry") {
    if (token) {
      next({ name: 'ProductControl' });
    } else {
      next();
    }
  } else if (to.matched.some(rota => rota.meta.requiredAuth)) {
    if (token === null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    if (token === null) {
      next();
    } else {
      next({ name: 'ProductControl' })
    }
  }
});

export default router