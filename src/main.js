import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCxF3JevG09xf28dNa5qtcOXHq2F_EjSSc",
  authDomain: "asakolaapps.firebaseapp.com",
  databaseURL: "https://asakolaapps.firebaseio.com",
  projectId: "asakolaapps",
  storageBucket: "asakolaapps.appspot.com",
  messagingSenderId: "370538687339",
  appId: "1:370538687339:web:a028cd5039fba58cbd3a2e",
  measurementId: "G-EPH0Z2C9P3"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user =>{
  store.dispatch("fetchUser",user);
  // console.log(user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
