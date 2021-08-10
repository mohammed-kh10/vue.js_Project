import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import "normalize.css";
//import "./filters"; // Glopals Filters

//Vue.config.productionTip = false;

import { createApp } from "vue";
createApp(App).use(store).use(router).mount("#app");
