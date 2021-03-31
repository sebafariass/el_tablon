import Vue from "vue";
import VueRouter from "vue-router";
import Productos from "../views/Productos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Productos",
    component: Productos
  },
  {
    path: "/contacto",
    name: "Contacto",
   
    component: () =>
      import( "../views/Contacto.vue")
  },
 
];

const router = new VueRouter({
  routes
});

export default router;
