import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from "./plugins/vuetify";



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBzRL3uBJu66o-IPnKF5K6BUc586HTfwD8",
  authDomain: "fiambre-e54a0.firebaseapp.com",
  projectId: "fiambre-e54a0",
  storageBucket: "fiambre-e54a0.appspot.com",
  messagingSenderId: "370648886428",
  appId: "1:370648886428:web:fa2d91da355bb98d78d159"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
